import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { lazy, Suspense, use, useActionState, useReducer, useState ,Activity} from "react";
import "./App.css";

function App() {
// it is alternate of 
//  {/*
//      showhome ? <Home /> : <UserForm />
//     */}
  const [showhome, setshowhome] = useState(true)

  return (
    <div>
      <h1>Activity in react 19.2</h1>
      <button onClick={() => setshowhome(true)}>Home</button>
      <button onClick={() => setshowhome(false)}>User form</button>

      <Activity mode={showhome==true ? 'visible' : 'hidden'}>
         <Home/>
      </Activity>

      <Activity mode={showhome==false ? 'visible' : 'hidden'}>
         <UserForm/>
      </Activity>

      {/* {
        showhome ? <Home /> : <UserForm />
      } */}
    </div>
  );
}


function Home() {
  return (
    <h1>Home page</h1>
  )
}

function UserForm() {
  return (
    <div>
      <input type="text" placeholder="Enter username "/>
      <input type="text" placeholder="Enter username "/>
      <input type="text" placeholder="Enter username "/>
      <input type="text" placeholder="Enter username "/>
    </div>
  )
}

export default App;
