import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildA from './components/ChildA'

import './App.css'


// creating context 
// const UserContext=createContext();
// wrap all the child inside the provider 
// pass value 
// Consumer ke andar jaake value ko consume karlo

const ThemeContext=createContext();

function App() {
  // const [user , userData]=useState({name:"Rachit"})
  const [theme, changetheme] = useState({value: "light"}) // theme is an object


  return (
    <>
      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{theme, changetheme}}>
        <div className='Container' style={{backgroundColor: theme.value === 'light' ? "#FFFFFF" : "#1C1C1E"}}>
          <ChildA/>
        </div>
      </ThemeContext.Provider>

    </>

  )
}

export default App
// export {UserContext}
export {ThemeContext}
