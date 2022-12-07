import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import { BiEditAlt, BiImport, BiExport, BiFullscreen } from 'react-icons/bi'
import { ModalContext } from '../../context/ModalContext'
import Select from 'react-select';
import { languageMap } from '../../context/PlaygroundContext'

const StyledEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: ${({ isFullScreen }) => isFullScreen ? '100vh' : 'calc(100vh - 4.5rem)'};
`

const UpperToolBar = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0.8rem 0.4rem;

  @media (max-width: 540px){
    height: 8rem;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 540px){
    width: 100%;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2.3rem;
  font-size: 1.3rem;
  @media (min-width: 540px){
    margin-right: 1rem;
  }
`

const SelectBars = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  & > div{
    width: 8rem;
  }

  & > div:last-child{
    width: 10rem;
  }
`

const Button = styled.button`
  padding: 0.7rem 0.4rem;
  width: 6.2rem;
  background: #0097d7;
  border: none;
  border-radius: 32px;
  font-weight: 700;
  cursor: pointer;
`

const CodeEditorContainer = styled.div`
    height: calc(100% - 4rem);

    & > div{
        height: 100%;
    }
`

const LowerToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 0.8rem 1rem;

  input{
    display: none;
  }

  label, a, button{
    font-size: 1.2rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: black;
  }
  button:first-child{
    background: none;
  }
  button:last-child{
    font-weight: 400;
    font-size: 1.1rem;
  }
`
const SaveAndRunButton = styled.button`
  padding: 0.6rem 1rem;
  background: #0097d7;
  border: none;
  border-radius: 32px;
  font-weight: 700;
  cursor: pointer;
`
const EditorContainer = ({
  title,
  currentLanguage,
  setCurrentLanguage,
  currentCode,
  setCurrentCode,
  folderId,
  playgroundId,
  saveCode,
  runCode,
  getFile,
  isFullScreen,
  setIsFullScreen
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
    setCurrentLanguage(selectedOption.value)
    setCurrentCode(languageMap[selectedOption.value].defaultCode)
  }

  const [currentTheme, setCurrentTheme] = useState({ value: 'githubDark', label: 'githubDark' })
  const [language, setLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      if (languageOptions[i].value === currentLanguage) {
        return languageOptions[i]
      }
    }
    return languageOptions[0];
  })

  return (
    <StyledEditorContainer isFullScreen={isFullScreen}>
     {!isFullScreen && <UpperToolBar>
        <Header>
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
          <Button onClick={saveCode}>Save code</Button>
        </Header>
        <SelectBars>
          <Select
            options={languageOptions}
            value={language}
            onChange={handleLanguageChange}
          />
          <Select
            options={themeOptions}
            value={currentTheme}
            onChange={handleThemeChange}
          />
        </SelectBars>
      </UpperToolBar>
      }
      <CodeEditorContainer>
        <CodeEditor
          currentLanguage={currentLanguage}
          currentTheme={currentTheme.value}
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
        />
      </CodeEditorContainer>
      <LowerToolBar>
        <button onClick={() => setIsFullScreen((isFullScreen) => !isFullScreen)}>
          <BiFullscreen /> {isFullScreen ? 'Minimize Screen' : 'Full Screen'}
        </button>

        <label htmlFor="codefile">
          <input type="file" accept="." id="codefile" onChange={(e) => getFile(e, setCurrentCode)} /> <BiImport /> Import Code
        </label>

        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentCode)}`} download="code.txt">
          <BiExport /> Export Code
        </a>
        <SaveAndRunButton onClick={runCode}>Run Code</SaveAndRunButton>
      </LowerToolBar>
    </StyledEditorContainer >
  )
}

export default EditorContainer