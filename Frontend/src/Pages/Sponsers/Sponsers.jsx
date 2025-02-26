import React from "react";
import { motion } from "framer-motion";

function Sponsers() {
  const titleText = "Our   Sponsers";
  const letters = Array.from(titleText);
  const letterAnimation = (index) => ({
    y: [0, -15, 0], // Move up and down
    transition: {
      delay: index * 0.2, // Staggered delay for each letter
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  return (
    <div className="mt-28">
      <h1 className="font-bold w-full text-center mt-28 space-x-2 text-4xl text-white">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={letterAnimation(index)} // Apply animation with staggered delay
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      {/* <div className="grid grid-cols-12 mx-36">
        <div className="colspan-4 bg-green-300">
            <img className="w-100 h-100" src="https://picsum.photos/400" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default Sponsers;
