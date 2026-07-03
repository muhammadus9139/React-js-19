import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";
import { useState } from "react";
import "./App.css";

function App() {

    // For name
    const [name, setname] = useState('');
    const [nameerr, setnameerr] = useState('');

    // For password
    const [password, setpassword] = useState('');
    const [passworderr, setpassworderr] = useState('');

    const handlename = (e) => {
      console.log(e.target.value);
      if (e.target.value.length > 5) {
        setnameerr("Please enter valid username.Only 5 characters allowed");
      }
      else {
        setnameerr('');
      }
    };

    const handlepassword = (e) => {
      let regex = /^[A-Z0-9]+$/i;
      console.log(e.target.value);
      if (regex.test(e.target.value)) {
        setpassworderr('');
      }
      else {
        setpassworderr("Please enter valid password.");
      }
    };

    return (
      <div>
        <h1>Simple validation in react js</h1>

        <input
          className={nameerr ? 'error' : ''}
          type="text"
          onChange={handlename}
          placeholder="Enter username"
        />
        <span className="red-color">{nameerr}</span>

        <br /><br />

        <input
          className={passworderr ? 'error' : ''}
          type="password"
          onChange={handlepassword}
          placeholder="Enter password"
        />
        <span className="red-color">{passworderr}</span>

        <br /><br />

        <button disabled={nameerr || passworderr}>Login</button>
      </div>
    );
}

export default App;
