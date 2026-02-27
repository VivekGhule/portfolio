import React, { useEffect, useState } from 'react'
import MacWindow from './MacWindow'
import "./notes.scss"
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Notes = ({windowName, windowState, setwindowState}) => {
    const [markdown, setMarkDown] = useState(null)

    useEffect(() => {
        fetch('/note.txt')
        .then(res => res.text())
        .then(text => setMarkDown(text))
    })
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
      {markdown}
    </SyntaxHighlighter> : <p>Loding...</p>}
        </div>
    </MacWindow>
  )
}

export default Notes