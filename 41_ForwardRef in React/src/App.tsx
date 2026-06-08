import { useRef } from 'react'
import UserInput from './UserInput'
function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const updateInput = () => {
    if (inputRef.current) {
      inputRef.current.value = 'Hello World'
      inputRef.current.focus()
    }
  }
  return (
    <>
      <h1> ForwardRef in React</h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Update Input</button>
      
    </>
  )
}

export default App
