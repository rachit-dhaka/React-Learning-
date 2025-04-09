import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset , incrementByAmount} from './features/counter/counterSlice'

function App() {
  const [amount, setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch=useDispatch();

  const handleAmountChange =(e)=>{
    setAmount(e.target.value);
  }


  const handleIncrement=()=>{
    dispatch(increment());
  }

  const handleDecrement=()=>{
    dispatch(decrement());
  }

  const handleReset=()=>{
    dispatch(reset());
  }
  const handleIBA=()=>{
    dispatch(incrementByAmount(amount));
  }
  

  return (
    <div className='container'>
      <button onClick={handleIncrement}>+</button>      
      <p>Count : {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input type="number"
      placeholder='Enter the value you want to add'
      value={amount}
      onChange={handleAmountChange} />
      <br />
      <br />
      <button onClick={handleIBA}>Increment by Amount</button>
    </div>
  )
}

export default App


// Notes : 
/*
Action : Actions are basically Events 
Reducer : Reducers are basically Function
SLice : Koi bhi feature ka state are managed my slice 
State : States are basically Data of the code 
Store : Where all the Datasn/ state are stored , single place of truth

FLow : 
Action -> Dispatch a actionm -> Store -> Reducer -> Changes the store value or some action has been perfomed


Reducer ka kaam : old state letha hai , ek action letha hai and oldState+Action => New State


*/
