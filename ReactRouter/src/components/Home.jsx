import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate=useNavigate();
  const HandleClick=()=>{
    navigate('./about');
  }
  return (
    <div>
      <h1>
      This is Home Page
      </h1>
      <button onClick={HandleClick}>
        Dashbaord pe Jaana hai 
      </button>
    </div>
  )
}

export default Home