import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import User from "./User";

function App() {
  
  const [counter,setcounter]=useState(0);
  const [data,setdata]=useState(0);

   useEffect(()=>{
       callOnce();
    
    },[]) // blank [] means only once

      function counterfunction(){
        console.log("Counter function",counter);
      }


  function callOnce(){
      console.log("callOnce function called")
    }

  return(
    <div>
      <h1>useEffect hook</h1>
      <button onClick={()=>setcounter(counter+1)}>Counter {counter}</button>
      <button onClick={()=>setdata(data+1)}>Data {data}</button>
    </div>
  );
}

export default App;
