import React from 'react'
import "./dock.scss"

const Dock = ({windowState, setwindowState}) => {
  return (
    <footer className='dock'>
        <div className="icon"><img src="/mac-icons/github.png" alt="Github" onClick={() => setwindowState({...windowState, github:true})} /></div>
        <div className="icon"><img src="/mac-icons/notes.png" alt="Notes" onClick={() => setwindowState({...windowState, notes:true})} /></div>
        <div className="icon"><img src="/mac-icons/pdf.png" alt="CV" onClick={() => setwindowState({...windowState, resume:true})} /></div>
        <div className="icon"><img src="/mac-icons/Calendar.png" alt="Calendar" onClick={() => window.open('https://calendar.google.com')} /></div>
        <div className="icon"><img src="/mac-icons/spotify.png" alt="Spotify" onClick={() => setwindowState({...windowState, spotify:true})} /></div>
        <div className="icon"><img src="/mac-icons/Mail.png" alt="Mail" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vivekghule777@gmail.com','_blank')} /></div>
        <div className="icon"><img src="/mac-icons/FolderLink.png" alt="FolderLink" onClick={() => window.open('https://www.linkedin.com/in/vivekghule7/','_blank')} /></div>
        <div className="icon"><img src="/mac-icons/terminal.png" alt="Terminal" onClick={() => setwindowState({...windowState, cli:true})} /></div>


    </footer>
  )
}

export default Dock
