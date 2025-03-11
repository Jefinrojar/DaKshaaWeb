import React from "react";
import { motion } from "framer-motion";

const GuestLectureCards = ({ name, description, image, facultyCoordinators, studentCoordinators }) => {
  return (
    <motion.div
      className="p-3 border border-sky-800 mx-auto max-w-full"
      whileHover={{ scale: 1.05 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="bg-sky-900 bg-opacity-40 p-4 sm:p-6 shadow-lg text-white text-center clip-bottom-right w-full md:w-[1000px] md:h-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="border border-sky-800 w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="p-4 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{name}</h2>

            {/* Description */}
            <p className="text-justify mt-3 text-sm sm:text-base">{description}</p>

            {/* Faculty Coordinators */}
            {facultyCoordinators.length > 0 && (
              <p className="mt-3 text-sm sm:text-base font-semibold text-gray-300">
                <span className="text-white">Faculty Coordinators:</span>{" "}
                {facultyCoordinators.join(", ")}
              </p>
            )}

            {/* Student Coordinators */}
            {studentCoordinators.length > 0 && (
              <p className="mt-1 text-sm sm:text-base font-semibold text-gray-300">
                <span className="text-white">Student Coordinators:</span>{" "}
                {studentCoordinators.join(", ")}
              </p>
            )}

            {/* Register Button */}
            <button
              className="mt-5 px-6 py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl shadow-xl"
              onClick={() => window.open("www.google.com", "_blank")} // Open registration link in a new tab
            >
              REGISTER NOW!
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GuestLectureCards;
