import React from "react";
import {useState} from "react-router-dom";

function Third(){
    const [number,setNumber]= useState(10);
    return(
        <>
        <p>{number}</p>
        <button onClick={function(){
            setNumber(number+1);
        }
    }>Click me</button>
        
        </>
    );
}

export default Third;