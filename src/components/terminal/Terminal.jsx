import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import TerminalFrame from './TerminalFrame'
import Banner from './Banner'
import Welcome from './Welcome'
import TerminalHeader from './TerminalHeader'
import TerminalInput from './TerminalInput'
import About from './views/About'
import Projects from './views/Projects'
import Contact from './views/Contact'

export default function Terminal() {
  const navigate = useNavigate()
  const location = useLocation()
  const [commandHistory, setCommandHistory] = useState([])

  // Map URL paths to view names
  const pathToView = {
    '/': 'welcome',
    '/about': 'about',
    '/projects': 'projects',
    '/contact': 'contact',
  }

  const currentView = pathToView[location.pathname] || 'welcome'

  const handleCommand = (command) => {
    const trimmed = command.trim().toLowerCase()
    
    setCommandHistory([...commandHistory, { type: 'input', value: command }])

    if (trimmed === 'help') {
      setCommandHistory(prev => [...prev, { 
        type: 'output', 
        value: 'Available commands:\n  about    - Learn more about me\n  projects - View my projects\n  contact  - Get in touch\n  home/ root     - Go to main view\n  help     - Show this help message' 
      }])
    } else if (trimmed === 'about') {
      setCommandHistory([])
      navigate('/about')
    } else if (trimmed === 'projects') {
      setCommandHistory([])
      navigate('/projects')
    } else if (trimmed === 'contact') {
      setCommandHistory([])
      navigate('/contact')
    } else if (trimmed === 'home' || trimmed === 'root' || trimmed === 'welcome' || trimmed === 'clear') {
      setCommandHistory([])
      navigate('/')
    } else if (trimmed !== '') {
      setCommandHistory(prev => [...prev, { 
        type: 'output', 
        value: `Command not found: ${command}. Type 'help' for available commands.` 
      }])
    }
  }

  const renderView = () => {
    switch(currentView) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="
      min-h-screen
      w-full
      bg-terminal-bg
    ">
      <TerminalFrame>
        <TerminalHeader view={currentView} />
        <div>
          {currentView === 'welcome' && <Banner />}
          {currentView === 'welcome' && <Welcome />}
          {currentView !== 'welcome' && renderView()}
        </div>
        <div>
          {commandHistory.map((cmd, idx) => (
            <pre 
              key={idx}
              className="pl-4 pt-2 pb-0 m-0 text-sm whitespace-pre-wrap break-words"
              style={{color: cmd.type === 'input' ? '#c8c8c8' : '#999'}}
            >
              {cmd.type === 'input' && (
                <>
                  <span style={{color: '#c8c8c8'}}>guest</span>
                  <span style={{color: '#ff6b7a'}}>@</span>
                  <span style={{color: '#7fb342'}}>teofil-corad-portfolio</span>
                  <span style={{color: '#ff6b7a'}}>:~$ </span>
                </>
              )}
              {cmd.value}
            </pre>
          ))}
        </div>
        <TerminalInput onCommand={handleCommand} />
      </TerminalFrame>
    </div>
  )
}
