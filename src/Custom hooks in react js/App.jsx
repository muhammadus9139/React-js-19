import { startTransition, useActionState, useEffect, useState, useTransition } from "react";
import useToggle from "./useToggle";

function App() {

  const [value,togglevalue] = useToggle(true);

  return (
    <div>
      <button onClick={togglevalue}>Toggle button</button>
      <button onClick={()=>togglevalue(false)}>Hide heading</button>
      <button onClick={()=>togglevalue(true)}>Show heading</button>

      {
             value? <h1>Custom hooks in react js</h1>:null
      }
  
    </div>
  );

}

export default App;
