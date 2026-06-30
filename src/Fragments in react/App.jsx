import { useId,startTransition, useActionState, useEffect, useState, useTransition, Fragment } from "react";
// <></> it is short form of fragment

function App() {

 return (
  
  <Fragment>
    <h1>Fragments in react</h1>
    <Data/>
    <Data/>
    <Data/>
  </Fragment>
 );
}

function Data(){
  return(
    <Fragment>
      <h1>hello</h1>
      <h1>world</h1>
    </Fragment>
  );
}
export default App;
