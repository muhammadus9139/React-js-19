import { useState } from "react";

function Checkboxes(){

       const [skills,setskills]=useState([]);
       const handleskills=(e) => {
               if(e.target.checked){
                  setskills([...skills,e.target.value])
               }else{
                 setskills([...skills.filter((item)=>item!=event.target.value)])
               }
             }

    return (
       <div>
        <h3>Select your Skills</h3>
        <input type="checkbox" onChange={handleskills} id="php"  value="php"/>
        <label htmlFor="php">PHP</label>
        <br />

        <input type="checkbox" onChange={handleskills} id="js"  value="js"/>
        <label htmlFor="js">JS</label>
        <br />

        <input type="checkbox" onChange={handleskills}  id="java"  value="java"/>
        <label htmlFor="java">Java</label>
        <br />


        <input type="checkbox" onChange={handleskills} id="c"  value="c"/>
        <label htmlFor="c">C</label>
         <h1>{skills.toString()}</h1>
       </div>

       
    )
}

export default Checkboxes;
