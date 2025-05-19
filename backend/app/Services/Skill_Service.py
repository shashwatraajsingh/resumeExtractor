import os
import logging
from typing import List
import re
from fastapi import APIRouter, UploadFile, File

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Path to the skills CSV file (assume it's in the backend root directory)
SKILLS_CSV_PATH = os.path.join(os.path.dirname(__file__), '../../skills.csv')

# Load skills from CSV once
SKILLS_LIST = []
if os.path.exists(SKILLS_CSV_PATH):
    with open(SKILLS_CSV_PATH, 'r', encoding='utf-8') as f:
        # Support both comma-separated and line-separated formats
        content = f.read()
        if ',' in content:
            SKILLS_LIST = [skill.strip() for skill in content.split(',') if skill.strip()]
        else:
            SKILLS_LIST = [line.strip() for line in content.splitlines() if line.strip()]
    logger.info(f"Loaded {len(SKILLS_LIST)} skills from CSV.")
else:
    logger.warning(f"Skills CSV file not found at {SKILLS_CSV_PATH}")

def extract_skills_from_text(text: str) -> List[str]:
    """
    Extract skills from text using CSV-based keyword matching (case-insensitive),
    but match 'R' only as a standalone uppercase 'R'.
    Args:
        text (str): The input resume text
    Returns:
        List[str]: List of found skills
    """
    if not text or not isinstance(text, str):
        logger.warning("Invalid input text provided")
        return []
    if not SKILLS_LIST:
        logger.warning("No skills loaded from CSV")
        return []
    found = set()
    text_lower = text.lower()
    
    # Skip "R" entirely
    for skill in SKILLS_LIST:
        if skill == 'R' or skill == 'r':
            continue
        if skill.lower() in text_lower:
            found.add(skill)
    return sorted(found)

router = APIRouter()

@router.post("/extract-skills")
async def extract_skills(file: UploadFile = File(...)):
    # Read the uploaded file
    contents = await file.read()
    text = contents.decode('utf-8')  # Assuming the file is a text file

    # Extract skills from the text
    extracted_skills = extract_skills_from_text(text)

    # Filter out the skill "R"
    filtered_skills = [skill for skill in extracted_skills if skill.strip().lower() != "r"]

    logger.info(f"Extracted skills before filtering: {extracted_skills}")

    # Return the filtered skills
    return {"skills": filtered_skills}
