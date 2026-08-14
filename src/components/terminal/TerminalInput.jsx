import { useState } from 'react'

export default function TerminalInput({ onCommand }) {
  const [input, setInput] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCommand(input)
      setInput('')
    }
  }

  return (
    <div className="
      text-sm
      border-none
      pl-4
      pt-2
      pb-4
      m-0
      font-normal
    ">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{color: '#c8c8c8'}}>guest</span>
        <span style={{color: '#ff6b7a'}}>@</span>
        <span style={{color: '#7fb342'}}>teofil-corad-portfolio</span>
        <span style={{color: '#ff6b7a'}}>:~$ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#c8c8c8',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.95rem',
            outline: 'none',
            flex: 1,
            padding: 0,
            marginLeft: '0.25rem',
          }}
          autoFocus
        />
      </div>
    </div>
  )
}
