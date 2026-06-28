import { useEffect, useState } from "react";
import {useRef} from "react"

function App() {

    const userRef=useRef();
    const passwordRef=useRef();

    const handleform=(event)=>{
        event.preventDefault();
        const user=document.querySelector('#user').value;
         const password=document.querySelector('#password').value;
        console.log(user,password);
    }

     const handleformRef=(event)=>{
        event.preventDefault();
       const user=userRef.current.value;
       console.log("User:",user);
       const password=passwordRef.current.value;
       console.log("Password:",password);
     }



  return(
    <>
    <h1>Uncontrolled components</h1>
    <h3 >Uncontrolled component with query selector</h3>
    <form action="" onSubmit={handleform}>
      <input type="text"id="user" placeholder="Enter username" />
      <br /><br />
      <input type="password" id="password" placeholder="Enter passowrd" />
      <br /><br />
      <button>Submit</button>
    </form>

    <hr/>

    <h3 >Uncontrolled component with useRef</h3>
    <form action="" onSubmit={handleformRef}>
      <input type="text" ref={userRef} placeholder="Enter username" />
      <br /><br />
      <input type="password" ref={passwordRef} placeholder="Enter passowrd" />
      <br /><br />
      <button>Submit with Ref</button>
    </form>
    </>
  );
}

export default App;
