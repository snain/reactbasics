import React from "react";

function Third(){
    const [number,setNumber]= React.useState(10);
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