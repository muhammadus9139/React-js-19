import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import User from "./User";
import Counter from "./Counter";

function App() {
   
  const [count,setcount]=useState(0);

  return(
    <div>
      <Counter count={count}/>
      <button onClick={()=>setcount(count+1)}>Counter {count}</button>
    </div>
  );
}

export default App;
