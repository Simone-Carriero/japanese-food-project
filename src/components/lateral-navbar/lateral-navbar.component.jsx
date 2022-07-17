import React from 'react'
import { Link } from 'react-router-dom'
import './lateral-navbar.style.scss'


const LateralNavbar = ({toggle}) => {
    return (
        <nav className={`nav-hidden ${toggle ? 'nav-open' : ''}`}>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/menu">Menu</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
        </nav>
  )
}

export default LateralNavbar