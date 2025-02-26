import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const InquiryCard = ({ inquiry }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900 p-4 rounded-lg mb-4 text-white shadow-lg"
    >
        <p><FaUser className="inline mr-2 text-blue-400" /> {inquiry.name}</p>
        <p><FaPhone className="inline mr-2 text-green-400" /> {inquiry.mobile}</p>
        <p><FaEnvelope className="inline mr-2 text-red-400" /> {inquiry.email}</p>
    </motion.div>
);

const InquirySection = ({ title, inquiries }) => {
    const [showInquiries, setShowInquiries] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 p-4 bg-gray-800 rounded-lg text-white"
        >
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowInquiries(!showInquiries)}>
                <h1 className="text-lg font-semibold">{title}</h1>
                {showInquiries ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
                {showInquiries && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-3"
                    >
                        {inquiries.map((inquiry, index) => (
                            <InquiryCard key={index} inquiry={inquiry} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Contact = () => {
    const inquiries = [
        { name: "John Doe", mobile: "+1234567890", email: "john@example.com" },
        { name: "Jane Smith", mobile: "+9876543210", email: "jane@example.com" },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 text-white mt-20 border-4 border-gray-700 rounded-lg bg-gray-900 bg-opacity-80 shadow-2xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h1 className="font-bold mb-4 text-xl">Connect</h1>
                    <div className="social-icon flex space-x-4 mb-4 items-center w-full">
                        {[{ icon: <FaLinkedin />, link: "#", color: "text-blue-500" },
                          { icon: <FaInstagram />, link: "#", color: "text-pink-500" },
                          { icon: <FaFacebook />, link: "#", color: "text-blue-700" },
                          { icon: <FaYoutube />, link: "#", color: "text-red-500" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className={`text-2xl w-12 h-12 flex items-center justify-center ${social.color} rounded-full bg-gray-700 hover:bg-opacity-80`}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
<div className="map">
                        <iframe 
                            className="gmap_iframe w-[450px] h-[250px] border-4 border-white rounded-lg" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0" 
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=K.S.Rangasamy College Of Technology&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                </div>
                    </div>
                    <InquirySection title="General Inquiries" inquiries={inquiries} />
                    <InquirySection title="Sponsorship/Collaborations" inquiries={inquiries} />
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">Contact</h1>
                    <form className="space-y-4">
                        {["Name", "Mobile", "Email", "Message"].map((placeholder, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -50 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                                className="flex items-center bg-gray-700 p-2 rounded-lg"
                            >
                                {placeholder === "Message" ? (
                                    <textarea 
                                        name={placeholder.toLowerCase()} 
                                        placeholder={placeholder} 
                                        className="bg-transparent w-full outline-none h-24 resize-none text-white"
                                    ></textarea>
                                ) : (
                                    <>
                                        {placeholder === "Name" && <FaUser className="mr-2 text-blue-400" />}
                                        {placeholder === "Mobile" && <FaPhone className="mr-2 text-green-400" />}
                                        {placeholder === "Email" && <FaEnvelope className="mr-2 text-red-400" />}
                                        <input 
                                            type="text" 
                                            name={placeholder.toLowerCase()} 
                                            placeholder={placeholder} 
                                            className="bg-transparent w-full outline-none text-white"
                                        />
                                    </>
                                )}
                            </motion.div>
                        ))}
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white"
                        >
                            Submit
                        </motion.button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
