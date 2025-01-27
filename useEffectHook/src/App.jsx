import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {

  const [count , counter]=useState(0);
  const [total ,  totalCounter]=useState(1);

  // Variation:1
  // this paticular use effect hook will render on every event
          // useEffect(()=>{
          //   alert("I will be render on every rneder of the website ")
          // })


  // variation : 2
          // useEffect(()=>{
          //     alert("Bas ek baar render hounga ")
          // },[])


  // variation 3
          // useEffect(()=>{
          //   alert("this will inchanges after count ")
          // },[count])


  // variation 4
            // useEffect(()=>{
            //   alert("Bhai pe click karne pe alret dunga")

            // },[count,total])


  // variation 5 
  // adding a clean up function 
            useEffect(()=>{
              alert("COunt Buuton is click and updated")


              return()=>{
                alert("Purana wala count hat gaya hai")
              }
            },[count])


  const HandleClick=()=>{
    counter(count+1);
    
  }

  const HandleTotalClick=()=>{
    totalCounter(total+1);
  }



 

  return (

    <div>
      <button onClick={HandleClick}>
      Click Me 
    </button>

    <p>
      Number of Click = {count}
    </p>

    <br />


    <button onClick={HandleTotalClick }>
      Total Me 
    </button>

    <p>
      Number of total = {total}
    </p>      







    </div>
    


  )
}

export default App
