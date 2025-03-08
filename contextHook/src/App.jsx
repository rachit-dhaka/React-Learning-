

import { createContext } from 'react'
import './App.css'
import Child1 from './components/Child1'
import { useState } from 'react';

// create Context 
// wrap all the child inside a provider
// pass value for the provider and consumer
// consumer ke andhar jake , use karlo 


const themeContext = createContext();

function App() {


  const[theme , setTheme]=useState('light');
  return (

    <>
      <themeContext.Provider value={{theme , setTheme}}>
       
        <div className='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <Child1/>
        </div>
      </themeContext.Provider>

    </>
  )
}

export default App
export {themeContext}
