import React from 'react'
import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'
import SmallScreensNavLinks from './SmallScreensNavLinks'

const Navbar = () => {
    // const linkClass = ({ isActive }) => 
    //     isActive 
    //     ? 'text-white bg-secondary-100 font-bold px-3 py-2 transition ease-out duration-200 rounded hover:bg-indigo-800' 
    //     : 'text-white hover:bg-secondary-200 hover:font-bold px-3 py-2 rounded hover:transition ease-out duration-500';    

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleMenu = () => {
        setSidebarVisible(!isSidebarVisible);
    }
  return (
    <nav className='flex justify-between text-center py-6'>
        <a className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo"  className='h-10'/>
            <span className=' ml-2 font-bold text-2xl hidden md:block'>
                Ichami
            </span>
        </a>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-3 text-sm'>
                <li><a className=' hover:bg-secondary-200 hover:font-bold px-3 py-2 rounded hover:transition ease-out duration-500' href='/'>Home</a></li>
                <li><a className=' hover:bg-secondary-200 hover:font-bold px-3 py-2 rounded hover:transition ease-out duration-500' href='#about'>About</a></li>
                <li><a className=' hover:bg-secondary-200 hover:font-bold px-3 py-2 rounded hover:transition ease-out duration-500' href='#contact'>Contact</a></li>
            </ul>
        </div>
        <FaBars className='text-neutral-100 text-2xl md:hidden bg-gray-300 px-2 cursor-pointer rounded' onClick={toggleMenu}/>
        <SmallScreensNavLinks isVisible={isSidebarVisible} toggleSidebar={toggleMenu} />
    </nav>
  )
}

export default Navbar