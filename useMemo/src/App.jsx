import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [val,setval]=useState(0);
  const [input,setinput]=useState(0);
  const HandleClick=()=>{
    setval(val+1);
  }

  const ExpFuc=(num)=>{
    console.log("Bhaiya Fuction Chal hai ");
    for(let i=0;i<10000000;i++){}
    return num*2;
  }

  let double= useMemo(() => ExpFuc(input),[input]);

  return (
   <div>

    <h1>Increment : {val} </h1>
    <button onClick={HandleClick}>
      Click 
    </button>

    <br />
    <br />

    <input type="number"
    placeholder='Enter the Number'
    value={input}
    onChange={(e)=>setinput(e.target.value)}
     />

    <br />
    <br />

    <div>
      Double : {double}
    </div>


   </div>
  )
}

export default App
