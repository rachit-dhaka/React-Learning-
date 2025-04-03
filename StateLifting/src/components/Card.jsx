import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-container">
        <input 
            type="text" 
            className="card-input"
            onChange={(e)=> props.setName(e.target.value)} 
        />
        <p className="card-text">you are typing this currently: {props.name}</p>
    </div>
  )
}

export default Card
