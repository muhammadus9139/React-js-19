// It will call multiple for data counter here bcz we pass props here in useEffect

import { useState, useEffect } from "react";

const Counter=({count,data})=>{

    const handlecounter=()=>{
        console.log("Handlecounter called");
    }

    useEffect(()=>{
        handlecounter();
    },[])

    const handledata=()=>{
        console.log("handledata called",data)
    }

    useEffect(()=>{
        handledata();
    },[data])

    return(
        <div>
            <h1>Counter value {count}</h1>
        </div>
    );
}

export default Counter;
