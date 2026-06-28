import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";
import Counter from "./Counter";
import User from "./User";  

function App() {
  const[display,setDisplay] = useState(true);
    return(
      <div>
        <h1>Toggle in react js</h1>

        <button onClick={() => setDisplay(!display)}>
        Toggle Display
        </button>
      
      {
        display?<h1>USAMA</h1>:null
      }

      
      </div>
    );
}

export default App;
