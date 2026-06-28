import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";

function App() {
 const [fruit,setfruit]=useState("Apple");
 
 const handlefruit=()=>{
    setfruit("Mango");
 }
 
  return (
    <div>
      <h1>State in js</h1>
      <h1>{fruit}</h1>
      <button onClick={handlefruit}>Change fruit name</button>
    </div>
  );
}

export default App;
