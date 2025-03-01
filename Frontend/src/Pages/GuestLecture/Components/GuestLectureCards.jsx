import React from "react";
import { motion } from "framer-motion";

const GuestLectureCard = ({ name, title, image, time, date, location }) => {
    return (
        <motion.div
            className="p-3 border border-sky-800 mx-auto max-w-full" // Added max-w-full for responsiveness
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="bg-sky-900 bg-opacity-40 p-4 sm:p-6 shadow-lg text-white text-center clip-bottom-right w-full md:w-[1400px] h-auto md:h-[500px]" // Responsive width and height
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0"> {/* Stack on mobile, side-by-side on desktop */}
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-start">
                        <div className="p-2 border border-sky-800 w-full max-w-[300px] sm:max-w-[400px] md:max-w-full"> {/* Responsive image container */}
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-[250px] sm:h-[300px] md:h-full clip-top-left object-cover" // Responsive height
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col justify-start items-center md:items-start ml-0 md:ml-10 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">{name}</h2>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">{title}</p>
                        <p className="text-justify mt-3 text-sm sm:text-base">
                            {name === "Building & Mechanical Science" &&
                                "The School of Building & Mechanical Sciences at KSRCT focuses on engineering excellence, innovation, and hands-on learning in mechanical, mechatronics, and civil engineering. It offers state-of-the-art facilities, an industry-driven curriculum, and advanced research opportunities. Mechanical engineering emphasizes design, manufacturing and robotics; mechatronics integrates mechanical, electronics, and computing for AI-driven automation and Industry 4.0; civil engineering specializes in sustainable infrastructure and smart cities. With cutting-edge labs, strong industry partnerships, and a practical learning approach, KSRCT ensures students excel in automotive, robotics, and construction sectors, preparing them for global career opportunities."
                            }
                            {name === "Life Science" &&
                                "The School of Life Sciences at KSRCT offers specialized programs in Textile Technology, Biotechnology, and Food Technology. The Textile Technology program focuses on fiber science, fabric production, and sustainable textile innovations. Biotechnology covers genetic engineering, bioprocess technology, and medical research, preparing students for careers in healthcare, pharmaceuticals, and agriculture. Food Technology emphasizes food safety, processing, and nutrition, equipping graduates for roles in food production and quality control. With advanced laboratories, industry collaborations, and hands-on learning, KSRCT ensures strong placement opportunities in textile manufacturing, biotech research, and the food industry, preparing students for diverse career opportunities in life sciences."
                            }
                            {name === "Dr. APJ Abdul Kalam (Legacy)" &&
                                "A tribute to the visionary teachings and leadership of Dr. APJ Abdul Kalam, inspiring young minds in aerospace, technology, and national development."
                            }
                            {name === "Electrical Sciences" &&
                                "The School of Electrical Sciences at KSRCT offers cutting-edge programs in Electrical & Electronics Engineering (EEE), Electronics & Communication Engineering (ECE), and Electronics Engineering (VLSI Design and Technology). EEE focuses on power systems, renewable energy, and automation, while ECE specializes in communication systems, IoT, and AI-driven electronics. The VLSI program trains students in chip design, semiconductor fabrication, and nanoelectronics. With advanced labs, industry collaborations, and hands-on learning, KSRCT ensures strong placement opportunities in power, telecom, semiconductor, and embedded systems industries, preparing students to excel in modern technology-driven careers."
                            }
                            {name === "Computer Sciences" &&
                                "The School of Computer Sciences at KSRCT offers programs in Computer Science and Engineering, Information Technology, Computer Science and Business Systems, Artificial Intelligence and Data Science, and Artificial Intelligence and Machine Learning. These programs focus on software development, data analytics, cybersecurity, and emerging technologies like AI and machine learning. Students gain hands-on experience in programming, cloud computing, and business applications. With state-of-the-art labs, industry collaborations, and research opportunities, KSRCT ensures strong placement prospects in IT, software development, data science, and AI-driven industries, preparing graduates for successful careers in the rapidly evolving field of computer science and technology."
                            }
                        </p>
                        {/* <div className="mt-6 md:mt-16 space-y-2 text-sm sm:text-base">
                            <motion.div
                                className="flex items-center justify-center md:justify-start space-x-2 border-2 border-white p-1 px-2"
                            // animate={{ scale: [1, 1.1, 1] }}
                            // transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <span className="text-lg">🕒</span>
                                <span>{time}</span>
                            </motion.div>
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <span className="text-lg">📅</span>
                                <span>{date}</span>
                            </div>
                            <motion.div
                                className="flex items-center justify-center md:justify-start space-x-2 bg-brown-500 py-1 rounded-full"
                            // animate={{ scale: [1, 1.1, 1] }}
                            // transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <span className="text-lg">📍</span>
                                <span>{location}</span>
                            </motion.div>
                        </div> */}
                        <button
                            className="mb-8 w-full md:w-auto md:mt-5 px-6 py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                            onClick={() => window.open("www.google.com", "_blank")} // Open registration link in a new tab
                        >
                            REGISTER NOW!
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default GuestLectureCard;