//via useState hook we can manage the pending state of the button and disable it while the async operation is in progress. When the button is clicked, we set the pending state to true, which disables the button. We then simulate an async operation using setTimeout and a Promise. After the operation is complete, we set the pending state back to false, re-enabling the button.
// import { useState } from "react"



// function App(){
//   const [pending, setPending] = useState(false);
//   const handleButtonClick = async() => {
//     setPending(true);
//     setTimeout(() => {
//       setPending(false);
//     }, 2000);
//     await new Promise((resolve) => {setTimeout(() => { resolve("Data loaded");}, 2000);
//     }).then((data) => {
//       console.log(data);
//     });
//   }
//   return (
//     <div >
//       <h1>UseTransition Hook in React js 19</h1>
//       <button disabled={pending} onClick={handleButtonClick}>Click me</button>
//     </div>
//   )

// }
// export default App
//---------------------------
//useTrtansition hook is used to manage the pending state of the button and disable it while the async operation is in progress. When the button is clicked, we set the pending state to true, which disables the button. We then simulate an async operation using setTimeout and a Promise. After the operation is complete, we set the pending state back to false, re-enabling the button.


import { useTransition } from "react";
function App(){
  const [pending, startTransition] = useTransition();
  const handleButtonClick = async() => { //before React 19, useTransition was there from 18 but it was not used for managing pending state of the button. It was used for managing the transition state of the component. But now in React 19, we can use useTransition to manage the pending state of the button and disable it while the async operation is in progress.
    startTransition(async () => { await new Promise(res=>setTimeout(res,2000))});
}
  return (
    <div >
      <h1>UseTransition Hook in React js 19</h1>
      {
        pending?
        <img style={{ width: "50px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading" /> 
        :null
      }
      <button disabled={pending} onClick={handleButtonClick}>Click me</button>
    </div>
  )
}
export default App 