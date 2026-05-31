import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
 

   //callOnce(); // This will be called every time the component renders, which is not what we want.
   useEffect(() => {
     callOnce(); // This will only be called once when the component mounts.
     //callEveryTime(); // This will be called every time the component renders.
   }, [count]); // The empty dependency array [] ensures that the effect runs only once.

    function callOnce() {
    console.log('This function will only be called once.', count);
  }

  function callEveryTime() {
    console.log('This function will be called every time the component renders.', count);
  }

  return (
    <>
      <h1> useEffect Hook </h1>
      <button onClick={() => setCount(count + 1)}> Count is {count} </button>
      <button onClick={() => setCount2(count2 + 1)}> Call Every Time {count2} </button>
    </>
  )
}

export default App

/* Handling dependency arrays in useEffect is crucial for controlling when the effect runs. In the example above, the useEffect hook has a dependency array that includes 'count'. This means that the effect will run every time 'count' changes. If you want the effect to run only once when the component mounts, you can provide an empty dependency array ([]). If you want it to run every time any state changes, you can omit the dependency array altogether.
In the provided code, the callOnce function will only be called once when the component mounts, while the callEveryTime function will be called every time the component renders. This allows you to control the behavior of your effects based on your specific needs.
1.
useEffect (() => {
   // call every time the component renders
} )
2.
useEffect (() => {
   // call only once when the component mounts
}, [] )
3.
useEffect (() => {
   // call every time the 'count' state changes
}, [count] )
4.
useEffect (() => {
   // call every time the 'count' or 'count2' state changes
}, [count, count2] )
5. useEffect (() => {
   // call every time the 'props1' or 'props2' props change
}, [props1, props2] )

multiple useEffect hooks can be used in a single component to handle different side effects. Each useEffect can have its own dependency array, allowing you to control when each effect runs based on specific state or prop changes. This modular approach helps keep your code organized and makes it easier to manage complex side effects in your React components.
Example:
useEffect(() => {
   // Effect for handling count changes
}, [count])

useEffect(() => {
   // Effect for handling count2 changes
}, [count2])

useEffect(() => {
   // Effect for handling component mount
}, [])
*/
