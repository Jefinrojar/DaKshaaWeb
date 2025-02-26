import React from "react";
import { motion } from "framer-motion";

function Sponsors() {
  const titleText = "Our Sponsors";
  const letters = Array.from(titleText);

  const letterAnimation = (index) => ({
    y: [0, -5, 0],
    transition: {
      delay: index * 0.05,
      duration: 1.2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  const cardEntryAnimation = (index) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: index * 0.3,
      duration: 1, // Increase duration for smoothness
      ease: "easeInOut",
    },
  });
  

  return (
    <div
      className="mt-16 text-white bg-cover bg-center min-h-screen flex flex-col items-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,event')" }}
    >
      {/* Title Animation */}
      <h1 className="font-bold text-center mt-12 text-3xl">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={letterAnimation(index)}
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      {/* Sponsors Section */}
      {[
        { title: "Event Sponsors", offset: 0 },
        { title: "Workshop Sponsors", offset: 3 },
      ].map(({ title, offset }, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 text-center w-full"
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-6 mt-6 place-items-center">
            {[1, 2, 3].map((sponsor, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, rotateY: 180 }}
        animate={cardEntryAnimation(index)}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="shadow-lg flex justify-center items-center bg-gray-800 w-48 h-48 relative rounded-lg"
      >
      
                {/* Green Glowing Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-4 border-transparent"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(0, 255, 0, 0.5)",
                      "0 0 15px rgba(0, 255, 0, 0.8)",
                      "0 0 5px rgba(0, 255, 0, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
                <img
                  className="w-48 h-48 object-cover rounded-lg border-2 border-white"
                  src={`https://picsum.photos/200?random=${index + offset}`}
                  alt={`${title} ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Sponsors;
