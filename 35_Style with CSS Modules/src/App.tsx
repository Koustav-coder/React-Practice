
import './App.css'
import UserProfile from './UserProfile'

function App() {  

  return (
    <>
    <h1>Welcome to the App</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
      
    </>
  )
}

export default App
