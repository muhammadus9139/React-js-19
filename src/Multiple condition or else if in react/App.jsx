import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";
import Counter from "./Counter";
import User from "./User";  

function App() {
  const[count,setcount] = useState(0);
    return(
      <div>
        <h1>Multiple condition in react js</h1>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        {
          count==0?<h1>Condition 0</h1>
          :count==1?<h1>Condition 1</h1>
          :count==2?<h1>Condition 2</h1>
          :count==3?<h1>Condition 3</h1>
          :<h1>Condition {count}</h1>
        }
      </div>
    );
}

export default App;
