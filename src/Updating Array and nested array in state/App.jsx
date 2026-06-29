// import { useRef } from "react"
// import { useFormStatus } from "react-dom";
import User from "./User"
import { startTransition, useEffect, useState, useTransition } from "react";


function App() {

  const [data,setdata]=useState([
    'usama','ali','ahmad'
  ]);

  const[detaildata,setdetaildata]=useState([
    {name:"usama",age:"20"},
     {name:"ali",age:"17"}
  ])
  
  const handleuser=(name)=>{
    data[data.length-1]=name
    setdata([...data])
  }

  const handleage=(age)=>{
    detaildata[detaildata.length-1].age=age
    setdetaildata([...detaildata])
  }

  return (
    <div>
      <h1>Updating Array and nested array in state</h1>
      <input type="text" onChange={(e)=>handleuser(e.target.value)} placeholder="Enter last username"/>
      {
        data.map((item,index)=>(
          <h2 key={index}> {item} </h2>
        ))
      }
       <hr/>
       <input type="text" onChange={(e)=>handleage(e.target.value)} placeholder="Enter last user age"/>
       {
         detaildata.map((item,index)=>(
          <h4 key={index}>{item.name},{item.age}</h4>
         ))
       }
    </div>

  );
}

export default App;
