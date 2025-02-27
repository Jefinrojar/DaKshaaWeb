import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ksrct from '../../assets/collegeLogo.png';
import dakshaa from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer bg-gray-900 text-white py-12 md:py-24 text-base">
            <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 text-center md:text-left">
                
                <div className="logo flex justify-center md:justify-start">
                    <img src={ksrct} alt="KSRCT Logo" className="h-16 w-auto md:h-20" />
                </div>

                <div className="contact">
                    <h3 className="text-2xl md:text-3xl font-semibold">Contact</h3>
                    <div className="flex flex-col items-center md:items-start gap-2 mt-3 md:mt-4">
                        <div className="flex items-center gap-2 md:gap-3 leading-8">
                            <FaPhone className="text-white text-lg md:text-xl" />
                            <p className="text-base md:text-lg">(04288) 274741 to 274744</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 leading-8">
                            <FaEnvelope className="text-white text-lg md:text-xl" />
                            <p className="text-base md:text-lg">office@ksrct.ac.in, info@ksrct.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="address">
                    <h3 className="text-2xl md:text-3xl font-semibold">Address</h3>
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 mt-2 md:mt-3 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-white text-lg md:text-xl mt-1 md:mt-2" />
                        </div>
                        <p className="text-base md:text-lg leading-8 md:leading-10">
                            K.S.Rangasamy College of Technology, <br />
                            KSR Kalvi Nagar, Tiruchengode-637 215, <br />
                            Tamil Nadu, India.
                        </p>
                    </div>
                </div>

                <div className="social flex flex-col items-center">
                    <img className="max-w-[150px] md:max-w-[190px] mb-3 md:mb-4" src={dakshaa} alt="Event Logo" />
                    <div className="icon flex gap-4 md:gap-6 mt-3 md:mt-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebook className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedin className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaYoutube className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaXTwitter className="text-xl md:text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;