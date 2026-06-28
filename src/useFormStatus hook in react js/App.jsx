import User from "./User"
import { useEffect, useState } from "react";
import { useRef } from "react"
import { useFormStatus } from "react-dom";

function App() {

  const handlesubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("submit");
  }

  function Customform() {

    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <div>

        <input type="text" placeholder="Enter name" /><br /><br />
        <input type="password" placeholder="Enter password" /> <br /><br />
        <button disabled={pending}>{pending ? "submitting..." : "submit"}</button>

      </div>
    );
  }

  return (
    <div>
      <h1>useFormStatus hook in react js</h1>
      <form action={handlesubmit}>
        <Customform /> 
      </form>
    </div>
  );
}

export default App;
