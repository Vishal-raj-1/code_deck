import React, {useContext} from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
const NewPlayground = () => {
  const {setIsOpenModal} = useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Create New Playground</Heading>
        <IoCloseSharp onClick={() => setIsOpenModal(false)}/>
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