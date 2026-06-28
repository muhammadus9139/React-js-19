import { useState, useEffect } from "react";

const Counter=({count})=>{

    const handlecounter=()=>{
        console.log("Handlecounter called");
    }

    useEffect(()=>{
        handlecounter();
    },[])

   
    
    return(
        <div>
            <h1>Counter value {count}</h1>
        </div>
    );
}

export default Counter;
