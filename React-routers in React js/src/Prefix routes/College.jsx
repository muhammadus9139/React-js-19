import {Link,NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";
function College() {
 return(
  <div className="college" style={{textAlign:"center"}}>
    <h1>College page</h1>
    <h3><Link to="/">Go back to home</Link></h3>
    <NavLink className="link" to="">Student</NavLink>
    <NavLink className="link" to="Department">Department</NavLink>
    <NavLink className="link" to="CollegeDetails">College Details</NavLink>
    <Outlet/>
     <h3>Topic: layout and index routes </h3>
  </div>
 );
}

export default College
