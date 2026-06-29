import { startTransition, useEffect, useState, useTransition } from "react";

function AddUser({setuser}){

    return(
        <div>
            <h3>Add User input field data go to App.jsx</h3>
            <input type="text"onChange={(event)=>setuser(event.target.value)} placeholder="Enter Username" />
            <hr/>
        </div>
    );
}

export default AddUser;
