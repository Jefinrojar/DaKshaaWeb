import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import startuptn from "../../../assets/startup/startuptn.jpg";
import tnrise from "../../../assets/startup/tnrise.png";
import isua from "../../../assets/startup/isua.jpg";

function StartupSection() {
  const title = "Startups";

  return (
    <div className="text-white">
      <h1
        className="text-center font-bold text-white md:text-5xl text-3xl mt-0 md:mt-8"
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
        ))}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 mt-16 mx-0 md:mx-20 gap-8">
        {/* Startup Tamil Nadu Section */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start">
          <div className="relative inline-block mb-4 md:mb-12">
            <img src={startuptn} alt="" className="border-none w-44 md:w-56" />
            <div className="absolute -top-4 -left-4 w-1/5 h-1/5 border-t-2 border-l-2 border-sky-900"></div>
            <div className="absolute -bottom-4 -right-4 w-1/5 h-1/5 border-b-2 border-r-2 border-sky-900"></div>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col items-center text-center md:text-left justify-center md:items-start mb-8">
          <div className="p-2 border border-sky-800 w-full">
            <p className="bg-sky-900/30 p-6 clip-bottom-right">
              Startup Tamil Nadu (StartupTN) is an initiative by the Government
              of Tamil Nadu to foster a thriving startup ecosystem in the state.
              Launched to support aspiring entrepreneurs, StartupTN provides
              funding, mentorship, incubation, networking opportunities, and
              policy support to innovative startups across various sectors.
              <button
                className="mb-8 w-full md:w-auto md:mt-5 px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                onClick={() => window.open("www.google.com", "_blank")} // Open registration link in a new tab
              >
                REGISTER NOW!
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8 mx-0 md:mx-20 gap-8">
        {/* TN Rise Section */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end order-1 md:order-2">
          <div className="relative inline-block mb-4 md:mb-12">
            <img src={tnrise} alt="" className="border-none w-44 md:w-56" />
            <div className="absolute -top-4 -left-4 w-1/5 h-1/5 border-t-2 border-l-2 border-sky-900"></div>
            <div className="absolute -bottom-4 -right-4 w-1/5 h-1/5 border-b-2 border-r-2 border-sky-900"></div>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col items-center justify-center text-center md:text-left md:items-start order-2 md:order-1 mb-20 md:mb-0">
          <div className="p-2 border border-sky-800 w-full">
            <p className="bg-sky-900/30 p-6 clip-bottom-left">
              TN Rise is an initiative by the Government of Tamil Nadu to
              support rural entrepreneurs and women-led startups by providing
              them with the necessary resources, mentorship, and financial
              assistance. The program aims to bridge the gap between urban and
              rural entrepreneurship by fostering innovation in smaller towns
              and villages.
              <button
                className="mb-8  w-full md:w-auto md:mt-5 px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                onClick={() => window.open("www.google.com", "_blank")} // Open registration link in a new tab
              >
                REGISTER NOW!
              </button>
            </p>


          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8 mx-0 mb-12 md:mx-20 gap-8">
        {/* ISUA Section */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start">
          <div className="relative inline-block mb-4 md:mb-12">
            <img src={isua} alt="" className="border-none w-44 md:w-56" />
            <div className="absolute -top-4 -left-4 w-1/5 h-1/5 border-t-2 border-l-2 border-sky-900"></div>
            <div className="absolute -bottom-4 -right-4 w-1/5 h-1/5 border-b-2 border-r-2 border-sky-900"></div>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col items-center justify-center text-center md:text-left md:items-start mb-8">
          <div className="p-2 border border-sky-800 w-full">
            <p className="bg-sky-900/30 p-6 clip-bottom-right">
              ISUA is a non-profit organization that supports startups,
              entrepreneurs, and small businesses across India. It aims to
              create a strong ecosystem for startups by providing resources,
              mentorship, networking opportunities, and funding support.
              <button
                className="mb-8 w-full md:w-auto md:mt-5 px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
                onClick={() => window.open("www.google.com", "_blank")} // Open registration link in a new tab
              >
                REGISTER NOW!
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupSection;
