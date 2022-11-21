import React, { useState } from 'react'
import Select from 'react-select'
// npm i @uiw/react-codemirror
import CodeMirror from '@uiw/react-codemirror'
// npm i @uiw/codemirror-theme-bespin @uiw/codemirror-theme-duotone @uiw/codemirror-theme-dracula @uiw/codemirror-theme-github @uiw/codemirror-theme-xcode @uiw/codemirror-theme-vscode @uiw/codemirror-theme-okaidia

// theme
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { bespin } from '@uiw/codemirror-theme-bespin'
import { duotoneDark, duotoneLight } from '@uiw/codemirror-theme-duotone'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode'
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode'
import { okaidia } from '@uiw/codemirror-theme-okaidia'

// npm i @codemirror/lang-cpp @codemirror/lang-java @codemirror/lang-javascript @codemirror/lang-python

// language
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'

//configuration
import { indentUnit } from '@codemirror/language'
import { EditorState } from '@codemirror/state'

const CodeEditor = () => {


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
        { value: 'javascript', label: 'javascript' },
        { value: 'cpp', label: 'cpp' },
        { value: 'java', label: 'java' },
        { value: 'python', label: 'python' },
    ]

    // const handleThemeChange = (selectedOption) => {
    //     setTheme(selectedOption)
    // }

    // const handleLanguageChange = (selectedOption) => {
    //     setLanguage(selectedOption)
    // }


    const [theme, setTheme] = useState(githubDark)
    const [language, setLanguage] = useState(javascript)
    const [code, setCode] = useState(`console.log('hello world!'),`)

    return (
        <div>
            <div>
            {/* <Select 
                options={themeOptions}
                value={theme}
                onChange={handleThemeChange}
            />

            <Select
                options={languageOptions}
                value={language}
                onChange={handleLanguageChange}
            />
            Language: {language}
            theme: {theme} */}

            </div>
            <CodeMirror
                value={code}
                height="100%"
                theme={theme}
                extensions={[
                    language,
                    indentUnit.of("        "),
                    EditorState.tabSize.of(8),
                    EditorState.changeFilter.of(() => true)
                ]}
                onChange={(value) => setCode(value)}
                basicSetup={{
                    lineNumbers: true,
                    highlightActiveLineGutter: true,
                    highlightSpecialChars: true,
                    history: true,
                    foldGutter: true,
                    drawSelection: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                    syntaxHighlighting: true,
                    bracketMatching: true,
                    closeBrackets: true,
                    autocompletion: true,
                    rectangularSelection: true,
                    crosshairCursor: true,
                    highlightActiveLine: true,
                    highlightSelectionMatches: true,
                    closeBracketsKeymap: true,
                    defaultKeymap: true,
                    searchKeymap: true,
                    historyKeymap: true,
                    foldKeymap: true,
                    completionKeymap: true,
                    lintKeymap: true,
                }}
            />
        </div>
    )
}

export default CodeEditor