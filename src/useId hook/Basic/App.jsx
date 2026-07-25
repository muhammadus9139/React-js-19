import { useId,startTransition, useActionState, useEffect, useState, useTransition } from "react";

function App() {

  const user=useId();
 

  return(
    <div>
      <h1>useId hook basic code, use only one id for all</h1>
      <form action="">
        <label htmlFor={user+"name"}>Enter Username: </label>
        <input id={user+"name"} type="text" placeholder="Enter name"/>
        <br /><br />
        <label htmlFor={user+"password"}>Enter password: </label>
        <input id={user+"password"} type="text" placeholder="Enter password"/>
      </form>
      <hr/>
      <Appp/>
    </div>
  );
}


function Appp() {

  const user=useId();
  
 

  return(
    <div>
      <h1>useId hook</h1>
      <form action="">
        <label htmlFor={user+"name"}>Enter Username: </label>
        <input id={user+"name"} type="text" placeholder="Enter name"/>
        <br /><br />
        <label htmlFor={user+"password"}>Enter password: </label>
        <input id={user+"password"} type="text" placeholder="Enter password"/>
      </form>
    </div>
  );
}

export default App;
