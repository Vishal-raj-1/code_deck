import React, {useContext}from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
const EditFolder = () => {
  const {setIsOpenModal} = useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Edit Folder</Heading>
        <IoCloseSharp onClick={() => setIsOpenModal(false)}/>
      </Header>
      <p>Enter New Name: <input type="text" /></p>
      <button>Edit Folder</button>
    </>
  )
}

export default EditFolder;