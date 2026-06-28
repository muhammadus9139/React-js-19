import Header from "./Header";
import ToDo from "./ToDo";
import { useState } from "react";
import User from "./User";
import Checkboxes from "./Checkboxes";
function App() {

  const user= [
    {
    name: "anil",
    age: "23",
    email: "email3.com"
  },

  {
    name: "anil",
    age: "28",
    email: "email2.com"

  },

   {
    name: "anil",
    age: "25",
    email: "email1.com"

  }]


  return (
    <div>
      <h1>Loops in jsx with map function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          {
            user.map((user) => (
              <tr >
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>

      </table>

      <br /><br />
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>usama</td>
            <td>20</td>
            <td>email.com</td>
          </tr>
          <tr>
            <td>usama</td>
            <td>20</td>
            <td>email.com</td>
          </tr>
           <tr>
            <td>usama</td>
            <td>20</td>
            <td>email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
