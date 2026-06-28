import User from "./User"
import { useEffect, useState } from "react";
import {useRef} from "react"

function App() {

    const display=(name)=>{
      alert(name);
    }

     const getuser=()=>{
      alert("user get");
    }

  return(
    <div>
   <h1>Pass function in component as props</h1>
   <User display={display}  getuser={getuser}/>
   <User display={display} getuser={getuser}/>
   </div>
  );
}

export default App;
