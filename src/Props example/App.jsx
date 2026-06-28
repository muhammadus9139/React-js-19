import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";
import Counter from "./Counter";
import User from "./User";  
import Props from "./props";
function App() {

  // let Fname="Usama";
  // let age=20;
  // let email="blabla";

  let user={
    name:"Usama",
    age:20,
    email:"blabla"
  }

  let user2={
    name:"Usama2",
    age:22,
    email:"blabla2"
  }
  
    return(
      <div>
        <h1>Props in react</h1>
  
       {/* <Props fname={Fname} lname="mukhtar" age={age} email={email}/> */}
      <Props user={user} user2={user2}/>
      </div>
    );
}

export default App;
