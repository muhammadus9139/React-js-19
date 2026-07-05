import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { useActionState, useReducer, useState } from "react";
import "./App.css";


const emptydata={
  name:'',
  password:'',
  email:'',
  city:'',
  address:''
}

const reducer=(data,action)=>{
   return{...data,[action.type]:action.val} 
}

function App() {

  const [state,dispatch]=useReducer(reducer,emptydata);

  console.log(state);
  
    return(
      <div>
        <h1>useReducer hook</h1>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'name'})} placeholder="Enter username" />
        <br /><br />
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'password'})} placeholder="Enter password"/>
        <br /><br />
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} placeholder="Enter email"/>
        <br /><br />
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'city'})} placeholder="Enter City"/>
        <br /><br />
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'address'})} placeholder="Enter Address"/>
        <br /><br />
        <button onClick={()=>console.log(state)}>Add details</button>
        <br /><br />
        
        <ul>
          <li>Name:{state.name}</li>
          <li>Password:{state.password}</li>
          <li>Email:{state.email}</li>
          <li>City:{state.city}</li>
          <li>Address:{state.address}</li>
        </ul>
      </div>
    );
}

export default App;
