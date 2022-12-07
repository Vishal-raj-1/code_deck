import React, {useContext} from 'react'
import styled from 'styled-components'
import { NewFolder, NewPlayground, NewPlaygroundAndFolder, EditFolder, EditPlaygroundTitle, Loading } from './ModalTypes'
import { ModalContext } from '../context/ModalContext'

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background-color: #fff;
    padding: 1.5rem;
    width: 35%;
    min-width: 300px;
    border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;

  input {
    flex-grow: 1;
    height: 2rem;
  }

  button {
    background: #241f21;
    height: 2.5rem;
    color: white;
    padding: 0.3rem 2rem;
  }
`;

const Modal = () => {
  const { isOpenModal } = useContext(ModalContext)
  const { modalType } = isOpenModal;
  // ModalTypes
  // 1: New Folder
  // 2: New Playground
  // 3: New Playground and Folder
  // 4: Rename Folder
  // 5: Rename Playground
  return (
    <ModalContainer>
      <ModalContent>
        {modalType === 1 && <NewFolder />}
        {modalType === 2 && <NewPlayground />}
        {modalType === 3 && <NewPlaygroundAndFolder />}
        {modalType === 4 && <EditFolder />}
        {modalType === 5 && <EditPlaygroundTitle />}
        {modalType === 6 && <Loading />}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal