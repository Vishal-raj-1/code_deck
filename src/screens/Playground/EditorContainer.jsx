import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import { BiEditAlt } from 'react-icons/bi'
import { ModalContext } from '../../context/ModalContext'
import Select from 'react-select';

const StyledEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const UpperToolBar = styled.div`
  background: #fff;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.3rem;
`

const SelectBars = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button{
    padding: 12px;
    background: skyblue;
    border: none;
    border-radius: 5px;
  }
`
const EditorContainer = ({
  title,
  currentLanguage,
  setCurrentLanguage,
  currentCode,
  setCurrentCode,
  folderId,
  playgroundId
}) => {

  const { openModal } = useContext(ModalContext)
  const themeOptions = [
    { value: 'githubDark', label: 'githubDark' },
    { value: 'githubLight', label: 'githubLight' },
    { value: 'bespin', label: 'bespin' },
    { value: 'duotoneDark', label: 'duotoneDark' },
    { value: 'duotoneLight', label: 'duotoneLight' },
    { value: 'dracula', label: 'dracula' },
    { value: 'xcodeDark', label: 'xcodeDark' },
    { value: 'xcodeLight', label: 'xcodeLight' },
    { value: 'vscodeDark', label: 'vscodeDark' },
    { value: 'vscodeLight', label: 'vscodeLight' },
    { value: 'okaidia', label: 'okaidia' },
  ]

  const languageOptions = [
    { value: 'cpp', label: 'cpp' },
    { value: 'javascript', label: 'javascript' },
    { value: 'java', label: 'java' },
    { value: 'python', label: 'python' },
  ]

  const handleThemeChange = (selectedOption) => {
    setCurrentTheme(selectedOption)
  }

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption)
  }

  const [currentTheme, setCurrentTheme] = useState({ value: 'githubDark', label: 'githubDark' })
  const [language, setLanguage] = useState(() => {
    for(let i=0; i<languageOptions.length; i++) {
      if(languageOptions[i].value === currentLanguage) {
        return languageOptions[i]
      }
    }
    return languageOptions[0];
  })
  return (
    <StyledEditorContainer>
      <UpperToolBar>
        <Title>
          <h3>{title}</h3>
          <BiEditAlt onClick={() => openModal({
            show: true,
            modalType: 5,
            identifiers: {
              folderId: folderId,
              cardId: playgroundId,
            }
          })} />
        </Title>
        <SelectBars>
          <button>Save code</button>
          <Select
            options={languageOptions}
            value={currentLanguage}
            onChange={setCurrentLanguage}
          />
          <Select
            options={themeOptions}
            value={currentTheme}
            onChange={handleThemeChange}
          />
        </SelectBars>
      </UpperToolBar>
      <CodeEditor
        currentLanguage={currentLanguage}
        currentTheme={currentTheme}
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
      />
    </StyledEditorContainer >
  )
}

export default EditorContainer