import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Assuming you're using Lucide icons

const HackathonSection = () => {
    // Example data as an array of objects
    const eventDetails = {
        id: "hackathon-event-1",
        title: "Hackathon 2025 By",
        descriptions: [
            { image: "https://png.pngtree.com/png-clipart/20220916/ourmid/pngtree-coming-soon-banner-png-image_6177419.png",text: "Collaborate with top minds and innovate new solutions."  },
            { image: "https://png.pngtree.com/png-clipart/20220916/ourmid/pngtree-coming-soon-banner-png-image_6177419.png", text: "Collaborate with top minds and innovate new solutions." },
            { image: "https://png.pngtree.com/png-clipart/20220916/ourmid/pngtree-coming-soon-banner-png-image_6177419.png", text: "Compete for exciting prizes and career opportunities." }
        ],
        registrationLink: "https://example.com/register",
        rounds: [
            {
                title: "Round 1: Ideation",
                description: [
                    "Submit your project idea.",
                    "Present a brief pitch.",
                    "Teams will be shortlisted for Round 2.",
                ],
            },
            {
                title: "Round 2: Prototype",
                description: [
                    "Develop a working prototype.",
                    "Submit a demo video.",
                    "Finalists will be selected for Round 3.",
                ],
            },
        ],
        rules: [
            "Teams must consist of 2-4 members.",
            "All code must be written during the hackathon.",
            "Plagiarism will result in disqualification.",
        ],
        schedule: [
            {
                round: "Round 1: Ideation",
                date: "March 27, 2025",
                time: "5:00 PM",
                location: "Lab 1",
            },
            {
                round: "Round 2: Prototype",
                date: "March 28, 2023",
                time: "2:00 PM",
                location: "Lab 1",
            },
        ],
        contact: {
            facultyCoordinator: [
                {
                    name: "Mr. K.Senthil Kumar",
                    phone: "+91 95666 66124",
                    email: "senthilkumark@ksrct.ac.in",
                },
                {
                    name: "Mrs. K.Mahalakshmi",
                    phone: "+91 99442 86457",
                    email: "mahalakshmik@ksrct.ac.in",
                },
            ],
            studentCoordinator: [
                {
                    name: "Jane Smith",
                    phone: "+0987654321",
                    email: "jane.smith@example.com",
                },
            ],
        },
    };

    // Use the first event in the array for demonstration
    const event = eventDetails;

    const [openRound, setOpenRound] = useState(null);

    const toggleRound = (round) => {
        setOpenRound(openRound === round ? null : round);
    };

    // Infinite Pulsing Animation for Button
    const pulseAnimation = {
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    // Load Animation
    const loadAnimation = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition="transition"
            variants={loadAnimation}
            className="p-4 md:p-10 mt-24 text-white min-h-screen"
        >
            <div className="max-w-4xl mx-auto text-white p-4 md:p-6">
                <div className="flex justify-center items-center mb-7 md:gap-5 gap-2">
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-[#9DD3FF]">{event.title}</h1>
                    <img src="https://cdn.brandfetch.io/id3BHBKuok/w/500/h/500/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" alt="" className="md:w-24 md:h-24 w-16 h-16"/>
                </div>

                {/* Register Now Button */}
                <motion.button
                    className="mb-8 w-60 ml-12 md:w-auto md:ml-72 px-6 py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                    variants={pulseAnimation} // Infinite pulsing animation
                    animate="animate" // Ensure the animation is always running
                    onClick={() => window.open(event.registrationLink, "_blank")} // Open registration link in a new tab
                >
                    REGISTER NOW!
                </motion.button>

                {/* Rest of the content */}
                <div className="flex flex-col md:flex-row justify-between my-10 gap-4">
                    {['Description', 'Rounds', 'Rules', 'Schedule', 'Contact'].map((item, index) => (
                        <motion.div
                            key={index}
                            className="border-2 border-sky-900 p-1"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1 className="bg-sky-900 px-4 md:px-10 py-3 text-sky-300 bg-opacity-80 clip-bottom-right-2">{item}</h1>
                        </motion.div>
                    ))}
                </div>

                {/* Description Section */}
                <div className="border border-sky-800 p-2 mb-6 ">
                    <div className="flex flex-col gap-8  border p-4  border-sky-800 bg-sky-900/30">
                        <p className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Hackathon By Guvi</p>

                        {eventDetails?.descriptions?.map((desc, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div className="w-40 h-40 md:w-72 md:h-72">
                                    <img
                                        src={desc.image}
                                        alt={`Hackathon image ${index + 1}`}
                                        className="w-full h-full object-cover border border-sky-800"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-sky-300">{desc.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rewards and Recognition Section */}
                <div className="border border-sky-800 p-2 mb-5">
                    <div className="border border-sky-800 shadow-lg p-4 md:p-10">
                        <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">
                            Rewards and Recognition
                        </h2>

                        {/* Prize List */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
                            {/* 1st Prize */}
                            <div className="flex flex-col items-center bg-sky-900/30 border border-sky-800 p-6 rounded-lg w-full max-w-xs shadow-md sm:mt-16 order-2 sm:order-1">
                                <span className="text-2xl font-bold text-yellow-400">🥈 2nd Prize</span>
                                <span className="text-3xl font-semibold text-white mt-2">₹30,000</span>
                            </div>

                            {/* 2nd Prize (Center) */}
                            <div className="flex flex-col items-center bg-sky-900/30 border border-sky-800 p-6 rounded-lg w-full max-w-xs shadow-md sm:mb-16 order-1 sm:order-2">
                                <span className="text-2xl font-bold text-gray-300">🥇 1st Prize</span>
                                <span className="text-3xl font-semibold text-white mt-2">₹50,000</span>
                            </div>

                            {/* 3rd Prize */}
                            <div className="flex flex-col items-center bg-sky-900/30 border border-sky-800 p-6 rounded-lg w-full max-w-xs shadow-md sm:mt-16 order-3">
                                <span className="text-2xl font-bold text-orange-400">🥉 3rd Prize</span>
                                <span className="text-3xl font-semibold text-white mt-2">₹20,000</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Rounds Section */}
                <div className="border border-sky-800 p-2">
                    <div className="border border-sky-800 shadow-lg p-4 md:p-10">
                        <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Rounds</h2>
                        <div className="flex flex-col gap-7">
                            {event.rounds.map((round, index) => (
                                <motion.div key={index} className="flex flex-col gap-3">
                                    <h1 className="font-semibold text-xl md:text-2xl text-sky-600">{round.title}</h1>
                                    {/* Check if description is an array and render as a list */}
                                    {Array.isArray(round.description) ? (
                                        <ul className="list-disc pl-6 text-lg md:text-xl text-sky-300">
                                            {round.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-lg md:text-xl text-sky-300">{round.description}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rules Section */}
                <div className="border border-sky-800 p-2 mt-6">
                    <div className="bg-sky-900/30 shadow-lg p-4 md:p-10">
                        <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 bg-inherit border border-sky-800 px-3 py-3">Rules</h2>
                        <ul className="list-disc pl-6 text-lg md:text-xl text-sky-300">
                            {event.rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Schedule Section */}
                <div className="border border-sky-800 p-2 mt-6">
                    <div className="p-4 md:p-10">
                        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Schedule</h2>
                        {event.schedule.map((schedule, index) => (
                            <div key={index} className="border-gray-300 pb-2 mb-2">
                                <motion.button
                                    className="flex justify-between items-center w-full text-lg md:text-xl font-medium p-3 border border-sky-800 text-sky-500 hover:bg-sky-700 transition-colors duration-300"
                                    onClick={() => toggleRound(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {schedule.round}
                                    {openRound === index ? <ChevronUp /> : <ChevronDown />}
                                </motion.button>
                                {openRound === index && (
                                    <motion.div
                                        className="mt-2 p-3 border border-sky-900 bg-transparent text-gray-300"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-base md:text-lg">Date: {schedule.date}</p>
                                        <p className="text-base md:text-lg">Time: {schedule.time}</p>
                                        <p className="text-base md:text-lg">Location: {schedule.location}</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="border border-sky-800 p-3 mt-6">
                    <div className="bg-sky-900/20 p-4 md:p-10">
                        <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-sky-600 border border-sky-800 px-3 py-3">Contact</h2>

                        {/* Faculty Coordinator Contact Details */}
                        <div className="mb-8">
                            <h3 className="text-xl md:text-2xl font-semibold text-sky-500 mb-4">Faculty Coordinator</h3>
                            {event.contact.facultyCoordinator.map((coordinator, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-lg md:text-xl text-sky-300">{coordinator.name}</p>
                                    <p className="text-lg md:text-xl text-sky-300">{coordinator.phone}</p>
                                    <p className="text-lg md:text-xl text-sky-300">{coordinator.email}</p>
                                </div>
                            ))}
                        </div>

                        {/* Student Coordinator Contact Details */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-sky-500 mb-4">Student Coordinator</h3>
                            {event.contact.studentCoordinator.map((coordinator, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-lg md:text-xl text-sky-300">{coordinator.name}</p>
                                    <p className="text-lg md:text-xl text-sky-300">{coordinator.phone}</p>
                                    <p className="text-lg md:text-xl text-sky-300">{coordinator.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HackathonSection;