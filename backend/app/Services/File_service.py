import fitz  # PyMuPDF
from fastapi import UploadFile

async def extract_text_from_file(file: UploadFile) -> str:
    """
    Extract text from an uploaded file (PDF or text)
    """
    content = await file.read()
    
    # Handle based on file type
    if file.content_type == "application/pdf":
        return extract_text_from_pdf(content)
    elif file.content_type == "text/plain":
        return content.decode("utf-8")
    else:
        raise ValueError(f"Unsupported file type: {file.content_type}")

def extract_text_from_pdf(content: bytes) -> str:
    """
    Extract text from PDF content using PyMuPDF
    """
    text = ""
    with fitz.open(stream=content, filetype="pdf") as doc:
        for page in doc:
            text += page.get_text()
    return text