import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // V0-Example
  //     <div>
  //       const [count, setcount]=useState(1);

  // // const handleClick=()=>{
  // //   val.current=val.current+1;
  // //   console.log("Val ki vlaue hai :" ,val);
    
  // //   setcount(count+1);
  // // }

  // // useEffect(() => {
  // //   console.log("Me render hoo gaya hu ");
    
  // // } )

  // // let btnRef=useRef();

  // // const changeColour =()=>{
  // //   if(btnRef.current.style.backgroundColor==='red'){
  // //       btnRef.current.style.backgroundColor='blue';
  // //   }
  // //   else{
  // //       btnRef.current.style.backgroundColor='red'
  // //   }
    
  // // }

  // // // UseRef Hook
  // // let val=useRef(1);
  //     </div>


// create a stop watch application\
    const [time, setTime]=useState(0);
    let timerRef=useRef(null);

    const TimeStart=()=>{
      timerRef.current=setInterval(() => {
        setTime(time=>time+1)
      }, 1000);
    }

    const TimeStop=()=>{
      clearInterval(timerRef.current);
      timerRef.current=null;

    }

    const TimeReset =()=>{
      TimeStop();
      setTime(0);
      
    }



  


  return (
      // V0-Example
    // <div>
    //   {/* <button ref={btnRef} onClick={handleClick}>
    //     Increment
    //   </button>
    //   <br />
    //   <br />
    //   <button onClick={changeColour}>
    //     Change the colour of the 1st Button
    //   </button>
    //   <div>
    //     Count : {count}
    //   </div> */}
    // </div>
// Creating stop watch application 
    <div >
      <p className='nothing'>Stop Watch : {time} Second </p>

       <div className='something'>
          <button onClick={TimeStart}>
            Start
          </button>

          <button onClick={TimeStop}>
            Stop
          </button>

          <button onClick={TimeReset}>
            Reset
          </button>
       </div>
    </div>

    
  )
}

export default App
