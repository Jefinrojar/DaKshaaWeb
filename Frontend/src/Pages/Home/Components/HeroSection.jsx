import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import HeroImg from "../../../assets/Heroimg.png";
import Daksha from "../../../assets/DaKshaa T25.png";
import Countdown from "./Countdown";
import RegisterAni from "../../../assets/registerani.gif";

// Wave Animation for Words (Description & Event Details)
const wordWaveAnimation = {
  hidden: { y: 0 },
  visible: (i) => ({
    y: [0, -4, 0, 4, 0],
    transition: {
      duration: 1.5,
      delay: i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// Fade-in & Slide Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Infinite Floating Animation for Image
const floatAnimation = {
  animate: {
    y: [0, -15, 0, 15, 0],
    rotate: [0, 1, -1, 1, 0],
    scale: [1, 1.01, 1, 1.01, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
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

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const eventDetails = ["2 DAYS", "20+ WORKSHOPS", "15+ EVENTS"];

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <motion.div
        className="hidden md:flex mt-6 absolute right-10 top-14 sm:mt-8 bg-opacity-70 transition-all text-white font-semibold text-center items-center justify-center overflow-hidden"
        variants={pulseAnimation}
        animate="animate"
        style={{
          backgroundImage: `url(${RegisterAni})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%", // Make it round
          width: "180px", // Increased size
          height: "180px", // Increased size
        }}
      >
        <motion.span
          className="z-10 text-sm cursor-pointer md:text-base bg-sky-700/90 px-5 py-3 clip"
          whileHover={{
            scale: 1.1, // Slightly enlarge the text on hover
            backgroundColor: "rgba(3, 105, 161, 0.95)", // Change background color on hover
            transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
          }}
        >
          REGISTER NOW
        </motion.span>
      </motion.div>

      <motion.div
        className="h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 md:mt-24 mt-24 text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Floating Animated Tech Face Image (Top on Mobile, Right on Desktop) */}
        <motion.div
          className="flex justify-center md:justify-start -mt-12 md:mt-0 w-full md:w-1/2 order-1 md:order-2"
          variants={fadeInUp}
        >
          <motion.img
            src={HeroImg}
            alt="Tech Face"
            className="w-[70%] md:w-[95%] max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[700px] h-auto md:h-[500px] transition-all hover:scale-105"
            variants={floatAnimation}
            animate="animate"
          />
        </motion.div>

        {/* Left Content (Bottom on Mobile, Left on Desktop) */}
        <motion.div className="flex flex-col justify-between mt-8 md:ml-52 md:mt-14 w-full md:w-1/2 order-2 md:order-1">
          {/* Daksha Image */}
          <div>
            <motion.div variants={fadeInUp}>
              <img
                src={Daksha}
                alt="Daksha"
                className="w-[60%] max-w-[500px] h-auto sm:w-[400px] md:w-[500px] lg:w-[600px]"
              />
            </motion.div>

            {/* Event Details with Wave Animation */}
            <motion.div className="mt-4 sm:mt-6 flex justify-between md:justify-start gap-2 sm:gap-4 text-xs md:text-lg lg:text-base whitespace-nowrap">
              {eventDetails.map((word, i) => (
                <motion.div
                  key={i}
                  className="border-2 border-sky-900 px-2 lg:px-2 md:px-4 py-2 sm:py-3 md:py-4 flex-shrink-0 cursor-pointer"
                  whileHover={{ scale: 1.05 }} // Slightly increase scale on hover
                  onClick={() => {
                    if (word === "20+ WORKSHOPS") {
                      handleNavigation("/events/workshop"); // Navigate to workshops
                    } else if (word === "15+ EVENTS") {
                      handleNavigation("/events"); // Navigate to events
                    }
                  }}
                >
                  <motion.span
                    className="bg-sky-900 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 bg-opacity-80 clip-bottom-right-2"
                    variants={wordWaveAnimation}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    {word}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
            
            <h1 className="text-2xl font-orbitron md:text-4xl mt-4 md:mt-4"><q > Prize pool of <span className="text-purple-600">5 Lakhs</span> </q></h1>

            {/* Register Button - Mobile (Below Image) */}
            <div className="md:hidden flex justify-center mt-6">
              <motion.div
                className="bg-opacity-70 transition-all text-white font-medium text-center flex items-center justify-center overflow-hidden"
                variants={pulseAnimation}
                animate="animate"
                style={{
                  backgroundImage: `url(${RegisterAni})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px",
                }}
              >
                <motion.span
                  className="z-10 clip text-xs cursor-pointer sm:text-sm md:text-base bg-sky-700/90 p-2"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(3, 105, 161, 0.95)",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  REGISTER NOW
                </motion.span>
              </motion.div>
            </div>

            {/* Register Button with Infinite Pulse */}
          </div>
          <Countdown />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroSection;
