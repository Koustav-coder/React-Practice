
import React, { useRef } from 'react';

function App() {
  const userRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleForm=(event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = (document.querySelector('#user') as HTMLInputElement)?.value;
    const email = (document.querySelector('#email') as HTMLInputElement)?.value;
    const message = (document.querySelector('#message') as HTMLTextAreaElement)?.value;
    console.log({ user, email, message });
  }

  const handleFormWithRef=(event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = userRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    console.log({ user, email, message });
  }


  return (
    <>
      
      <h1>Uncontrolled Component</h1>

      <form action="" method="post" onSubmit={handleForm}>
        <label htmlFor="user">Name:</label>
        <input type="text" id="user" name="name" placeholder="Enter your name" />
        <br /> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
        <br /> <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />
      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormWithRef}>
        <label htmlFor="userRef">Name:</label>
        <input type="text" ref={userRef} id="userRef" name="name" placeholder="Enter your name" />
        <br /> <br />
        <label htmlFor="emailRef">Email:</label>
        <input type="email" ref={emailRef} id="emailRef" name="email" placeholder="Enter your email" />
        <br /> <br />
        <label htmlFor="messageRef">Message:</label>
        <textarea ref={messageRef} id="messageRef" name="message" placeholder="Enter your message"></textarea>
        <br />
        <button type="submit">Submit with useRef</button>
      </form>
    </>
  )
}

export default App
