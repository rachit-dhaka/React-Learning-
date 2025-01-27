import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds]=useState(0);


    useEffect(()=>{

        const interval=setInterval(()=>{
            console.log("Program Excuted ")
            setSeconds((PrevSeconds)=>PrevSeconds+1)
        },1000)
        

        return ()=>{
            cleanInterval(interval);
        }
    },[])


  return (
    <div>
      <h1> Seconds : {seconds} </h1>
    </div>
  )
}

export default Timer
