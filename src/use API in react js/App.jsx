import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { lazy, Suspense, use, useActionState, useReducer, useState } from "react";
import "./App.css";

const fetchdata = () => {
  return fetch('https://dummyjson.com/users')
    .then((response) => response.json());
}

const userResource = fetchdata();

function App() {
  return (
    <div>
      <h1>use API in react js</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  );
}

const Users = ({ userResource }) => {
  const userData = use(userResource);
  console.log(userData.users);

  return (
    <div>
      <h2>Users list</h2>
      {
        userData.users.map((user) => {
          return <h3 key={user.id}>{user.firstName}</h3>;
        })
      }
    </div>
  );
}

export default App;
