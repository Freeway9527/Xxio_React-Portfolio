import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, Fatimes} from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-950 text-purple-600'>
        <div> 
            <img src={Logo} alt = "Xeng Xiong"  style={{width: '100px'}}/> 
        </div>

         {/* This is the nav bar menu */}
        <div>
          <ul className = 'hidden md:flex'>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
            </ul>  
        </div>
         {/* Hamburger menu*/}
         <div className = 'md:hidden'>
            <FaBars />
         </div>

          {/* Moblie Menu fix later 
          <ul className = 'hidden'>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
            </ul> 
        */}

    </div>
  )
}

export default NavBar
