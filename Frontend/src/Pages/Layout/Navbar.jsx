import logo from "../../assets/logo.png";
import collegeLogo from "../../assets/collegeLogo.png";
import round from "../../assets/round.svg";
import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const getActiveLinkFromURL = () => {
    const path = window.location.pathname;
    if (path === "/") return "Home";
    if (path.startsWith("/events")) return "Events"; // Any /events path highlights 'Events'
    if (path === "/sponsors") return "Sponsors";
    if (path === "/contact") return "Contact";
    if (path === "/startups") return "Startups";
    return "Home";
  };

  useEffect(() => {
    setActiveLink(getActiveLinkFromURL());
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    navigate(path);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 w-screen backdrop-blur-sm md:backdrop-blur-none z-50">
        <div className="mx-5 md:mx-20 py-3">
          <div className="grid grid-cols-12">
            <img
              className="col-span-6 md:col-span-3 w-32 md:w-48 cursor-pointer"
              src={logo}
              onClick={() => handleLinkClick("Home", "/")}
              alt="Logo"
            />

            {/* Mobile Menu Toggle */}
            <div className="col-span-6 md:hidden flex justify-end items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {/* Navbar Links */}
            <div className="md:col-span-6 col-span-12 mt-4">
              <div className="gradient-line animate-blinkOpacity invisible md:visible relative"></div>
              <ul className={`${isMenuOpen ? "block" : "hidden"} font-poppins md:flex mt-2 text-white justify-center items-center gap-8`}>
                <li
                  className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Home" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Home", "/")}
                >
                  Home
                </li>

                {/* Events Dropdown */}
                <li
                  ref={dropdownRef}
                  className="relative cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 flex items-center gap-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  
                >
                  <span className="relative">
                    {activeLink === "Events" && (
                      <img className="absolute md:-top-5 md:left-1/2 right-20 top-1 w-3 -translate-x-1/2" src={round} alt="" />
                    )}
                    Events
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>

                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-48 bg-sky-900/40 border border-sky-800 clip-bottom-right text-sm shadow-lg w-44 text-center z-50">
                      <li
                        className="px-4 py-2 hover:bg-sky-700"
                        onClick={() => handleLinkClick("Events", "/events")}
                      >
                        All Events
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-sky-700"
                        onClick={() => handleLinkClick("Conference", "/events/conference")}
                      >
                        Conference
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-sky-700"
                        onClick={() => handleLinkClick("Workshop", "/events/workshop")}
                      >
                        Workshop
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-sky-700"
                        onClick={() => handleLinkClick("Hormonics", "/events/hormonics")}
                      >
                        Hormonics
                      </li>
                    </ul>
                  )}
                </li>

                <li
                  className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Startups" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Startups", "/startups")}
                >
                  Startups
                </li>

                <li
                  className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Sponsors" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Sponsors", "/sponsors")}
                >
                  Sponsors
                </li>

                <li
                  className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Teams" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Teams", "/teams")}
                >
                  Teams
                </li>

                <li
                  className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === "Contact" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Contact", "/contact")}
                >
                  Contact
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
    </>
  );
};

export default Navbar;
