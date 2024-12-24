
import './App.css'
import Count from './components/Count'
import Card from './components/Card'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const[count,setcount]=useState(0);

  function clicking(){
    setcount(count+1);
  }

  return (
    <div>
     <Button ifClick={clicking} text="Rachit" >

       <h1> {count} </h1>
     </Button>
    </div>
   
 )
  
} 


export default App
