import React, { useState } from 'react'
import './Count.css'

const Count = () => {
  const [count, setCount]=useState(0);
  return (
    <div className="count-container">
        <p id='title'>The Button is clicked {count} times</p>
        <button id='btn' onClick={()=>{ setCount(count+1)}}>Dabaoo</button>
    </div>
  )
}

export default Count
