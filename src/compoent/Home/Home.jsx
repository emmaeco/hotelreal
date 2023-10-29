import React from 'react'
import './Home.css'
import Background from '../../img/bed/bed1.jpg'

import {  Link, NavLink } from 'react-router-dom';
import {BsBoxArrowDown} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'



const Home = () => {
  return (
    <>
      <div className='section a'>
        <div>
          <img src={Background} className='background'/>

        </div>
        <div className='main__body'>
          <h1>DOINGS HOTEL</h1>
          <div>
           <NavLink to = '/signup'>signup<BsBoxArrowDown/></NavLink>
            <NavLink to = '/Contact'>Contact<BsFillTelephoneFill/></NavLink>

          </div>
          
        </div>
       
      </div>
      <div>

      </div>
    </>
  )
}

export default Home