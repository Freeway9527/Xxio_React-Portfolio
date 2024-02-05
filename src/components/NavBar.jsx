import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, Fatimes } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-950 text-gray-300'>
        <div> 
            <img src={Logo} alt = "Xeng Xiong"  style={{width: '100px'}}/> 
        </div>

         {/* This is the nav bar menu */}
        <div>
          <ul  className = 'flex'>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
            </ul>  
        </div>
         {/* Hamburger menu*/}
         <div className = 'hidden'>
            <FaBars />

         </div>

          {/* Moblie Menu */}
          <ul className = 'hidden'>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
            </ul> 

    </div>
  )
}

export default NavBar
