import React from "react";
import { motion } from "framer-motion";
import abb from "./assets/abb.png";
import aiml from "./assets/aiml.jpg";
import civil from "./assets/civil.jpg";
import csbs from "./assets/csbs.avif";
import ft from "./assets/ft.jpg";
import garuda from "./assets/garuda.jpg";
import ict from "./assets/ict.jpg";
import infinity from "./assets/infinity.jpg";
import it from "./assets/it.png";
import mech from "./assets/mech.jpg";
import millet from "./assets/millet.jpg";
import txt from "./assets/txt.jpg";
import uipath from "./assets/uipath.jpg";
import vlsi from "./assets/vlsi.jpg";

function Sponsors() {
  const eventSponsors = [abb];
  const workshopSponsors = [aiml, civil, csbs, ft, it, mech, txt, ict, millet, infinity, garuda, uipath, vlsi];
  const letter = "Sponsors";
  const letters = letter.split("");

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
    scale: 1,
    rotateY: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.8,
      ease: "easeInOut",
    },
  });

  return (
    <div className="mt-16 text-white min-h-screen flex flex-col items-center py-10 px-4 sm:px-8 lg:px-16 space-y-16">
      <h1 className="font-bold text-center text-3xl">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={letterAnimation(index)}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* Event Sponsors Section */}
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold mb-6">Event Sponsors</h2>
        <div className="flex justify-center items-center">
          {eventSponsors.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={cardEntryAnimation(index)}
              whileHover={{ scale: 1.15, rotateY: 5 }}
              className="shadow-lg flex justify-center items-center bg-gray-800 w-48 h-48 rounded-lg border-2 border-sky-500 shadow-sky-500"
            >
              <img className="w-40 h-40 object-contain rounded-lg" src={image} alt={`Event Sponsor ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>


      {/* Workshop Sponsors Section */}
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold m-10">Workshop Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 place-items-center">
          {workshopSponsors.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={cardEntryAnimation(index)}
              whileHover={{ scale: 1.15, rotateY: 5 }}
              className="shadow-lg flex justify-center items-center bg-gray-800 w-48 h-48 rounded-lg border-2 border-sky-500 shadow-sky-500"
            >
              <img className="w-40 h-40 object-contain rounded-lg" src={image} alt={`Workshop Sponsor ${index + 1}`} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Sponsors;
