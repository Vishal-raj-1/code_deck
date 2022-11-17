import React, { useContext } from 'react'
import { Header, CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'

const NewFolder = () => {
  const { closeModal } = useContext(ModalContext);
  return (
    <>
      <Header>
        <h2>Create New Folder</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" />
        <button>Create Folder</button>
      </Input>
    </>
  )
}

export default NewFolder