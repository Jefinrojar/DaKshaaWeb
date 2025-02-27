import logo from "../../assets/logo.png";
import collegeLogo from "../../assets/collegeLogo.png";
import round from "../../assets/round.svg";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  const getActiveLinkFromURL = () => {
    const path = window.location.pathname;
    if (path === "/") return "Home";
    if (path === "/events") return "Events";
    if (path === "/events/guest-lecture") return "Guest Lecture";
    if (path === "/events/workshop") return "Workshop";
    if (path === "/sponsors") return "Sponsors";
    if (path === "/contact") return "Contact";
    if (path === "/events/hormonics") return "Hormonics";
    return "Home";
  };

  useEffect(() => {
    setActiveLink(getActiveLinkFromURL());
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 w-screen backdrop-blur-sm md:backdrop-blur-none z-50">
        <div className="mx-5 md:mx-20 py-3">
          <div className="grid grid-cols-12 ">
            <img
              className="col-span-6 md:col-span-3 w-32 md:w-48 cursor-pointer"
              src={logo}
              onClick={() => handleLinkClick("Home", "/")}
              alt="Logo"
            />

            <div className="col-span-6 md:hidden flex justify-end items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            <div className="md:col-span-6 col-span-12 mt-4">
              <div className="gradient-line animate-blinkOpacity invisible md:visible relative"></div>
              <ul className={`${isMenuOpen ? "block" : "hidden"} font-poppins md:flex mt-2 text-white justify-center items-center gap-12`}>
                {[
                  { name: "Home", path: "/" },
                  { name: "Events", path: "/events" },
                  { name: "Guest Lecture", path: "/events/guest-lecture" },
                  { name: "Workshop", path: "/events/workshop" },
                  { name: "Hormonics", path: "/events/hormonics" },
                  { name: "Sponsors", path: "/sponsors" },
                  { name: "Contact", path: "/contact" }
                ].map(({ name, path }) => (
                  <li
                    key={name}
                    className={`cursor-pointer py-1 rounded-xl hover:underline hover:underline-offset-8 ${activeLink === name ? "active" : ""}`}
                    onClick={() => handleLinkClick(name, path)}
                  >
                    <span className="relative">
                      {activeLink === name && (
                        <img className="absolute md:-top-5 md:left-1/2 right-12 top-1 w-3  -translate-x-1/2" src={round} alt="" />
                      )}
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

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