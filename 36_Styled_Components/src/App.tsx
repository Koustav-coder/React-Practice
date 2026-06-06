import styled from 'styled-components'
import './App.css'

function App() {
  // Styled Components - 2 ways to create styled components
  // 1. Using template literals
  const Heading = styled.h4`
    color: red;
    font-size: 20px;
    margin: 20px;
    padding: 10px;
    border: 1px solid red;
    border-radius: 5px;
  `
  // 2. Using an object
  const Heading2 = styled.h4({
    color: 'blue',
    fontSize: '20px',
    margin: '20px',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px'
  })
  const StyledButton = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: darkgreen;
    }
  `

  return (
    <>
       <h1>Styled Components</h1> 
       <Heading>Styled Components</Heading>     
       <Heading2>Styled Components</Heading2>
        <StyledButton>Click Me</StyledButton>
        <StyledButton>Click Me</StyledButton>
    </>
  )
}

export default App
