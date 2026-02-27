import React from 'react'
import "./cli.scss"
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'

const Cli = ({windowName,setwindowState}) => {
  const commands = {
    about: {
      description: 'Information about me',
      usage: 'about',
      fn: () => 'Full-stack developer passionate about building beautiful and functional web applications.'
    },
    projects: {
      description: 'List my projects',
      usage: 'projects',
      fn: () => `
  1. Portfolio Website - React, Vite, SCSS
  2. Task Manager App - Node.js, MongoDB, Express
  3. Weather Dashboard - React, OpenWeather API
  4. E-commerce Platform - Next.js, Stripe API
  5. Chat Application - Socket.io, React`
    },
    skills: {
      description: 'Show my technical skills',
      usage: 'skills',
      fn: () => `
  Frontend: React,HTML5, CSS3, SCSS, JavaScript, Vite,GSAP
  Backend: Node.js, Express, Python, Django
  Databases: MongoDB, PostgreSQL, MySQL
  Tools: Git, Docker, Webpack, REST APIs
  Other: Responsive Design, UI/UX, Agile`
    },
    contact: {
      description: 'Show contact information',
      usage: 'contact',
      fn: () => `
  Email:vivekghule777@gmail.com
  LinkedIn: https://www.linkedin.com/in/vivekghule7/
  Location: Pune, India`
    },
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    date: {
      description: 'Show current date and time',
      usage: 'date',
      fn: () => new Date().toString()
    },
    whoami: {
      description: 'Show current user',
      usage: 'whoami',
      fn: () => 'vivekvoid'
    },
    github: {
      description: 'Show GitHub profile link',
      usage: 'github',
      fn: () => 'https://github.com/vivekvoid'
    }
  }
  return (
    <MacWindow windowName={windowName}setwindowState={setwindowState} height='60vh'>
        <div className="terminal">
          <Terminal
            commands={commands}
            welcomeMessage={`
╔════════════════════════════════════════════════════════╗
║  Welcome to My Portfolio Terminal (macOS Style)      ║
║  Type 'help' to see available commands               ║
╚════════════════════════════════════════════════════════╝

Get started:
  › help     - List all commands
  › about    - Learn about me
  › projects - View my work
  › skills   - See my tech stack
  › contact  - Get in touch
`}
            promptLabel={'vivekghule@dev:~$'}
            promptLabelStyle={{ color: '#00d026', fontWeight: 'bold', fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace" }}
          />

        </div>

    </MacWindow>
  )
}

export default Cli