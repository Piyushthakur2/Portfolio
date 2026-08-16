import json
import logging

from app.config import MODEL_NAME, client
from app.models import Resume
from app.prompts import resume_parser_prompt

logger = logging.getLogger(__name__)

resume_schema = Resume.model_json_schema()


def parse_resume(resume_text: str) -> Resume:
    """
    Converts resume text into a structured Resume object.
    """

    system_prompt = resume_parser_prompt(resume_schema)

    try:

        response = client.chat.completions.create(
            model=MODEL_NAME,
            response_format={"type": "json_object"},
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": f"Parse this resume:\n\n{resume_text}",
                },
            ],
        )

        raw_json = response.choices[0].message.content

        data = json.loads(raw_json)

        resume = Resume(**data)

        logger.info("Resume parsed successfully.")

        return resume

    except json.JSONDecodeError:

        logger.exception("Invalid JSON returned from model.")

        raise ValueError("Resume parser returned invalid JSON.")

    except Exception:

        logger.exception("Resume parsing failed.")

        raise