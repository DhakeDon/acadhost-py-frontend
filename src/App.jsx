import React, { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [time, setTime]       = useState('')
  const [runtime, setRuntime] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => { setMessage(d.message); setTime(d.time); setRuntime(d.runtime) })
      .catch(() => setMessage('Could not reach backend'))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '60px auto', textAlign: 'center' }}>
      <h1 style={{ color: '#3776AB' }}>AcadHost Demo — Python</h1>
      <p style={{ fontSize: 18 }}>Backend says: <strong>{message}</strong></p>
      {runtime && <p style={{ color: '#666' }}>Runtime: {runtime}</p>}
      {time && <p style={{ color: '#888' }}>Server time: {time}</p>}
      <hr />
      <p style={{ color: '#aaa', fontSize: 13 }}>Vite + React + Flask · Combined Python · AcadHost</p>
    </div>
  )
}

export default App
