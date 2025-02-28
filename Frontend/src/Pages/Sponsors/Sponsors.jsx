import React from "react";
import { motion } from "framer-motion";
import aspire from "./assets/aspirenew.png";
import vuam from "./assets/vuam.jpg";
import iamneo from "./assets/iamneo.jpg";
import milki from "./assets/milki.png";
import ict from "./assets/ict.jpg";
import pepul from "./assets/pepul.jpg";
import code from "./assets/code.jpg";
import mathwork from "./assets/mathwork.jpg";
import nanotech from "./assets/nanotech.jpg";
import str from "./assets/str.jpg";
import millet from "./assets/millet.jpg";
import veitech from "./assets/veitech.jpg";
import vvdn from "./assets/vvdn.jpg";
import infinity from "./assets/infinity.jpg";
import auto from "./assets/auto.jpg";
import garuda from "./assets/garuda.jpg";
import m2n from "./assets/m2n.jpg";
import bio from "./assets/bio.jpg";
import uipath from "./assets/uipath.jpg";
import titsc from "./assets/titsc.png";

function Sponsors() {
  const eventSponsors = [aspire];
  const technology = [vuam, iamneo, milki, ict, pepul, code];
  const workshopSponsors = [
    mathwork,
    nanotech,
    str,
    millet,
    veitech,
    vvdn,
    infinity,
    auto,
    garuda,
    m2n,
    bio,
    uipath,
    titsc,
  ];
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
              <img
                className="w-40 h-40 object-contain rounded-lg"
                src={image}
                alt={`Event Sponsor ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Sponsors Section */}
      <div className="text-center w-full">
        <h2 className="text-2xl font-bold mb-6">Technology Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 place-items-center">
          {technology.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={cardEntryAnimation(index)}
              whileHover={{ scale: 1.15, rotateY: 5 }}
              className="shadow-lg flex justify-center items-center bg-gray-800 w-48 h-48 rounded-lg border-2 border-sky-500 shadow-sky-500"
            >
              <img
                className="w-40 h-40 object-contain rounded-lg"
                src={image}
                alt={`Technology Sponsor ${index + 1}`}
              />
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
              <img
                className="w-40 h-40 object-contain rounded-lg"
                src={image}
                alt={`Workshop Sponsor ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
