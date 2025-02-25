import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ksrct from '../../../assets/collegeLogo.png';
import dakshaa from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer bg-gray-900 text-white py-24 text-base">
            <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 text-center md:text-left">
                
                <div className="logo flex justify-center md:justify-start">
                    <img src={ksrct} alt="KSRCT Logo" className="h-20 w-auto" />
                </div>

                <div className="contact">
                    <h3 className="text-3xl font-semibold">Contact</h3>
                    <div className="flex flex-col items-center md:items-start gap-3 mt-4">
                        <div className="flex items-center gap-3 leading-10">
                            <FaPhone className="text-white text-xl" />
                            <p className="text-lg">(04288) 274741 to 274744</p>
                        </div>
                        <div className="flex items-center gap-3 leading-10">
                            <FaEnvelope className="text-white text-xl" />
                            <p className="text-lg text-center md:text-left">office@ksrct.ac.in, info@ksrct.ac.in</p>
                        </div>
                    </div>
                </div>

                <div className="address">
                    <h3 className="text-3xl font-semibold">Address</h3>
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-3 mt-3 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-white text-xl mt-2" />
                        </div>
                        <p className="text-lg leading-10">
                            K.S.Rangasamy College of Technology, <br />
                            KSR Kalvi Nagar, Tiruchengode-637 215, <br />
                            Tamil Nadu, India.
                        </p>
                    </div>
                </div>

                <div className="social flex flex-col items-center">
                    <img className="max-w-[190px] mb-4" src={dakshaa} alt="Event Logo" />
                    <div className="icon flex gap-6 mt-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaYoutube className="text-2xl" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaXTwitter className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
