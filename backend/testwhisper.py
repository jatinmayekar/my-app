import whisper

model = whisper.load_model("base")
result = model.transcribe("C:/Users/jatin/Downloads/recorded_audioreere.mp3")
print(result["text"])