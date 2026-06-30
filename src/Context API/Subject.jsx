import { useContext } from "react";
import { SubjectContext } from "./ContextData";


// basically it is usecontext

function Subject() {

    const subject=useContext(SubjectContext);

 return (
    <div style={{backgroundColor:"skyblue", padding:"10px"}}>
      <h1>Subject Component</h1>
      <h4>Subject is {subject}</h4>
    </div>
 );
}

export default Subject;
