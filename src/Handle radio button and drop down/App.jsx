import Header from "./Header";
import ToDo from "./ToDo";
import {useState} from "react";
import User from "./User";
import Checkboxes from "./Checkboxes";
function App() {
  
   const [gender,setgender]=useState("female");
   const [city,setcity]=useState("IU");

    return(
      <div>
      <h3>Select gender</h3>
      <input type="radio" onChange={(e)=>setgender(e.target.value)} name="gender" id="male" value={"male"} />
      <label htmlFor="male">Male</label>
  
      <input type="radio" onChange={(e)=>setgender(e.target.value)}  name="gender" id="female" value={"female"}  />
      <label htmlFor="female">Female</label>
      <h1>Selected gender:{gender}</h1>
     <br /> <br /> <br />
     <h2>Select city</h2>
     <select onChange={(e)=>setcity(e.target.value)} name="" id="" defaultValue={"iu"}>
         <option value="lq">LQ</option>
         <option value="kk">KK</option>
         <option value="iu">IU</option>
         <option value="pz">PZ</option>
      </select> 
      <h2>Selected city:{city}</h2>
      </div>
    );
}

export default App;
