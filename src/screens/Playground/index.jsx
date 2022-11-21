import React, { useContext } from 'react'
import EditorContainer from './CodeEditor'
// import InputContainer from './InputContainer'
// import OutputContainer from './OutputContainer'
import Navbar from './Navbar'

const Playground = () => {

  return (
    <div>
      <Navbar />
      <EditorContainer />
    </div>
  )
}

export default Playground