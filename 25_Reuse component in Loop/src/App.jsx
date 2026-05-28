import { useState } from 'react'
import User from './User'


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ])

  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User props={user} />
        </div>
      ))}
      
    </div>
  )
}

export default App
