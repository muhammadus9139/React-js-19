import User from "./User"
import { useEffect, useState } from "react";
import { useRef } from "react"
import { useFormStatus } from "react-dom";

function App() {

  const [pending,setpending]=useState(false);

  const handlebutton=async()=>{
    setpending(true);
    
    await new Promise(res =>setTimeout(res,2000))

      setpending(false);

  }

    return(
      <div>
        <h1>useTransition hook using state in react js</h1>
        <button disabled={pending} onClick={handlebutton}>click</button>
      </div>
    );
}

export default App;
