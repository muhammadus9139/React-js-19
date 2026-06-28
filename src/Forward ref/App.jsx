import User from "./User"
import { useEffect, useState } from "react";
import {useRef} from "react"

function App() {

    const inputRef=useRef(null);

    const updateinput=()=>{
      inputRef.current.value=100;
      inputRef.current.focus();
    }
    
  return(
   <div>
    <h1>Forward ref</h1>
   <User ref={inputRef} />
    <button onClick={updateinput}>Update input field</button>
   </div>
  );
}

export default App;
