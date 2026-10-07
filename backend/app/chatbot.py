from app.config import MODEL_NAME, client
from app.models import Resume
from app.prompts import interview_prompt


REFUSAL_MESSAGE = (
    "I'm Piyush's portfolio AI, so I can only answer questions about "
    "Piyush, his experience, skills, projects, education, and "
    "professional background."
)


def is_portfolio_question(question: str) -> bool:
    """
    Basic guardrail to prevent clearly unrelated questions
    from being sent to the LLM.
    """

    question_lower = question.lower().strip()

    portfolio_keywords = [
        # Person
        "piyush",
        "your",
        "you",
        "yourself",
        "your experience",
        "your background",

        # Experience / career
        "experience",
        "internship",
        "intern",
        "job",
        "work",
        "career",
        "role",
        "company",
        "gemini solutions",

        # Skills / technologies
        "skill",
        "skills",
        "technology",
        "technologies",
        "tech stack",
        "programming",
        "language",
        "framework",
        "database",
        "python",
        "javascript",
        "react",
        "node",
        "express",
        "mongodb",
        "sql",
        "git",
        "linux",
        "streamlit",
        "xgboost",

        # Projects
        "project",
        "projects",
        "codesync",
        "whizchat",
        "cropxpert",
        "crop recommendation",
        "portfolio",

        # Education
        "education",
        "degree",
        "college",
        "university",
        "ccet",
        "certification",
        "certifications",

        # Recruitment / interview
        "hire",
        "hiring",
        "recruiter",
        "resume",
        "cv",
        "candidate",
        "strength",
        "weakness",
        "achievement",
        "qualification",
    ]

    return any(keyword in question_lower for keyword in portfolio_keywords)


def ask_candidate(question: str, resume: Resume) -> str:
    """
    Generate a response from the candidate profile.
    """

    if not is_portfolio_question(question):
        return REFUSAL_MESSAGE

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {
                "role": "system",
                "content": interview_prompt(resume),
            },
            {
                "role": "user",
                "content": question,
            },
        ],
        temperature=0,
        max_tokens=400,
    )

    return response.choices[0].message.content


def stream_candidate(
    question: str,
    resume: Resume,
    history: list
):
    """
    Stream the candidate's answer from Groq
    while preserving conversation context.
    """

    # Reject clearly unrelated questions before calling the LLM
    if not is_portfolio_question(question):
        yield REFUSAL_MESSAGE
        return

    # System instructions + verified resume
    messages = [
        {
            "role": "system",
            "content": interview_prompt(resume),
        }
    ]

    # Add previous conversation
    for message in history[-6:]:
        messages.append(
            {
                "role": message.role,
                "content": message.content,
            }
        )

    # Add current question
    messages.append(
        {
            "role": "user",
            "content": question,
        }
    )

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=messages,
        temperature=0,
        max_tokens=400,
        stream=True,
    )

    for chunk in response:

        if not chunk.choices:
            continue

        content = chunk.choices[0].delta.content

        if content:
            yield content