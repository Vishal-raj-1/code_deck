import React from 'react'
import { Console, Header, TextArea } from './InputConsole'
import { BiExport } from 'react-icons/bi'

const OutputConsole = ({ currentOutput }) => {
  return (
    <Console>
      <Header>
        Output:

        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentOutput)}`} download="output.txt">
          <BiExport /> Export Output
        </a>

      </Header>
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
  )
}

export default OutputConsole