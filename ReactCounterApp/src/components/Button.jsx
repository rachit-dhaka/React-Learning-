import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.ifClick}>
            click me
        </button>

    </div>
    
  )
}
export default Button
