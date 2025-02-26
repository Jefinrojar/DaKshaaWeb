import React from "react";
import { motion } from "framer-motion";

const GuestLectureCard = ({ name, title, image, time, date, location }) => {
    return (
        <motion.div className="p-3 border border-sky-800"
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="bg-sky-900 bg-opacity-40 p-6 shadow-lg text-white  text-center clip-bottom-right w-[1400px] h-[500px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="grid grid-cols-2">
                    <div className="colspan-1 flex">
                        <div className="p-2 border border-sky-800">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full clip-top-left object-cover"
                            />
                        </div>
                    </div>
                    <div className="colspan-1 flex flex-col justify-start items-start ml-10">
                        <h2 className="text-4xl font-bold mt-4">{name}</h2>
                        <p className="text-gray-400 mt-2">{title}</p>
                        <p className="text-justify mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consectetur architecto, voluptatibus totam omnis a tempora. Modi, tenetur vero enim provident ipsam quae voluptas aliquid commodi voluptates corrupti esse doloremque assumenda nisi quis nulla, omnis ea excepturi accusantium ipsa. Debitis molestiae ipsa repellat harum quam magni incidunt reiciendis eveniet voluptates? Praesentium possimus odio aliquam rem illo explicabo commodi eligendi autem.</p>
                        <div className="mt-16 space-y-2">
                            <motion.div
                                className="flex items-center space-x-2 border-2 border-white p-1 px-2"
                            // animate={{ scale: [1, 1.1, 1] }}
                            // transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <span className="text-lg">🕒</span>
                                <span>{time}</span>
                            </motion.div>
                            <div className="flex items-center space-x-2">
                                <span className="text-lg">📅</span>
                                <span>{date}</span>
                            </div>
                            <motion.div
                                className="flex items-center space-x-2 bg-brown-500 py-1 rounded-full"
                            // animate={{ scale: [1, 1.1, 1] }}
                            // transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <span className="text-lg">📍</span>
                                <span>{location}</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default GuestLectureCard;
