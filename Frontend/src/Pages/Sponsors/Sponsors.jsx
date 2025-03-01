import React from "react";
import { motion } from "framer-motion";
import abb from "./assets/abb.png";
import unstop from "./assets/unstop.png";

import aiml from "./assets/aiml.jpg";
import civil from "./assets/civil.jpg";
import csbs from "./assets/csbs.avif";
import garuda from "./assets/garuda.jpg";
import infinity from "./assets/infinity.jpg";
import it from "./assets/it.png";
import mech from "./assets/mech.jpg";
import millet from "./assets/millet.jpg";
import txt from "./assets/txt.jpg";
import uipath from "./assets/uipath.jpg";
import vlsi from "./assets/vlsi.jpg";
import cse from "./assets/cse.jpg";
import bt from "./assets/bt.jpeg";

function Sponsors() {
  const eventSponsors = [abb, unstop];
  const workshopSponsors = [aiml, civil, csbs, it, cse, mech, txt, millet, infinity, garuda, uipath, vlsi, bt];
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

      {/* Event Partner Section */}
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold mb-10">Event Partner</h2>
        <div className="flex justify-center items-center gap-24 ">
          {eventSponsors.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={cardEntryAnimation(index)}
              whileHover={{ scale: 1.15, rotateY: 5 }}
              className="shadow-lg flex justify-center items-center bg-gray-800 w-48 h-48 rounded-lg border-2 border-sky-500 shadow-sky-500"
            >
              <img className="w-40 h-40 object-contain rounded-lg" src={image} alt={`Event Partner ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Co-Partner Section */}
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold m-10">Co-Partner</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 place-items-center">
          {workshopSponsors.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={cardEntryAnimation(index)}
              whileHover={{ scale: 1.15, rotateY: 5 }}
              className="shadow-lg flex justify-center items-center bg-gray-800 w-48 h-48 rounded-lg border-2 border-sky-500 shadow-sky-500"
            >
              <img className="w-40 h-40 object-contain rounded-lg" src={image} alt={`Co-Partner ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
