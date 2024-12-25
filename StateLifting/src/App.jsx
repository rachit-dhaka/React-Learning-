import { useState } from 'react'
import Card from './components/Card'


import './App.css'

function App() {
  
  const[naam, setNaam]=useState('');

  return (
    
    
      <div>
      <Card  name={naam} setName={setNaam}/>
      
      </div>
     
    
  )
}

export default App
