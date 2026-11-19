import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

const colors = ['#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed', '#0891b2']

function App() {
  const [time, setTime] = useState(new Date())

  // Update the clock every second and clear the interval on unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Cycle through the color palette each second
  const currentColor = colors[time.getSeconds() % colors.length]

  return (
    <div className="clock-wrapper">
      <div className="clock-box" style={{ borderColor: currentColor }}>
        <h1 className="clock-heading">Digital Clock</h1>
        <p className="clock-time" style={{ color: currentColor }}>
          {format(time, 'pp')}
        </p>
        <p className="clock-date">{format(time, 'PPPP')}</p>
      </div>
    </div>
  )
}

export default App
