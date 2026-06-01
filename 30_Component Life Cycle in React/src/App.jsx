import { useState } from 'react'

import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const [display, setDisplay] = useState(true)

  return (
    <>
    {
      display?<Counter count={count} data={data} />:null
    }
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setData(data + 1)}>Increment Data</button>
      <button onClick={() => setDisplay(!display)}>Toggle Counter</button>
    </>
  )
}

export default App
