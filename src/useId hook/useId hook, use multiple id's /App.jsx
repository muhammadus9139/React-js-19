import { useId,startTransition, useActionState, useEffect, useState, useTransition } from "react";

// useId hook, use multiple id's for mutiple things like use,password etc
function App() {

  const name=useId();
   const password=useId();

  return(
    <div>
      <h1>useId hook, use multiple id's for mutiple things </h1>
      <form action="">
        <label htmlFor={name}>Enter Username: </label>
        <input id={name} type="text" placeholder="Enter name"/>
        <br /><br />
        <label htmlFor={password}>Enter password: </label>
        <input id={password} type="text" placeholder="Enter password"/>
      </form>
      <hr/>
      <Appp/>
    </div>
  );
}


function Appp() {

  const name=useId();
   const password=useId();
 

  return(
    <div>
      <h1>useId hook</h1>
      <form action="">
        <label htmlFor={name}>Enter Username: </label>
        <input id={name} type="text" placeholder="Enter name"/>
        <br /><br />
        <label htmlFor={password}>Enter password: </label>
        <input id={password} type="text" placeholder="Enter password"/>
      </form>
    </div>
  );
}

export default App;
