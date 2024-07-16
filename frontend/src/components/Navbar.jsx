import React from 'react';
import { FaBell, FaUserCircle, FaSearch, FaUpload, FaRegUserCircle, FaRegBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-[#282828] text-white h-20 shadow-xl'>
      {/* Left Side: Logo and Title */}
      <div className='flex items-center cursor-pointer ml-10'>
        <img src={"../youtube.svg"} alt="YouTube logo" className='h-9 w-9 mr-2' />
        <span className='roboto-regular-400'>Support</span>
      </div>

      {/* Center: Search Bar */}
      <div className='flex items-center bg-[#161616] p-2 rounded-full w-[40%]'>
          <FaSearch className='text-[#b3b3b3] hover:text-slate-200 cursor-pointer w-4 h-4 ml-2' />
        <input 
          type='text' 
          placeholder='Search' 
          className='bg-[#161616] text-slate-300 outline-none px-2 flex-1'
        />
      </div>

      {/* Right Side: Icons and Profile */}
      <div className='flex items-center space-x-4'>
        <FaUpload className='text-2xl cursor-pointer text-[#b3b3b3] hover:text-slate-200' />
        <FaRegBell className='text-2xl cursor-pointer text-[#b3b3b3] hover:text-slate-200' />
        <FaRegUserCircle className='text-2xl cursor-pointer text-[#b3b3b3] hover:text-slate-200' />
      </div>
    </div>
  );
};

export default Navbar;
