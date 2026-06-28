import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import UserProfile from "./userProfile";
import {useRef} from "react"

function App() {

  const inputRef=useRef(null);

  const inputhandle=()=>{
    console.log(inputRef);
   inputRef.current.focus();
   inputRef.current.style.color='green';
   inputRef.current.placeholder="enter something"
   inputRef.current.value="134"
  }

   const toggle=()=>{
    console.log(inputRef);
    if(inputRef.current.style.display!="none"){
      inputRef.current.style.display="none"
    }
    else{
      inputRef.current.style.display="inline"
    }
   
  }

return(
  <>
  <h1>useRef hook</h1>
  <input ref={inputRef} type="text" placeholder="Enter value"/>
  <button onClick={inputhandle} >Focus on input filed</button>
  <button onClick={toggle} >toggle</button>
  </>
);
}

export default App;
