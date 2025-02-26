import React from "react";
import { motion } from "framer-motion";

function Sponsors() {
  const title = "Sponsors";
  // const letters = Array.from(title);
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
      <h1 className="text-center font-bold text-white text-5xl mb-10 mt-8">
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  style={{ display: "inline-block" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                >
                  {char}
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

export default Sponsors;