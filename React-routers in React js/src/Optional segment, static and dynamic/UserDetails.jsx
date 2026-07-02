import React from "react";
import { Link, useParams } from "react-router-dom";


function UserDetails() {

    const paramsData=useParams();
 return(
    <div style={{marginLeft:"20px"}}>
        <h1>User Details page </h1>
        <h2>User id: {paramsData.id}</h2>
        <h3><Link to="/users">Back</Link></h3>
    </div>
 );
}

export default UserDetails
