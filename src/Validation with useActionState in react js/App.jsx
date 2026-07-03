import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { useActionState, useState } from "react";
import "./App.css";

function App() {

  const handlelogin = (prev, formdata) => {
    let name = formdata.get("name");
    let password = formdata.get("password");

    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error: "Name can not be empty or Name should not contain more than 5 characters",
        name,
        password,
      };
    }
    else if (!regex.test(password)) {
      return {
        error: "Password is not valid! Password can contain only numbers and characters",
        name,
        password,
      };
    }

    else {
      return {
        message: 'Login done', name, password
      }
    }
  }

  const [data, action, pending] = useActionState(handlelogin, null);

  return (
    <div>
      <h1>Validation with useActionState in react js</h1>
      {
        data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
      }
      {
        data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
      }

      <form action={action}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="Enter username" />
        <br /><br />
        <input defaultValue={data?.password} type="password" name="password" placeholder="Enter password" />
        <br /><br />
        <button disabled={data?.error}>Login</button>
      </form>
    </div>
  );
}

export default App;
