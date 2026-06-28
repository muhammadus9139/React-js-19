import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import User from "./User";
import Counter from "./Counter";

function App() {
   
  const [count,setcount]=useState(0);
  const [data,setdata]=useState(0);
  const [display,setdisplay]=useState(true);

  return(
    <div>
      {
        display? <Counter count={count} data={data}><Counter/></Counter>:null
      }
      <button onClick={()=>setcount(count+1)}>Counter {count}</button>
      <button onClick={()=>setdata(data+1)}>Data {data}</button>
      <button onClick={()=>setdisplay(!display)}>Toggle</button>
    </div>
  );
}

export default App;
