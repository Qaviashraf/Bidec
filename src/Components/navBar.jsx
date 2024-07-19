import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed flex justify-center top-0 w-screen z-50 bg-trasparent bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-gray-600" >
      <div className="container flex justify-between items-center p-4">
        <div className="flex justify-between">
            <h1 className="text-white text-2xl font-bold">Bidec</h1>
            </div>
        <div className="block bg-white px-2 pt-2 py-1 rounded-full">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <div className="line bg-black w-6 h-0.5 my-1.5 transition-transform duration-300"></div>
              <div className="line bg-black w-6 h-0.5 my-1.5 transition-transform duration-300"></div>
            </div>
          </button>
        </div>
      </div>
      <div className={`fixed top-11 right-0 bg-transparent w-fit flex flex-col items-center justify-center z-40 p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='md:mr-10 bg-white px-4 py-4  rounded-xl'>
        <ul className="text-black text-center text-lg space-y-4">
          <li>
            <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu} className="hover:underline">Services</Link>
          </li>
          <li>
            <Link to="/contactus" onClick={toggleMenu} className="hover:underline">Contact Us</Link>
          </li>
        </ul>
        <button className="mt-8 border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300">
          Start your project
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
