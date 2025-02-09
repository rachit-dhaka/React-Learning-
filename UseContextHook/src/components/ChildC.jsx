import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {

    const {theme, changetheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        if(theme.value === 'light'){
            changetheme({value: 'dark'})
        } else {
            changetheme({value: 'light'})
        }
    }

    
  return (
    <div>
        <button onClick={toggleTheme} style={{borderRadius:"12px", border:"none" , padding:"8px" , backgroundColor:"#0A84FF" , color:"white"
        }}>
        Change theme
    </button>
    </div>
  )
}

export default ChildC
