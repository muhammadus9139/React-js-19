import {Link,NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";
function College() {
 return(
  <div className="college" style={{textAlign:"center"}}>
    <h1>College page</h1>
    <NavLink className="link" to="Student">Student</NavLink>
    <NavLink className="link" to="Department">Department</NavLink>
    <NavLink className="link" to="CollegeDetails">College Details</NavLink>
    <Outlet/>
     <h3>Topic: Nested navigation</h3>
  </div>
 );
}

export default College
