import React from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'

const NewPlayground = () => {
  return (
    <>
      <Header>
        <Heading>Create New Playground</Heading>
        <IoCloseSharp />
      </Header>
      <p>Enter PLayground: <input type="text" /></p>
      <select name="" id="">
        <option value="c++">C++</option>
        <option value='java'>Java</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>
      <button>Create New Playground</button>
    </>
  )
}

export default NewPlayground