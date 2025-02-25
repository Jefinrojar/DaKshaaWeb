import logo from "../../assets/logo.png";
import collegeLogo from "../../assets/collegeLogo.png";
import { React, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-5 md:mx-20 mt-5">
      <div className="grid grid-cols-12">
        <img
          className="col-span-6 md:col-span-3 w-32 md:w-48"
          src={logo}
          alt=""
        />

        {/* Burger Menu Icon */}
        <div className="col-span-6 md:hidden flex justify-end items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
  className={`${
    isMenuOpen ? "block" : "hidden"
  } md:col-span-6 md:flex font-orbitron text-white justify-center items-center text-2xl gap-10 col-span-12 mt-4 md:mt-0`}
>
  <li className='group relative cursor-pointer px-4 py-1 rounded-xl underline underline-offset-8 hover:no-underline'>
    {/* Top line (overline) that appears on hover */}
    <span className='absolute inset-x-0 top-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
    Home
  </li>
  <li className='group relative cursor-pointer px-4 py-1 rounded-xl underline underline-offset-8 hover:no-underline'>
    <span className='absolute inset-x-0 top-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
    About
  </li>
  <li className='group relative cursor-pointer px-4 py-1 rounded-xl underline underline-offset-8 hover:no-underline'>
    <span className='absolute inset-x-0 top-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
    Events
  </li>
  <li className='group relative cursor-pointer px-4 py-1 rounded-xl underline underline-offset-8 hover:no-underline'>
    <span className='absolute inset-x-0 top-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
    FAQ
  </li>
  <li className='group relative cursor-pointer px-4 py-1 rounded-xl underline underline-offset-8 hover:no-underline'>
    <span className='absolute inset-x-0 top-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
    Contact
  </li>
</ul>

        {/* College Logo */}
        <div className="hidden md:col-span-3 md:flex justify-end items-center">
          <img className="w-56" src={collegeLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
