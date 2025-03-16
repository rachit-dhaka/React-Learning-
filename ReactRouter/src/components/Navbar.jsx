import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='ass'>
        <ul>
            <li>
                <NavLink to="/"> Home </NavLink>
            </li>

            <li>
                <NavLink to="/about"> About </NavLink>
            </li>

            <li>
                <NavLink to="/nothing"> Nothing  </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar