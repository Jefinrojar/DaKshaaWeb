import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../../assets/Heroimg.png";
import Daksha from "../../../assets/DaKshaa T25.png"; // Import the Daksha image

// Wave Animation for Each Letter (Title)
const waveAnimation = {
  hidden: { y: 0 },
  visible: (i) => ({
    y: [0, -10, 0, 5, 0], // Smooth wave effect
    transition: {
      duration: 1.2,
      delay: i * 0.15,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// Wave Animation for Words (Description & Event Details)
const wordWaveAnimation = {
  hidden: { y: 0 },
  visible: (i) => ({
    y: [0, -8, 0, 4, 0], // Subtle wave effect for words
    transition: {
      duration: 1.5,
      delay: i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// Fade-in & Slide Animation (for reload effect)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Infinite Floating Animation for Image with Rotation and Scaling
const floatAnimation = {
  animate: {
    y: [0, -20, 0, 20, 0], // Smooth floating effect
    rotate: [0, 2, -2, 2, 0], // Gentle rotation
    scale: [1, 1.02, 1, 1.02, 1], // Subtle scaling
    transition: {
      duration: 6, // Slower duration for a smoother effect
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
  const descriptionLine1 = "KSRCT's largest".split(" "); // First line of description
  const descriptionLine2 = "tech festival of 2K25".split(" "); // Second line of description
  const eventDetails = ["2 DAYS", "|", "15 DEPARTMENTS", "|", "15+ EVENTS"];

  return (
    <motion.div
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 text-white ml-28"
      initial="hidden"
      animate="visible"
      variants={fadeInUp} // Apply reload animation
    >
      {/* Left Content */}
      <motion.div className="text-center md:text-left">
        {/* Daksha Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={fadeInUp}
        >
          <img
            src={Daksha}
            alt="Daksha"
            className="w-[500px] md:w-[600px] h-auto" // Adjust size as needed
          />
        </motion.div>

        {/* Description Line 1: "KSRCT's largest" */}
        <motion.div className="flex text-center justify-center md:justify-start mt-6 text-4xl md:text-3xl font-marck ml-24">
          {descriptionLine1.map((word, i) => (
            <motion.p
              key={i}
              className="mr-2 text-center"
              variants={wordWaveAnimation}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {word}
            </motion.p>
          ))}
        </motion.div>

        {/* Description Line 2: "tech festival of 2K25" */}
        <motion.div className="flex flex-wrap justify-center ml-14 md:justify-start mt-2 text-4xl md:text-3xl font-marck space-x-2">
          {descriptionLine2.map((word, i) => (
            <motion.p
              key={i}
              className="mr-2"
              variants={wordWaveAnimation}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {word}
            </motion.p>
          ))}
        </motion.div>

        {/* Event Details with Wave Animation */}
        <motion.div className="mt-6 flex justify-center md:justify-start space-x-6 md:text-xl ml-4">
          {eventDetails.map((word, i) => (
            <motion.span
              key={i}
              className="font-kohSantepheap" // Apply Koh Santepheap font
              variants={wordWaveAnimation}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Register Button with Infinite Pulse */}
        <motion.button
          className="mt-6 px-6 py-3 ml-24 bg-[#01013F] border-2 border-white hover:bg-blue-800 transition-all text-white font-semibold text-lg rounded-xl shadow-xl"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          variants={pulseAnimation} // Infinite pulsing animation
          animate="animate" // Ensure the animation is always running
        >
          REGISTER NOW!
        </motion.button>
      </motion.div>

      {/* Floating Animated Tech Face Image */}
      <motion.div className="flex justify-center mt-10 md:mt-0" variants={fadeInUp}>
        <motion.img
          src={HeroImg}
          alt="Tech Face"
          className="w-[700px] h-[600px] transition-all hover:scale-105"
          variants={floatAnimation} // Infinite floating effect
          animate="animate" // Ensure the animation is always running
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;