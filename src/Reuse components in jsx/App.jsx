import Header from "./Header";
import ToDo from "./ToDo";
import { useState } from "react";
import User from "./User";

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
      <h1>Reuse components in jsx</h1>
      {
          user.map((user)=>(
          <div>
            <User user={user}/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
