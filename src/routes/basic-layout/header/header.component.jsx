import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as HeaderIcon } from '../../../assets/logo/sushi-154528.svg'

import MenuIcon from '@mui/icons-material/Menu';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';


import './header.style.scss'
import LateralNavbar from '../../../components/lateral-navbar/lateral-navbar.component';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
      <>
        <header>
          
          
           
          <div className='visible-nav'>
          
              <Link to="/">
                <HeaderIcon 
                  className='nav-icon'
                />
              </Link>
              <nav className='navbar'>
                  <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/menu">Menu</Link>
                  <Link className='nav-link' to="/about">About</Link>
                  <Link className='nav-link' to="/contact">Contact</Link>
                  
              <div className='toggle-container'>
                  {toggle ? (
                    <MenuOpenIcon
                      className='header-icon'
                      fontSize='large'
                      onClick={() => setToggle(prev => !prev)}
                    />
                  ) : (
                      <MenuIcon
                      className = 'header-icon'
                      fontSize = 'large'
                      onClick = { () => setToggle(prev => !prev)}
                />
                  )}
              </div>
                  
              </nav>
        </div>
        
        <LateralNavbar toggle={toggle} />
          
        </header>
      </>
  )
}

export default Header