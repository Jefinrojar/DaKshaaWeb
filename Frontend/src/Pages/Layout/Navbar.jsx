import logo from "../../assets/logo.png";
import collegeLogo from "../../assets/collegeLogo.png";
import round from "../../assets/round.svg";
import { React, useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // State to track active link

  // Function to determine the active link based on the current URL
  const getActiveLinkFromURL = () => {
    const path = window.location.pathname;
    if (path === "/") return "Home";
    if (path === "/events") return "Events";
    if (path === "/events/guest-lecture") return "Guest Lecture";
    if (path === "/events/workshop") return "Workshop";
    if (path === "/sponsors") return "Sponsors";
    if (path === "/contact") return "Contact";
    if (path === "/events/hormonics") return "Hormonics";
    return "Home"; // Default to Home if no match
  };

  // Update active link on component mount or URL change
  useEffect(() => {
    setActiveLink(getActiveLinkFromURL());
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update active link
    setIsMenuOpen(false); // Close the menu on mobile after clicking a link
  };

  return (
    <div className="fixed top-0 w-screen backdrop-blur-sm md:backdrop-blur-none z-50">
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
            <ul className={`${isMenuOpen ? "block" : "hidden"} font-poppins md:flex mt-2 text-white justify-center items-center gap-12`}>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Home" ? "active" : ""}`}
                onClick={() => handleLinkClick("Home")}
              >
                <a href="/" className="relative">
                  {activeLink === "Home" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Home
                </a>
              </li>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Events" ? "active" : ""}`}
                onClick={() => handleLinkClick("Events")}
              >
                <a href="/events" className="relative">
                  {activeLink === "Events" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Events
                </a>
              </li>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Guest Lecture" ? "active" : ""}`}
                onClick={() => handleLinkClick("Guest Lecture")}
              >
                <a href="/events/guest-lecture" className="relative">
                  {activeLink === "Guest Lecture" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Conference
                </a>
              </li>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Workshop" ? "active" : ""}`}
                onClick={() => handleLinkClick("Workshop")}
              >
                <a href="/events/workshop" className="relative">
                  {activeLink === "Workshop" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Workshop
                </a>
              </li>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Workshop" ? "active" : ""}`}
                onClick={() => handleLinkClick("hormonics")}
              >
                <a href="/events/hormonics" className="relative">
                  {activeLink === "Hormonics" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Harmonics
                </a>
              </li>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Sponsors" ? "active" : ""}`}
                onClick={() => handleLinkClick("Sponsors")}
              >
                <a href="/sponsors" className="relative">
                  {activeLink === "Sponsors" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Sponsors
                </a>
              </li>
              <li
                className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Contact" ? "active" : ""}`}
                onClick={() => handleLinkClick("Contact")}
              >
                <a href="/contact" className="relative">
                  {activeLink === "Contact" && (
                    <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                  )}
                  Contact
                </a>
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
