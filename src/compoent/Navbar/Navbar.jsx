import React from 'react'
import './Navbar.css'
import {FaTimes} from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import {  Link, NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
        <div>
          <h1>DOINGS</h1>
        </div>
        <div className="container flex_space">
          
          <ul className='nav-menu active'>
            <li>
              <NavLink to = '/'>Home</NavLink>
              <NavLink to = '/About'>About</NavLink>
              <NavLink to = '/Gallery'>Gallery</NavLink>
              <NavLink to = '/Desnigation'>Desnigation</NavLink>
              <NavLink to = '/Blogs'>Blogs</NavLink>
              <NavLink to = '/Contact'>Contact</NavLink>
              
            </li>

          </ul>
        </div>
        {/* <div className='meni-icon'>
            <FaBars className='bars'/>

          </div> */}

      </nav>
     

    </>
  )
}

export default Navbar