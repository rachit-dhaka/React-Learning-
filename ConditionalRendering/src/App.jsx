import { useState } from 'react'

import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  
  const[isLoggedIn , setLoggedIn]=useState(true);

  return (
    <div>
      <h1>welcome je</h1>
    </div>
  )



  // return ( 
  //   <div>
  //     {isLoggedIn? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )



  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn />
  //   )
  // }

  

}

export default App
