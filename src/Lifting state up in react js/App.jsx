import { startTransition, useEffect, useState, useTransition } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./Displayuser";


function App() {
 
   const [user,setuser]=useState('');

  return (
    <div>
      <h1>Lifting state up in react js</h1>
      <AddUser setuser={setuser}/>
      <DisplayUser user={user}/>
      
    </div>
   
  );
}

export default App;
