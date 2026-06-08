import { useRef } from 'react'

import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const inputHandler=() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.color = 'red';
      inputRef.current.placeholder = 'Focus is on me!';
      inputRef.current.value = 'Hello, useRef!';
    }
  }
  const toggleHandler = () => {
    if (inputRef.current) {
      inputRef.current.style.display = inputRef.current.style.display === 'none' ? 'block' : 'none';
    }
  }
  const h1Handler = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'blue';
      h1Ref.current.textContent = 'Bills Paid!';
    }
  }
  return (
    <>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input type="text" placeholder="Enter text..." ref={inputRef} />
      <button onClick={inputHandler}>Focus Input</button>
      <h1 ref={h1Ref}>Pay the bills</h1>
      <button onClick={
        h1Handler}> Pay </button>

    </>
  )
}

export default App
