import React, { useContext } from 'react'
import { themeContext } from '../App'

function Child3() {
    const {theme , setTheme} = useContext(themeContext);

    const changeTheme =()=>{
        if(theme=== "light"){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    

    return (
        
        <div>
            <button onClick={changeTheme} id='InsideText'>
                Click me 
            </button>
        </div>
    )
}

export default Child3
