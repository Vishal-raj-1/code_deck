import React, {useContext} from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
const NewPlaygroundAndFolder = () => {
  const {closeModal} = useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Create New Playground & Create New Folder</Heading>
        <IoCloseSharp onClick={() => closeModal()}/>
      </Header>
      <p>Enter Folder Name: <input type="text" /></p>
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

export default NewPlaygroundAndFolder