import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)
  
  const HandleClick=useCallback(()=>{
    setCount (count+1);
  }, []);

  return (
   <div>
      <div>
        Count : {count}
      </div>
      <div>
        <button onClick={HandleClick}>Click Me </button>
      </div>

      <div>
        <Child buttonName="Child Click Me"
              HandleClick={HandleClick}/>
      </div>
   </div>
  )
}

export default App
