import os
from dotenv import load_dotenv, find_dotenv
#load_dotenv("C:/Users/jatin/OneDrive/Documents/aiportfolio1/my-app/backend/.env")
load_dotenv(find_dotenv())
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
print(CLIENT_SECRET)