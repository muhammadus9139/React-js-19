import User from "./User"
import { startTransition, useEffect, useState, useTransition } from "react";
import { useRef } from "react"
import { useFormStatus } from "react-dom";


let guest=0;

function App() {

  return (
    <>
    <h1>Example of impure components</h1>
    <Cup/>
    </>
  );
}

function Cup(){
  guest=guest+1;
  return(
    <h1>We have {guest} guest and we have to make {guest} cup of tea</h1>
  );
}

export default App;
