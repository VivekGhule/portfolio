import React from 'react'
import "./resume.scss"
import MacWindow from './MacWindow'


const Resume = ({windowName,setwindowState}) => {
  return (
    <MacWindow windowName={windowName} setwindowState={setwindowState}>
        <div className="resume-window">
            <embed src="/CV.pdf" type="" />
        </div>
    </MacWindow>
  )
}

export default Resume