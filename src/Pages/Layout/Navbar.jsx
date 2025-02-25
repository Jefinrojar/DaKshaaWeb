import logo from "../../assets/logo.png";
import collegeLogo from "../../assets/collegeLogo.png";
import { React, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-5 md:mx-20 py-3">
        <div className="grid grid-cols-12">
          <img className="col-span-6 md:col-span-3 w-32 md:w-48" src={logo} alt="Logo" />

          {/* Burger Menu Icon */}
          <div className="col-span-6 md:hidden flex justify-end items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 col-span-12 mt-4">
            <div className="gradient-line animate-blinkOpacity relative"></div>
            <ul className={`${isMenuOpen ? "block" : "hidden"} font-poppins md:flex mt-2 text-white justify-center items-center text- gap-12`}>
              <li className="cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8">
                <a href="/events">Events</a>
              </li>
              <li className="cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8">
                <a href="/guest-lecture">Guest Lecture</a>
              </li>
              <li className="cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8">
                <a href="#">Workshop</a>
              </li>
              <li className="cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8">
                <a href="#">Accomadation</a>
              </li>
              <li className="cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* College Logo */}
          <div className="hidden md:col-span-3 md:flex justify-end items-center">
            <img className="w-56" src={collegeLogo} alt="College Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;