import User from "./User"


function App() {
  const displayName = (name: string) => {
    alert(name)
  }
  const getUser = (email: string) => {
    alert(email)
  }

  return (
    <>
      <h1> Call Parent Component function from child component </h1>
      <User displayName={displayName} name="CodeTav Management" getUser={getUser} email="code@email.com" />
      <User displayName={displayName} name="Koustav Ghosh" getUser={getUser} email="koustav@example.com" />
      <User displayName={displayName} name="Apti Master" getUser={getUser} email="apti@example.com" />
    </>
  )
}

export default App
