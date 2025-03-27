import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount]=useState(1);

  const handleClick=()=>{
    val.current=val.current+1;
    console.log("Val ki vlaue hai :" ,val);
    
    setcount(count+1);
  }

  useEffect(() => {
    console.log("Me render hoo gaya hu ");
    
  } )

  let btnRef=useRef();

  const changeColour =()=>{
    if(btnRef.current.style.backgroundColor==='red'){
        btnRef.current.style.backgroundColor='blue';
    }
    else{
        btnRef.current.style.backgroundColor='red'
    }
    
  }

  // UseRef Hook
  let val=useRef(1);
  


  return (
    <div>
      <button ref={btnRef} onClick={handleClick}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={changeColour}>
        Change the colour of the 1st Button
      </button>
      <div>
        Count : {count}
      </div>
    </div>
  )
}

export default App
