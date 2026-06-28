import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";
import Counter from "./Counter";
import User from "./User";  
import Props from "./props";
function App() {
  let Fname="Usama";
  let age=20;
  let email="blabla";
  
    return(
      <div>
        <h1>Props in react</h1>
        <Props fname={Fname} lname="mukhtar" age={age} email={email}/>
      </div>
    );
}

export default App;
