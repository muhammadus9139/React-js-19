import User from "./User"
import { useEffect, useState } from "react";
import {useRef} from "react"

function App() {
  return(
    <div>
   <h1>Without ,pass function in component as props</h1>
   <User/>
   <User/>
   </div>
  );
}

export default App;
