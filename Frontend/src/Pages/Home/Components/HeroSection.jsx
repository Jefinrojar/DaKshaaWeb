import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../../assets/Heroimg.png";
import Daksha from "../../../assets/DaKshaa T25.png";

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
  const eventDetails = ["2 DAYS", "14 DEPARTMENTS", "15+ EVENTS"];

  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Floating Animated Tech Face Image (Left Side) */}
      <motion.div
        className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-1/2"
        variants={fadeInUp}
      >
        <motion.img
          src={HeroImg}
          alt="Tech Face"
          className="w-[80%] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto transition-all hover:scale-105"
          variants={floatAnimation}
          animate="animate"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div className="text-center md:text-left w-full md:w-1/2">
        {/* Daksha Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={fadeInUp}
        >
          <img
            src={Daksha}
            alt="Daksha"
            className="w-[80%] max-w-[500px] h-auto sm:w-[400px] md:w-[500px] lg:w-[600px]"
          />
        </motion.div>

        {/* Event Details with Wave Animation */}
        <motion.div className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-sm sm:text-base md:text-lg lg:text-xl">
          {eventDetails.map((word, i) => (
            <motion.div
              key={i}
              className="border-2 border-sky-900 px-1 py-2 sm:py-3 md:py-4"
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

        {/* Register Button with Infinite Pulse */}
        <motion.button
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-lg sm:text-xl md:text-2xl shadow-xl"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          variants={pulseAnimation}
          animate="animate"
        >
          REGISTER NOW!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;