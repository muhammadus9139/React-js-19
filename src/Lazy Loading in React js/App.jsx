import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { lazy, Suspense, useActionState, useReducer, useState } from "react";
import "./App.css";
// import User from "./User";

const User =lazy(()=>import('./User'));

function App() {

    const [load,setload]=useState(false);
  
  return(
    <div>
      <h2>Lazy Loading in React js</h2>
      <button onClick={()=>setload(true)}>Load user</button>
       {
        load? <Suspense fallback={<h3>Loading...</h3>}> <User/> </Suspense> : null
       }
    </div>
   );
}

export default App;
