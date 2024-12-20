import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Rachit Jaat" disr="16*2=8 == jaat"/ >
      <UserCard name="Rachit Choudhary" disr="mehi hu try kar raha hu"/>
      

    </div>
  )
}

export default App
