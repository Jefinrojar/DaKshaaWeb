import React from 'react';
import Photo1 from "../../../assets/photo1.png";
import Photo2 from "../../../assets/photo2.jpg";
import Photo3 from "../../../assets/photo3.jpg";
import Photo4 from "../../../assets/photo4.jpg";

import { motion } from 'framer-motion';

const Card = () => {
  const cards = [
    { id: 1, image: Photo1, title: "Mastro Mania", text: "Musicians performing with musical instruments." },
    { id: 2, image: Photo2, title: "Musical Mavericks", text: "Solo singing is a Individual vocal performance with expression." },
    { id: 3, image: Photo3, title: "Beat Battle", text: "Synchronized dance performance by group." },
    { id: 4, image: Photo4, title: "Hashtag Hilarity", text: "Meme Creation-Humorous digital content with creativity." },
  ];

  const title = "Harmonics";

  return (
    <div className="p-6 sm:p-8 md:p-10">

      <h1 className="text-center font-bold text-white text-4xl sm:text-5xl mb-8 sm:mb-10 mt-20 sm:mt-[10px] md:mt-14">

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
      <button
        className="mb-8 w-80 md:ml-[600px] md:w-auto md:mt-5 px-6 py-3 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-2xl shadow-xl"
        onClick={() => window.open("www.google.com", "_blank")} // Open registration link in a new tab
      >
        REGISTER NOW!
      </button>

      {/* Grid Layout - 3 Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16 justify-center px-4 sm:px-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group cursor-pointer overflow-hidden duration-500 
                       w-full sm:w-64 md:w-72 lg:w-80 h-80 sm:h-96 bg-sky-900 
                       bg-opacity-30 border border-sky-900 text-gray-50 p-5"
          >
            <img src={card.image} alt="Icon" className="group-hover:scale-110 w-full h-56 sm:h-72 duration-500" />
            <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-full h-24 sm:h-32 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />
              <span className="text-lg sm:text-xl font-bold">{card.title}</span>
              <p className="group-hover:opacity-100 w-full duration-500 opacity-0">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
