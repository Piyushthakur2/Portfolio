from app.config import MODEL_NAME, client
from app.models import Resume
from app.prompts import interview_prompt


def ask_candidate(question: str, resume: Resume) -> str:
    """
    Generate a normal response from the candidate profile.
    """

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

    # Add the current question
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