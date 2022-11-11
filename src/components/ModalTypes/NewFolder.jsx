import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'

const NewFolder = () => {
  return (
    <>
      <Header>
        <Heading>Create New Folder</Heading>
        <IoCloseSharp />
      </Header>
      <p>Enter Folder Name: <input type="text" /></p>
      <button>Create New Folder</button>
    </>
  )
}

export default NewFolder