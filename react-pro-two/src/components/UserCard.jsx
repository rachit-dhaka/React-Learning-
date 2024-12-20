import React from 'react'
import rachitpic from '../assets/rachitpic.png'
import './UserCard.css'


const UserCard = (props) => {
  return (
    <div className="User-Container">
        <p id='user-name'>{props.name}</p>
        <img id='user-pic' src={rachitpic} alt="" height={150}/>
        <p id='user-desc'>{props.disr}</p>
    </div>
  )
}

export default UserCard
