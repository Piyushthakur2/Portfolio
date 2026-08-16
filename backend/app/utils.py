from pathlib import Path

from pypdf import PdfReader


def read_pdf(file_path: Path) -> str:
    if not file_path.exists():
        raise FileNotFoundError(f"{file_path} does not exist")

    reader = PdfReader(file_path)

    pages = []

    for page in reader.pages:
        text = page.extract_text()

        if text:
            pages.append(text)

    return "\n".join(pages)