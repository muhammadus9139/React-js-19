import { useId, startTransition, useActionState, useEffect, useState, useTransition, Fragment } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";
// basically it is provider
function App() {

  const [subject, setsubject] = useState("")

  return (
    <div style={{ backgroundColor: "red", padding: "10px" }}>

      <SubjectContext.Provider value={subject}>

        <select value={subject} onChange={(e) => setsubject(e.target.value)} name="" id="">

          <option value="">Select subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>

        <h1>Context API</h1>
        <button onClick={()=>setsubject('')}>Clear subject</button>
        <College />
        
      </SubjectContext.Provider>

    </div>
  );
}

export default App;
