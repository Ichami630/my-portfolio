import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SmallScreensNavLinks = ({ isVisible, toggleSidebar }) => {
  // const linkClass = ({ isActive }) => 
  //   isActive ? 'bg-secondary-100 font-bold px-2 mt-2 py-1 transition ease-out duration-200 hover:bg-indigo-800 block': 'hover:bg-secondary-200 hover:font-bold px-2 mt-2 py-1 hover:transition ease-out duration-500 block';
  return (
    <aside
      className={`fixed w-64 top-0 left-0 h-screen bg-gray-900  overflow-y-auto transform transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center my-4 px-2">
        <span className=" font-bold text-lg">Menu</span>
        <FaTimes className=" text-xl cursor-pointer" onClick={toggleSidebar} />
      </div>
      <hr />
      <ul className="font-medium text-left ">
        <li>
          <a className='hover:bg-secondary-200 hover:font-bold px-2 mt-2 py-1 hover:transition ease-out duration-500 block' href="/" onClick={toggleSidebar}>
            Home
          </a>
        </li>
        <li>
          <a className='hover:bg-secondary-200 hover:font-bold px-2 mt-2 py-1 hover:transition ease-out duration-500 block' href="/about" onClick={toggleSidebar}>
            About
          </a>
        </li>
        <li>
          <a className='hover:bg-secondary-200 hover:font-bold px-2 mt-2 py-1 hover:transition ease-out duration-500 block' href="/contact" onClick={toggleSidebar}>
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SmallScreensNavLinks;
