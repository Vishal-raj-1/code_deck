import React, { useContext, useState } from 'react'
import { Header, CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
const NewFolder = () => {
  const { closeModal } = useContext(ModalContext);
  const { addFolder } = useContext(PlaygroundContext)
  const [folderTitle, setFolderTitle] = useState("");

  return (
    <>
      <Header>
        <h2>Create New Folder</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" onChange={(e) => setFolderTitle(e.target.value)} />
        <button onClick={() => {
          addFolder(folderTitle)
          closeModal()
        }}>Create Folder</button>
      </Input>
    </>
  )
}

export default NewFolder