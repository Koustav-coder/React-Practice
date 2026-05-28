import { useState } from 'react'

import Clock from './Clock.jsx'

function App() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>Digital Clock in React</h1>
      <select onChange={(e) => setColor(e.target.value)} value={color}>   
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
      </select>
      <Clock color={color} />
    </>
  )
}

export default App
