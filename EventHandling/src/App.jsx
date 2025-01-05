import { useState } from 'react'

import './App.css'

function App() {
  
  function EHandling(){
    alert("Happpy New Year");
  }

  const MouseEventHandling=()=>{
    alert("timepass")
    
  }
  
  const OnchangeEventHandle=(e)=>{
    console.log("You have written : ", e.target.value);
    
  }



  return (
   <div style={
    {display:"flex", 
    justifyContent:"centre", 
    alignItems:"center",
    flexDirection:"column", 
    gap:"1rem"}}>


      <form >
        <input type="text" onChange={OnchangeEventHandle} />
      </form>
      
      <p onMouseOver={MouseEventHandling} style={{border:"1px solid black", padding:"0.5rem",  borderRadius:"15px", color:"white", backgroundColor:"black"}}>
        Bhen ke laude , mere upar mouse pointer mat lekar aana
      </p>
      
      <button className='something' onClick={EHandling} >
        Click Me
      </button> 


      <input style={{borderRadius:"15px", 
        border:"None",
         padding:"0.5rem", 
         backgroundColor:"grey", 
         color:"white"}}>


      </input>
      

   </div>

   
  )
}

export default App
