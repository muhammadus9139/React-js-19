import {useState} from "react";
import Student from "./student";
function App() {


  const [studentName, setStudentName] = useState();
      
    return(
      <div>
        <h1>Props in react</h1>
       { studentName && <Student name={studentName}/>}
       <button onClick={()=>setStudentName("Usama")}>Update Student Name</button>
       </div>
    );
}

export default App;
