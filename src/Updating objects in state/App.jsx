// import { useRef } from "react"
// import { useFormStatus } from "react-dom";

import { startTransition, useEffect, useState, useTransition } from "react";



function App() {

  const [data,setdata] = useState({
    name:'usama',
    address:{
      city:'lhr',
      country:'pak'
    }
  });

  const handle=(val) => {
      data.name=val;
      console.log(data);

      setdata({...data});
  }

  return (
    <div>
      <input type="text" onChange={(event)=>handle(event.target.value)} placeholder="update name" />
      <h1>Updating objects in state</h1>
      <h2>Name: {data.name}</h2>
      <h2>address: {data.address.city}</h2>
      
    </div>

  );
}

export default App;
