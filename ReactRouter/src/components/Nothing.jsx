import React from 'react'
import { Outlet } from 'react-router-dom'

const Nothing = () => {
  return (
   <div>
      <h1>
        This is Nothing Page
      </h1>
      <Outlet/> 

   </div>
  )
}

export default Nothing