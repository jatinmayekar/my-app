import { Page, Text, Image, Display, Input, Button, Spacer } from '@geist-ui/core'
import React, { useState } from 'react';
import axios from 'axios';

//const gh = 'https://github.com/geist-org/react'
//const docs = 'https://react.geist-ui.dev'

const App = () => {
  //const redirect = url => window.open(url)
  const [userInput, setUserInput] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleSendToAPI = async () => {
    // Concatenate the user's input with a predefined prompt
    const prompt = "Finish this sentence tersely: " + userInput;

    try {
      // Make an API call (this is a mock API endpoint and headers)
      const result = await axios.post('https://api.openai.com/v2/engines/text-davinci/completions', {
        prompt: prompt,
        max_tokens: 150
      }, {
        headers: {
          'Authorization': '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',
          'Content-Type': 'nerdai'
        }
      });

      // Set the response in the state to display it
      setApiResponse(result.data.choices[0].text);
    } catch (error) {
      console.error("Error calling the API:", error);
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