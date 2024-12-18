import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import SmallScreensNavLinks from './SmallScreensNavLinks';

const Navbar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleMenu = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.nav
            className="flex justify-between py-6 text-center"
        >
            <a className="flex items-center flex-shrink-0">
                <img src={logo} alt="logo" className="h-10" />
                <span className="hidden ml-2 text-2xl font-bold md:block">Ichami</span>
            </a>
            <div className="hidden md:block">
                <ul className="flex items-center gap-3 text-sm">
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="px-3 py-2 duration-500 ease-out rounded hover:bg-secondary-200 hover:font-bold hover:transition"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="px-3 py-2 duration-500 ease-out rounded hover:bg-secondary-200 hover:font-bold hover:transition"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="px-3 py-2 duration-500 ease-out rounded hover:bg-secondary-200 hover:font-bold hover:transition"
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-3 py-2 duration-500 ease-out rounded hover:bg-secondary-200 hover:font-bold hover:transition"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
            {/* <FaBars
                className="px-2 text-2xl bg-gray-300 rounded cursor-pointer text-neutral-100 md:hidden"
                onClick={toggleMenu}
            /> */}
            <motion.button 
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            className='p-2 font-bold bg-purple-800 rounded md:hidden'  onClick={() => scrollToSection('contact')}>contact me</motion.button>
            {/* <SmallScreensNavLinks isVisible={isSidebarVisible} toggleSidebar={toggleMenu} /> */}
        </motion.nav>
    );
};

export default Navbar;
