import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './User'
import Todo from './ToDo'

function App() {
  const [count, setCount] = useState(0)
  function operation(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 0;
    }
  }

  return (
    <>
     <h1>CodeTav Management!</h1>
     <h1>Hello React!</h1>
     <h1>Counter Value: {count}</h1>
     <h1>Operation Result: {operation(10, 5, '-')}</h1>
      <User />
      <Todo />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default App
