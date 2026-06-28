import { useState } from "react";
import Counter from "./Counter";

function App() {
   
  const [count,setcount]=useState(0);
  const [data,setdata]=useState(0);
  

  return(
    <div>
      <Counter count={count} data={data}/>
      <button onClick={()=>setcount(count+1)}>Counter {count}</button>
      <button onClick={()=>setdata(data+1)}>Data {data}</button>
    </div>
  );
}

export default App;
