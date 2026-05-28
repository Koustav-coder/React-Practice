import './App.css'
import College from './College.jsx'
import collegeData from './CollegeData.json'

function App() {
  return (
    <>
      <h1> Nested Looping with Components </h1>
      {
        collegeData.map((college, index) => (
          <div key={index}>
          <College  college={college} />
          </div>
        ))
      }
    </>
  )
}




export default App
