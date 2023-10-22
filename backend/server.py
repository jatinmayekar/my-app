from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS
from flask import Flask, session
from flask_session import Session
from gtts import gTTS
from pydub import AudioSegment
from pydub.playback import play
from dotenv import load_dotenv
load_dotenv()

import base64
import openai
import os
import json
import logging
logging.basicConfig(level=logging.DEBUG)

import google.oauth2.credentials
import google_auth_oauthlib.flow
import googleapiclient.discovery
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google.cloud import pubsub_v1

openai.api_key = os.getenv("OPENAI_API_KEY")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
CLIENT_ID = os.getenv("CLIENT_ID")
REDIRECT_URI = os.getenv("REDIRECT_URI")

app = Flask(__name__)
CORS(app)  # Handle CORS
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = os.urandom(24)
Session(app)

# Global level SCOPES variable
SCOPES = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/gmail.modify'
]

def text_to_speech(text):
    tts = gTTS(text=text, lang='en')
    filename = "temp.mp3"
    tts.save(filename)
    sound = AudioSegment.from_mp3(filename)
    play(sound)
    os.remove(filename)

def process_user_input(user_input):
    prompt = ("You are YuMi, ABB Robotics' coffee-serving robot, stationed at the Society of Women's Conference in Los Angeles, CA. "
              "Your programming is designed to provide answers with a mix of professionalism, precision, and a touch of sarcasm. "
              "Make guests feel welcomed while informing them about ABB and coffee. "
              "A guest approaches and asks: " + user_input)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": prompt}],
        temperature=0,
        max_tokens=256,
    )

    # Log the response
    logging.debug("Received user input: %s", user_input)
    logging.debug("Generated prompt: %s", prompt)
    logging.debug("OpenAI Response: %s", response.choices[0].text)
    #logging.debug("Full OpenAI Response: %s", response)

    # Convert response to speech
    text_to_speech(response.choices[0].message.content)
    return jsonify({"response": response.choices[0].message.content})

def watch_gmail_account(service, user_id, topic_name):
    request = {
        'labelIds': ['INBOX'],
        'topicName': f'projects/aiwebapp-1/topics/{topic_name}'
    }
    #service.users().watch(userId=user_id, body=request).execute()
    try:
        service.users().watch(userId=user_id, body=request).execute()
    except googleapiclient.errors.HttpError as error:
        print(f'An error occurred: {error}')

@app.route('/get-response', methods=['POST'])
def get_response():
    try:
        user_input = request.json.get('userInput')
        return process_user_input(user_input)
    except Exception as e:
        logging.error("Exception occurred: ", exc_info=True)
        return jsonify({"error": str(e)})
    
@app.route('/get-response-audio', methods=['POST'])
def get_response_audio():
    try:
        text = request.json.get('text')
        # Convert text to audio using your TTS function
        audio_path = text_to_speech(text) # This function should return the path to the audio file
        return send_file(audio_path, as_attachment=True)
    except Exception as e:
        logging.error("Exception occurred: ", exc_info=True)
        return jsonify({"error": str(e)})
    
@app.route('/notifications', methods=['POST'])
def notifications():
    # Validation and message processing logic
    envelope = json.loads(request.data.decode('utf-8'))
    payload = base64.b64decode(envelope['message']['data'])
    attributes = envelope['message']['attributes']

    # Reinitialize the Gmail API client
    creds_info = session['credentials']
    creds = google.oauth2.credentials.Credentials(
        token=creds_info['token'],
        refresh_token=creds_info['refresh_token'],
        token_uri=creds_info['token_uri'],
        client_id=creds_info['client_id'],
        client_secret=creds_info['client_secret'],
        scopes=creds_info['scopes']
    )
    # Implement this function
    service = googleapiclient.discovery.build('gmail', 'v1', credentials=creds)
    
    # Fetch the latest email
    results = service.users().messages().list(userId='me', maxResults=1).execute()
    messages = results.get('messages', [])
    if not messages:
        print("No messages found.")
        return '', 204
    
    message = messages[0]
    msg = service.users().messages().get(userId='me', id=message['id']).execute()
    
    email_data = msg['payload']['headers']
    for values in email_data:
        name = values['name']
        if name == 'From':
            from_name = values['value']
            print(f"From: {from_name}")
        if name == 'Subject':
            subject_text = values['value']
            print(f"Subject: {subject_text}")
    
    if 'data' in msg['payload']['body']:
        base64_email_content = msg['payload']['body']['data']
    else:
        base64_email_content = msg['payload']['parts'][0]['body']['data']
    byte_code = base64.urlsafe_b64decode(base64_email_content)
    email_content = byte_code.decode("utf-8")
    print(f"Email Content: {email_content}")

    return '', 204

@app.route('/')
def index():
    if 'credentials' not in session:
        return redirect('authorize')
    # Deserialize credentials from session and recreate Credentials object
    creds_info = session['credentials']
    creds = google.oauth2.credentials.Credentials(
        token=creds_info['token'],
        refresh_token=creds_info['refresh_token'],
        token_uri=creds_info['token_uri'],
        client_id=creds_info['client_id'],
        client_secret=creds_info['client_secret'],
        scopes=creds_info['scopes']
    )

    service = googleapiclient.discovery.build('gmail', 'v1', credentials=creds)

    # Deprecated: OAuth2.0 feature is complex and not needed for proof-of-concept. Use IMAP methods instead
    # print("Starting watch...")
    # Add the watch function for projects/aiwebapp-1/topics/gmail_notifications
    # watch_gmail_account(service, 'me', 'gmail_notifications')
    
    # List the recent emails (change this as per requirement)
    results = service.users().messages().list(userId='me', maxResults=1).execute()
    messages = results.get('messages', [])
    if not messages:
        print("No messages found.")
        return
    
    message = messages[0]
    msg = service.users().messages().get(userId='me', id=message['id']).execute()
    if msg:
        email_data = msg['payload']['headers']

        # This block gets the email content
        if 'data' in msg['payload']['body']:
            base64_email_content = msg['payload']['body']['data']
            byte_code = base64.urlsafe_b64decode(base64_email_content)
            email_content = byte_code.decode("utf-8")
        else:
            base64_email_content = msg['payload']['parts'][0]['body']['data']
            byte_code = base64.urlsafe_b64decode(base64_email_content)
            email_content = byte_code.decode("utf-8")

        for values in email_data:
            name = values['name']
            if name == 'From':
                from_name = values['value']
                print(f"From: {from_name}")  # Debugging output
            if name == 'Subject':
                subject_text = values['value']
                print(f"Subject: {subject_text}")  # Debugging output

        print(f"Email Content: {email_content}\\n")

        #gpt_response = process_user_input(email_content)
        #print(f"Response from GPT: {gpt_response}\\n")

    return "Check the console for emails!"

@app.route('/authorize')
def authorize():
    flow = google_auth_oauthlib.flow.Flow.from_client_config(
        {
            "web": {
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://accounts.google.com/o/oauth2/token",
                "redirect_uris": [REDIRECT_URI],
            }
        },
        scopes=SCOPES
    )
    flow.redirect_uri = url_for('oauth2callback', _external=True)
    authorization_url, state = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true'
        #prompt='consent' # force re-authorization
    )

    session['state'] = state
    return redirect(authorization_url)

@app.route('/oauth2callback')
def oauth2callback():   
    # Null check before accessing session variable
    state = session.get('state', None)
    if state is None:
        logging.error("State is missing in session.")
        return redirect(url_for('index'))

    flow = google_auth_oauthlib.flow.Flow.from_client_config(
        {
            "web": {
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://accounts.google.com/o/oauth2/token",
                "redirect_uris": [REDIRECT_URI],
            }
        },
        scopes=SCOPES,
        state=state
    )
    flow.redirect_uri = url_for('oauth2callback', _external=True)

    authorization_response = request.url
    flow.fetch_token(authorization_response=authorization_response)

    # Serialize necessary fields and store in session
    creds = flow.credentials
    session['credentials'] = {
        'token': creds.token,
        'refresh_token': creds.refresh_token,
        'token_uri': creds.token_uri,
        'client_id': creds.client_id,
        'client_secret': creds.client_secret,
        'scopes': creds.scopes
    }

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(ssl_context=('localhost.pem', 'localhost-key.pem'))
    #app.debug=True

# add push notif - fetch automatically new emails
# send to chatgpt
