import React from "react";
import { motion } from "framer-motion";

const GuestLectureCard = ({ name, title, image, time, date, location }) => {
    return (
        <motion.div 
            className="bg-[#0F172A] p-6 rounded-2xl shadow-lg text-white w-80 text-center border-2 border-white"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <img
                    src={image}
                    alt={name}
                    className="w-60 h-48 mx-auto rounded-xl object-cover border-2 border-white"
                />
                <h2 className="text-xl font-bold mt-4">{name}</h2>
                <p className="text-sm text-gray-300 mt-2">{title}</p>
                <div className="flex flex-col items-center mt-4 space-y-2">
                    <motion.div 
                        className="flex items-center space-x-2 border-2 border-white p-1 px-2 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <span className="text-lg">🕒</span>
                        <span>{time}</span>
                    </motion.div>
                    <div className="flex items-center space-x-2">
                        <span className="text-lg">📅</span>
                        <span>{date}</span>
                    </div>
                    <motion.div 
                        className="flex items-center space-x-2 bg-brown-500 px-3 py-1 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <span className="text-lg">📍</span>
                        <span>{location}</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default GuestLectureCard;