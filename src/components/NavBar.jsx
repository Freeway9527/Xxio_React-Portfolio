import React from 'react';
import Logo from '../assets/images/logo.png';
import { FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-slate-950 text-purple-600'>
        <div> 
            <img src={Logo} alt = "Xeng Xiong"  style={{width: '150px'}}/> 
        </div>

         {/* This is the nav bar menu */}
        <div>
        <ul className='hidden md:flex'>
          
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> 
        </div>
         {/* Hamburger menu*/}
         <div className = 'md:hidden'>
            <FaBars />
         </div>

          {/* Moblie Menu fix later if have time
          <ul className = 'hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
            </ul> 
        */}

    </div>
  )
}

export default NavBar;
