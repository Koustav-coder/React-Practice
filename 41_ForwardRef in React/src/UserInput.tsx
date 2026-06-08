// Before React 19, we used to use forwardRef to pass refs to child components. However, with the introduction of React 19, we can now directly use refs with functional components without needing to wrap them in forwardRef. This simplifies our code and makes it more straightforward to work with refs in functional components.

// import { forwardRef } from 'react'
// const UserInput = (props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }

// export default forwardRef(UserInput)
//--------------------------------------------
// With React 19, we can directly use refs with functional components without needing to wrap them in forwardRef.

const UserInput = (props) => {
  return (
    <div> <input type="text" ref={props.ref} /> </div>
    )   
}

export default UserInput 