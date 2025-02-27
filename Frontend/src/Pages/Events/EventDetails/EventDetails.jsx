import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AidsImage from "../../../assets/EventsImages/EventDetails/TechnicalImages/Ai&ds.jpg"
const EventDetails = () => {
    const { eventId } = useParams(); // Get the dynamic parameter from the URL

    const eventDetails = {
        // Technical Events
        "technical-event-1": {
            title: "AI and Machine Learning Workshop",
            description:
                "Explore the fundamentals of AI and Machine Learning in this hands-on workshop. Learn about neural networks, data preprocessing, and model training.",
            image: AidsImage,
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "Participants will solve basic machine learning problems and submit their solutions.",
                },
                {
                    title: "Round 2",
                    description:
                        "Advanced machine learning challenges will be given, and participants must present their solutions.",
                },
            ],
            rules: [
                "Participants can either be individuals or form a team.",
                "Using mobile phones for any assistance is prohibited.",
                "Participants must provide a valid identification card.",
                "Rules cannot be changed after the initiation of the event.",
                "Judges' decision is final.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 20, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "IT Park, Silicon Valley",
                },
                {
                    round: "Round 2",
                    date: "May 21, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "IT Park, Silicon Valley",
                },
            ],
            contact: {
                name: "Jon Biden",
                phone: "9156546648",
                email: "king-ed@xyzmail.com",
            },
            registrationLink: "https://example.com/register/ai-ml-workshop", // Registration link
        },
        "technical-event-2": {
            title: "Web Development Bootcamp",
            description:
                "Master the art of web development with HTML, CSS, JavaScript, and React. Build responsive and dynamic websites from scratch.",
            image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "Participants will create a basic HTML/CSS layout for a given design.",
                },
                {
                    title: "Round 2",
                    description:
                        "Participants will build a dynamic web application using React.",
                },
            ],
            rules: [
                "Participants must work individually.",
                "Pre-built templates are not allowed.",
                "Participants must submit their work within the given time.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 22, 2025",
                    time: "9:00 AM to 11:00 AM",
                    location: "Tech Hub, Innovation Center",
                },
                {
                    round: "Round 2",
                    date: "May 23, 2025",
                    time: "1:00 PM to 3:00 PM",
                    location: "Tech Hub, Innovation Center",
                },
            ],
            contact: {
                name: "Alice Smith",
                phone: "9876543210",
                email: "alice.smith@xyzmail.com",
            },
            registrationLink: "https://example.com/register/web-dev-bootcamp", // Registration link
        },

        // Non-Technical Events
        "non-technical-event-1": {
            title: "Art and Creativity Exhibition",
            description:
                "Showcase your artistic talents in this exhibition featuring paintings, sculptures, and digital art.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rounds: [
                {
                    title: "Round 1",
                    description:
                        "Participants will present their artwork to the judges.",
                },
                {
                    title: "Round 2",
                    description:
                        "Finalists will create a new piece of art on the spot.",
                },
            ],
            rules: [
                "Artwork must be original and created by the participant.",
                "No offensive or inappropriate content is allowed.",
                "Participants must bring their own materials.",
            ],
            schedule: [
                {
                    round: "Round 1",
                    date: "May 24, 2025",
                    time: "10:00 AM to 12:00 PM",
                    location: "Art Gallery, Creative Center",
                },
                {
                    round: "Round 2",
                    date: "May 25, 2025",
                    time: "2:00 PM to 4:00 PM",
                    location: "Art Gallery, Creative Center",
                },
            ],
            contact: {
                name: "Emily Johnson",
                phone: "8765432109",
                email: "emily.j@xyzmail.com",
            },
            registrationLink: "https://example.com/register/art-exhibition", // Registration link
        },

        // Culturals
        "culturals-event-1": {
            title: "Traditional Dance Performance",
            description:
                "Experience the beauty of traditional dance forms from different cultures.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                name: "Michael Brown",
                phone: "7654321098",
                email: "michael.b@xyzmail.com",
            },
            registrationLink: "https://example.com/register/dance-performance", // Registration link
        },

        // Workshop
        "workshop-1": {
            title: "Robotics Workshop",
            description:
                "Build and program your own robot in this hands-on robotics workshop.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            contact: {
                name: "David Wilson",
                phone: "6543210987",
                email: "david.w@xyzmail.com",
            },
            registrationLink: "https://example.com/register/robotics-workshop", // Registration link
        },
    };

    // Define animation variants
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const ScrollAnimation = ({ children }) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        );
    };

    const event = eventDetails[eventId];

    if (!event) {
        return <div className="text-center text-3xl font-bold mt-24">Event not found!</div>;
    }

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

    const isTechnicalOrNonTechnical = eventId.startsWith("technical-event") || eventId.startsWith("non-technical-event");

    return (
        <div className="p-4 md:p-10 mt-24 text-white min-h-screen">
            <div className="max-w-4xl mx-auto text-white p-4 md:p-6">
                <ScrollAnimation>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#9DD3FF]">{event.title}</h1>
                </ScrollAnimation>

                {/* Register Now Button */}
                <motion.button
                    className="mb-8 w-full md:w-auto md:ml-72 px-6 py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.9 }}
                    variants={pulseAnimation} // Infinite pulsing animation
                    animate="animate" // Ensure the animation is always running
                    onClick={() => window.open(event.registrationLink, "_blank")} // Open registration link in a new tab
                >
                    REGISTER NOW!
                </motion.button>

                <ScrollAnimation>
                    <div className="border border-sky-800 p-2">
                        <div className="text-center border border-sky-800 clip-bottom-right flex flex-col gap-4 p-4 md:p-10 items-center bg-sky-900/20">
                            <p className="font-semibold text-2xl md:text-3xl text-sky-600 border border-sky-800 px-3 py-3">Description</p>
                            <img src={event.image} alt={event.title} className="w-40 h-40 md:w-56 md:h-56 object-cover mb-4 shadow-md" />
                            <p className="text-lg md:text-xl mb-4 text-sky-600">{event.description}</p>
                        </div>
                    </div>
                </ScrollAnimation>

                {isTechnicalOrNonTechnical && (
                    <>
                        <ScrollAnimation>
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
                        </ScrollAnimation>

                        {/* Rounds Section */}
                        <ScrollAnimation>
                            <div className="border border-sky-800 p-2">
                                <div className="border border-sky-800 shadow-lg p-4 md:p-10">
                                    <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Rounds</h2>
                                    <div className="flex flex-col gap-7">
                                        {event.rounds.map((round, index) => (
                                            <motion.div key={index} className="flex flex-col gap-3" variants={itemVariants}>
                                                <h1 className="font-semibold text-xl md:text-2xl text-sky-600">{round.title}</h1>
                                                <p className="text-lg md:text-xl text-sky-300">{round.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Rules Section */}
                        <ScrollAnimation>
                           <div className="border border-sky-800 p-2 mt-6">
                            <div className="bg-sky-900/30 shadow-lg p-4 md:p-10">
                                    <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 bg-inherit border border-sky-800 px-3 py-3">Rules</h2>
                                    <ul className="list-disc pl-6 text-lg md:text-xl text-sky-300">
                                        {event.rules.map((rule, index) => (
                                            <motion.li key={index} variants={itemVariants}>
                                                {rule}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                           </div>
                        </ScrollAnimation>

                        {/* Schedule Section */}
                        <ScrollAnimation>
                            <div className="border border-sky-800 p-2 mt-6">
                                <div className="p-4 md:p-10">
                                    <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">Schedule</h2>
                                    {event.schedule.map((schedule, index) => (
                                        <motion.div key={index} className="border-gray-300 pb-2 mb-2" variants={itemVariants}>
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
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    </>
                )}

                {/* Contact Section */}
                <ScrollAnimation>
                    <div className="border border-sky-800 p-3 mt-6">
                        <div className="bg-sky-900/20 p-4 md:p-10">
                            <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-sky-600 border border-sky-800 px-3 py-3">Contact</h2>
                            <p className="text-lg md:text-xl text-sky-300">{event.contact.name} - {event.contact.phone}</p>
                            <p className="text-lg md:text-xl text-sky-300">{event.contact.email}</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default EventDetails;