// way 2 of styled component , 2nd way of apply style by {} assuming obj
import Header from "./Header";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import UserProfile from "./userProfile";
import styled from "styled-components";

function App() {

  const Heading=styled.h3({  
    color:"red",
    border:"1px solid green",
    margin:"20px",
    borderRadius:"5px",
    paddin:"10px"
  })

  const Styled=styled.button`
   color:black;
   margin:30px;
   
    borderRadius:20px;
    padding:10px;
  `;

  return (
    <>
      <h1>Style with styled-components</h1>

      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading</Heading>
      <Styled onClick={()=>alert("Done")}>Click me</Styled>
    </>
  );
}

export default App;
