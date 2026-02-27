import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import { useState } from 'react'
import GitHub from './components/windows/GitHub'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'


const App = () => {

  const [windowState, setwindowState] = useState({
    github:false,
    notes :false,
    resume :false,
    spotify :false,
    cli :false,

  })
  return (
   <main>
    <Nav windowState={windowState} setwindowState={setwindowState} />
    <Dock windowState={windowState} setwindowState={setwindowState} />
    {windowState.github && <GitHub windowName='github'setwindowState={setwindowState} />}
    {windowState.notes && <Notes windowName='notes' setwindowState={setwindowState} />}
    {windowState.resume && <Resume windowName='resume' setwindowState={setwindowState} />}
    {windowState.spotify && <Spotify windowName='spotify' setwindowState={setwindowState} />}
    {windowState.cli && <Cli windowName='cli'setwindowState={setwindowState} />}


   </main>
  )
}

export default App
