import { useState } from 'react'

import './App.css'

function App() {
  
  function EHandling(){
    alert("BHai muje kyu dabaya ");
  }



  return (
   <div>
      <button className='something' onClick={EHandling} >
        Click Me
      </button> 
   </div>
  )
}

export default App
