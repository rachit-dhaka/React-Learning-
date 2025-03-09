import React from 'react'
import Home from './Home'
import About from './About'
import Something from './Something'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>

            <li>
                <Link to="/about"about> About </Link>
            </li>

            <li>
                <Link to="/something"> Something </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar