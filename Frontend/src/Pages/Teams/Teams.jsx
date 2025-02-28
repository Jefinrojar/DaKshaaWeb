import React from "react";
import TeamMembers from "./Components/TeamMembers"// Ensure correct path
import { motion } from "framer-motion";

function Teams() {

  const title = "Our"
  const title2 = "Teams"
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/70 grid place-items-center mt-28 md:mt-28 md:mx-20">
      <h1
        className="text-center font-bold text-white md:text-5xl text-3xl mt-0 md:mt-8 md:mb-12"
        data-aos="fade-down" // Add AOS animation
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))} &nbsp;
        {title2.split("").map((char, index) => (
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
      < TeamMembers/>
    </div>


  );
}

export default Teams;