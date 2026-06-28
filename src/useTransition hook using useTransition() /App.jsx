import User from "./User"
import { startTransition, useEffect, useState, useTransition } from "react";
import { useRef } from "react"
import { useFormStatus } from "react-dom";

function App() {

  const [pending,starttransition]=useTransition();

  const handlebutton=async()=>{
   starttransition(async()=>{
          await new Promise(res =>setTimeout(res,5000))
   })
  }


    return(
      <div>
        <h1>useTransition hook using useTransition() in react js</h1>
        {
          pending?
          <img style={{width:"80px" ,marginTop:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
          :null
        }
        <button disabled={pending} onClick={handlebutton}>click</button>
      </div>
    );
}

export default App;
