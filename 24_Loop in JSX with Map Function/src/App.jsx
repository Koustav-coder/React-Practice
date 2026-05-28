import { useState } from 'react'


function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ])

  return (
    <div>
      <h3>Dummy Data Table</h3>
      <table border="1">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{users[0].id}</td>
                <td>{users[0].name}</td>
              </tr>
              <tr>
                <td>{users[1].id}</td>
                <td>{users[1].name}</td>
              </tr>
              <tr>
                <td>{users[2].id}</td>
                <td>{users[2].name}</td>
              </tr>
            </tbody>  
        </table>
        <h3>Loop in JSX with Map Function</h3>
        <table border="1">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}> 
                {/* If you will remove key then issue will occur - Each child in an array should have a unique "key" prop */}
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>  
        </table>
    </div>
  )
}

export default App
