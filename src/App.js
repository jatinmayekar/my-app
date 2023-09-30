import { Page, Text, Image, Display, Input, Button, Spacer, Textarea } from '@geist-ui/core'
import React, { useState, useRef } from 'react';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleSendToAPI = async () => {
    try {
      const result = await axios.post('http://localhost:5000/get-response', { userInput: userInput });
      const responseText = result.data.response;
      setApiResponse(result.data.response);

      // After displaying the text, get the audio and play it
      const audioResult = await axios.post('http://localhost:5000/get-response-audio', { text: responseText });
      const audioBlob = new Blob([audioResult.data], { type: 'audio/wav' });
      const audioURL = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioURL);
      audio.play();

    } catch (error) {
      console.error("Error calling the backend:", error);
    }
  };

  const handleRecordAudio = async () => {
    if (!isRecording) {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(mediaStream);
      mediaRecorderRef.current.ondataavailable = event => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const audioURL = URL.createObjectURL(audioBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = audioURL;
        downloadLink.download = 'recorded_audio.mp3';
        downloadLink.click();
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } else {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <Page dotBackdrop width="800px" padding={0}>
      <Display
        title="Nerd AI"
        caption={
          <>
            Welcome to{' '}
            <Text span b>
              Nerd AI
            </Text>{' '}
            and start learning more !
            <Spacer h={.5} />
            <Input 
              value={userInput} 
              onChange={(e) => setUserInput(e.target.value)}
              clearable 
              placeholder="Ask away..." 
              width="100%" 
            />
            <br /><br />
            <Button loading={false} onClick={handleRecordAudio}>
              {isRecording ? "Stop Recording" : "Start Recording"}
            </Button>
            <Button onClick={handleSendToAPI}>Send to ChatGPT</Button>
            <br /><br />
            <Textarea
              width="100%"
              resize='both'
              value={apiResponse}
              readOnly
            />
          </>
        }>
        <Image width="280px" height="160px" src="/geist-banner.png" draggable={false} />
      </Display>
    </Page>
  )
}

export default App;
