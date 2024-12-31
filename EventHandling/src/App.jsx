import { useState } from 'react'

import './App.css'

function App() {
  const HandleClick=()=>{
    alert("Tune muje click kiya hai   ")
  }

  return (
   <div>
      <button className='something' onClick={HandleClick} >
        Click Me
      </button> 
   </div>
  )
}

export default App
