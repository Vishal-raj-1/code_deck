import React from 'react'
import { Console, Header, TextArea } from './InputConsole'


const OutputConsole = ({ currentOutput }) => {
  return (
    <Console>
      <Header>
        Output:
      </Header>
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
  )
}

export default OutputConsole