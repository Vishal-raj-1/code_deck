import React, {useContext}from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
const EditFolder = ({folderId, playgroundId}) => {
  const {closeModal} = useContext(ModalContext);
  
  return (
    <>
      <Header>
        <Heading>Edit Folder</Heading>
        <IoCloseSharp onClick={() => closeModal()}/>
      </Header>
      <p>Enter New Name: <input type="text" on/></p>
      <button>Edit Folder</button>
    </>
  )
}

export default EditFolder;