//Use of useEffect hook for lifecycle methods 
// mount , update, unmount

import { useState, useEffect } from "react";

const Counter=({count,data})=>{

    useEffect(()=>{
        console.log("Mounting phase only")
    },[])

      useEffect(()=>{
        console.log("Update phase only")
    },[count])

    useEffect(()=>{
        return()=>{
        console.log("un mount only")
        }
    },[])


   
    
    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    );
}

export default Counter;
