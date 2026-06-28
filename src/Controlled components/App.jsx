import {useState} from "react";
import User from "./User";

function App() {
 
      const [name,setname]=useState();
       const [password,setpassword]=useState();
       const [email,setemail]=useState();
   
    return(
      <div>
      <h1>Controlled components</h1>
       <form action="" method="get">

           <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter name"></input>
           <br /><br />


           <input type="password" value={password} onChange={(e) => setname(e.target.value)}  placeholder="Enter password"></input>
           <br /><br />

           <input type="text" value={email} onChange={(e) => setname(e.target.value)}  placeholder="email"></input>
           <br /><br />

           <button>Submit</button>
           <br /><br />
           <button onClick={() =>{setname(''); setpassword('') ; setemail('')}}>Clear</button>

           <h3>{name}</h3>
           <h3>{password}</h3>
           <h3>{email}</h3>
       
       </form>
      </div>
    );
}

export default App;
