import json
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse

from fastapi.middleware.cors import CORSMiddleware

from app import cache as cache_store
from app.chatbot import ask_candidate, stream_candidate
from app.logger import logger
from app.models import (
    ChatRequest,
    ChatResponse,
    Resume,
)
from app.parser import parse_resume
from app.utils import read_pdf


# --------------------------------------------------
# Paths
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

RESUME_PATH = BASE_DIR / "Resume_Piyush.pdf"

PARSED_RESUME_PATH = BASE_DIR / "parsed_resume.json"


# --------------------------------------------------
# Application lifespan
# --------------------------------------------------

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Load the parsed resume when the application starts.

    Uses the cached JSON when it is newer than the PDF.
    If the PDF has been updated, the resume is parsed again
    and the cache is replaced.
    """

    try:

        # --------------------------------------------------
        # Check whether a valid cached resume exists
        # --------------------------------------------------

        cache_is_valid = False

        if PARSED_RESUME_PATH.exists():

            resume_modified_time = RESUME_PATH.stat().st_mtime
            cache_modified_time = PARSED_RESUME_PATH.stat().st_mtime

            # Cache is valid only when it was created/updated
            # after the PDF was last modified.
            if cache_modified_time >= resume_modified_time:
                cache_is_valid = True

        # --------------------------------------------------
        # Load cached resume
        # --------------------------------------------------

        if cache_is_valid:

            logger.info(
                "Loading resume from cached JSON..."
            )

            parsed_resume = Resume.model_validate_json(
                PARSED_RESUME_PATH.read_text(
                    encoding="utf-8"
                )
            )

            cache_store.resume_cache = parsed_resume

            logger.info(
                "Cached resume loaded successfully."
            )

        # --------------------------------------------------
        # Resume changed OR cache doesn't exist
        # --------------------------------------------------

        else:

            if PARSED_RESUME_PATH.exists():

                logger.info(
                    "Resume PDF has changed. "
                    "Re-parsing resume..."
                )

            else:

                logger.info(
                    "No cached resume found. "
                    "Parsing resume..."
                )

            resume_text = read_pdf(
                RESUME_PATH
            )

            parsed_resume = parse_resume(
                resume_text
            )

            # Save the newly parsed resume
            PARSED_RESUME_PATH.write_text(
                parsed_resume.model_dump_json(
                    indent=2
                ),
                encoding="utf-8"
            )

            cache_store.resume_cache = parsed_resume

            logger.info(
                "Resume parsed and cache updated successfully."
            )

    except Exception as e:

        logger.exception(
            "Failed to load resume."
        )

        raise RuntimeError(
            "Unable to start application."
        ) from e

    yield

    logger.info(
        "Application shutting down."
    )


# --------------------------------------------------
# FastAPI application
# --------------------------------------------------

app = FastAPI(
    title="Portfolio AI Chatbot",
    description="AI HR Interview Assistant",
    version="1.0.0",
    lifespan=lifespan,
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Routes
# --------------------------------------------------

@app.get("/")
def home():
    return {
        "message": "Portfolio Chatbot API",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    # Make sure resume was loaded
    if cache_store.resume_cache is None:
        raise HTTPException(
            status_code=500,
            detail="Resume not loaded."
        )

    try:

        answer = ask_candidate(
            request.question,
            cache_store.resume_cache
        )

        return ChatResponse(
            answer=answer
        )

    except Exception as e:

        logger.exception("Failed to generate chatbot response.")

        raise HTTPException(
            status_code=500,
            detail="Unable to generate response."
        ) from e


@app.post("/chat/stream")
def chat_stream(request: ChatRequest):

    if cache_store.resume_cache is None:
        raise HTTPException(
            status_code=500,
            detail="Resume not loaded."
        )

    def generate():

        try:

            for chunk in stream_candidate(
                request.question,
                cache_store.resume_cache,
                request.history
            ):

                yield f"data: {json.dumps({'content': chunk})}\n\n"

            yield "data: [DONE]\n\n"

        except Exception as e:

            logger.exception(
                "Streaming response failed."
            )

            yield (
                f"data: {json.dumps({'error': 'Unable to generate response.'})}\n\n"
            )

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        },
    )

