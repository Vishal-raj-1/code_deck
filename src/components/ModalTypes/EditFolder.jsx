import React, { useContext } from 'react'
import { Header, CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
const EditFolder = ({ folderId, playgroundId }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <>
      <Header>
        <h2>Edit Folder Title</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" />
        <button>Update Title</button>
      </Input>
    </>
  )
}

export default EditFolder;