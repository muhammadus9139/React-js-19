import { startTransition, useEffect, useState, useTransition } from "react";


function App() {

  const [data,setdata] = useState({
    name:'usama',
    address:{
      city:'lhr',
      country:'pak'
    }
  });

  

  const handlename=(newname) => {
      data.name=newname;
      console.log(data);

      setdata({...data});
  }

    const handlecity=(newcity) => {
      data.address.city=newcity;
      console.log(data);

      setdata({...data});
      
  }

  return (
    <div>
      <input type="text" onChange={(event)=>handlename(event.target.value)} placeholder="update name" />
      <br />
       <input type="text" onChange={(event)=>handlecity(event.target.value)} placeholder="update city" />
      <h1>Updating nested objects in state</h1>
      <h2>Name: {data.name}</h2>
      <h2>address: {data.address.city}</h2>
      
    </div>

  );
}

export default App;
