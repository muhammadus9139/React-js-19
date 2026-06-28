import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";
import User from "./User";

function App() {
 
  const[value,setValue] = useState();
      
    return(
      <div>
      <h1>Get input value field</h1>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Enter your name" />
      <p>{value}</p>
      <button onClick={() => setValue("")}>Clear</button>
      </div>
    );
}

export default App;
