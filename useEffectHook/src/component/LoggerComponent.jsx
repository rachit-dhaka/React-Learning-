import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {


    const[count,counter]=useState(0);

    const HandleClick=()=>{
        counter(count+1);
    }


    useEffect(()=>{
        console.log('Component rendered or something has been changed ',count);
         
    });

  return (
    <div>

        <h1>Count : {count} </h1>
      <button onClick={HandleClick}>
        Increment 
      </button>
    </div>
  );
}

export default LoggerComponent
