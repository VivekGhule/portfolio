import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'


const Nav = ({ windowState, setwindowState }) => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="/nav-icons/apple.svg" alt="" />
            </div>
            <div className="nav-item">
              <p>Vivek Ghule</p>
            </div>
             <div className="nav-item" onClick={() => setwindowState({ ...windowState, resume: true })}>
              <p>File</p>
            </div>
            <div className="nav-item">
              <p>Window</p>
            </div>
            <div className="nav-item" onClick={() => setwindowState({ ...windowState, cli: true })}>
              <p>Terminal</p>
            </div>
        </div>
        <div className="right">
          <div className="wifi-icon">
            <img src="/nav-icons/wifi.svg" alt="" />
          </div>
          <div className="nav-item">
              <DateTime />
            </div>
        </div>
    </nav>
  )
}

export default Nav
