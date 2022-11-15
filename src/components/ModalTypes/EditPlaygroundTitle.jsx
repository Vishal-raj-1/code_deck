import React, {useContext} from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
const EditPlaygroundTitle = () => {
  const {closeModal} = useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Edit Playground</Heading>
        <IoCloseSharp onClick={() => closeModal()}/>
      </Header>
      <p>Enter New Name: <input type="text" /></p>
      <button>Edit Playground</button>
    </>
  )
}

export default EditPlaygroundTitle