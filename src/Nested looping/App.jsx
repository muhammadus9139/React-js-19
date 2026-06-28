import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import User from "./User";
import Clock from "./Clock";
import College from "./college";
import Student from "./student";

function App() {

  const collegedata=[
    {
      name:"gc",
      city:"lahore",
      email:"gc.com",
      student:[
        {
          name:"anil",
          age:20,
          email:"email.com"
        },
         {
          name:"ali",
          age:23,
          email:"3email.com"
        },
         {
          name:"usama",
          age:24,
          email:"4email.com"
        }
      ]
    },

    {
      name:"pgc",
      city:"karachi",
      email:"pgc.com",
        student:[
        {
          name:"anil",
          age:20,
          email:"email.com"
        },
         {
          name:"ali",
          age:23,
          email:"3email.com"
        },
         {
          name:"usama",
          age:24,
          email:"4email.com"
        }
      ]
      
    },

    {
      name:"kips",
      city:"isl",
      email:"kips.com",
        student:[
        {
          name:"anil",
          age:20,
          email:"email.com"
        },
         {
          name:"ali",
          age:23,
          email:"3email.com"
        },
         {
          name:"usama",
          age:24,
          email:"4email.com"
        }
      ]
    }

  ]
  return (

    <div>
      <h1>Nested looping</h1>
      {
        collegedata.map((college,index) => (
          <div key={index}>
           <College college={college}/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
