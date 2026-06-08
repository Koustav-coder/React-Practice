import {useFormStatus} from 'react-dom'
function App() {
  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submit");
  }
  function CustomerForm(){
    const {pending} = useFormStatus();
    console.log(pending);

    return (
      <div>
        <input type="text" placeholder='Enter your name' />
        <br /><br />
        <input type="email" placeholder='Enter your email' />
        <br /><br />
        <input type="password" placeholder='Enter your password' />
        <br /><br />
        <button disabled={pending}>{pending?"Submitting...":"Submit"}</button>
      </div>
    )
  }
  return (
    <>
      <h1>useFormStatus Hook in React js 19</h1>   
      <form action={handleSubmit}><CustomerForm /></form> 
        
    </>
  )
}

export default App
