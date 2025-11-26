import { useState } from 'react'
import HolaMundo from './components/HolaMundo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HolaMundo />
    </>
  )
}

export default App
