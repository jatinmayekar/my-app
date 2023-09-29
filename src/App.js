import { Page, Text, Image, Display, Input, Button, Spacer } from '@geist-ui/core'
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleSendToAPI = async () => {
    try {
      const result = await axios.post('http://localhost:5000/get-response', { userInput: userInput });
      setApiResponse(result.data.response);
    } catch (error) {
      console.error("Error calling the backend:", error);
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
            <Button onClick={handleSendToAPI}>Send to ChatGPT</Button>
            <br /><br />
            <Input 
              value={apiResponse}
              readOnly
              width="100%" 
            />
          </>
        }>
        <Image width="280px" height="160px" src="/geist-banner.png" draggable={false} />
      </Display>
    </Page>
  )
}

export default App