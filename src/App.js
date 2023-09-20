import { Page, Text, Image, Display, Input, Spacer } from '@geist-ui/core'
import React, { useState } from 'react';

//const gh = 'https://github.com/geist-org/react'
//const docs = 'https://react.geist-ui.dev'

const App = () => {
  //const redirect = url => window.open(url)
  const [inputValue, setInputValue] = useState('');  // State to store the input value
  
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
            <Input clearable='true' placeholder="Ask away..." width="100%"
            onChange={(e) => setInputValue(e.target.value)}  // Update state on input change
            />
            <br /><br />
            <Input 
              type="success"
              readOnly  // Make the second input read-only
              value={inputValue}  // Display the stored value
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