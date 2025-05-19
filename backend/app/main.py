from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from typing import List
from app.Services.File_service import extract_text_from_file
from app.Services.Skill_Service import extract_skills_from_text
from app.middleware.logging import LoggingMiddleware

app = FastAPI(
    title="Resume Skills Extractor API",
    description="API for extracting skills from resume files",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add logging middleware
app.add_middleware(LoggingMiddleware)

@app.get("/")
async def read_root():
    return {"message": "Welcome to Resume Skills Extractor API"}

@app.post("/api/extract-skills")
async def extract_skills(file: UploadFile = File(...)):
    """
    Extract skills from an uploaded resume file.
    Accepts PDF and text files.
    """
    # Validate file type
    if file.content_type not in ["application/pdf", "text/plain"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid file type. Please upload a PDF or text file."
        )
    
    try:
        # Extract text from file
        text = await extract_text_from_file(file)
        
        # Extract skills from text
        skills = extract_skills_from_text(text)
        
        return {
            "skills": skills
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing file: {str(e)}"
        )

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)