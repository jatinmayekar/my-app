from flask import Flask
import imaplib
import email
import os
import traceback
from email.header import decode_header
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route("/")
def index():
    username1 = os.getenv("GMAIL_USERNAME")
    password1 = os.getenv("GMAIL_PASSWORD")
    print(f"Username: {username1}, Password: {password1}")
    try:
        with imaplib.IMAP4_SSL("imap.gmail.com") as m:
            #m.login("username", "password")
            m.login(user=username1, password=password1)
            m.select("inbox")

            # Define the timestamp five seconds ago
            five_seconds_ago = datetime.utcnow() - timedelta(seconds=5)
            formatted_time = five_seconds_ago.strftime('%d-%b-%Y %H:%M:%S')

            # Search for emails by date (might need to adjust the date)
            status, messages = m.search(None, '(SINCE "{}")'.format(five_seconds_ago.strftime('%d-%b-%Y')))

            if status == 'OK':
                for num in messages[0].split():
                    typ, msg_data = m.fetch(num, '(RFC822)')
                    raw_email = msg_data[0][1]

                    msg = email.message_from_bytes(raw_email)
                    email_date = msg["Date"]
                    email_datetime = datetime.strptime(email_date, '%a, %d %b %Y %H:%M:%S %z')

                    # Filter emails within the last 5 seconds
                    if email_datetime >= five_seconds_ago:
                        subject, _ = decode_header(msg["Subject"])[0]
                        print(f"Subject: {subject.decode('utf-8') if isinstance(subject, bytes) else subject}")

    except imaplib.IMAP4.error as e:
        print("IMAP4 error occurred:", e)
        traceback.print_exc()
    except Exception as e:
        print("An unexpected error occurred:", e)
        traceback.print_exc()

    return "Done"

if __name__ == "__main__":
    app.run(debug=True)
