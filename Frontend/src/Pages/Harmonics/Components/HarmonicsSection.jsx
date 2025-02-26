import React from 'react';
import Photo1 from "../../../assets/photo1.jpg";
import Photo2 from "../../../assets/photo2.jpg";
import Photo3 from "../../../assets/photo3.jpg";
import Photo4 from "../../../assets/photo4.jpg";
import Photo5 from "../../../assets/photo5.jpg";
import Photo6 from "../../../assets/photo6.jpg";
import Photo7 from "../../../assets/photo7.jpg";
import Photo8 from "../../../assets/photo8.jpg";

import { motion } from 'framer-motion';

const Card = () => {
  const cards = [
    { id: 1, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, image: Photo2, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, image: Photo3, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, image: Photo4, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, image: Photo5, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, image: Photo6, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, image: Photo7, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, image: Photo8, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },

  ];

  const title = "Harmonics";

  return (
    <div className="p-28">
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
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card) => (
          <div key={card.id} className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-sky-900 bg-opacity-30 border border-sky-900 text-gray-50 p-5">
            <img src={card.image} alt="Icon" className="group-hover:scale-110 w-full h-60 duration-500" />
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />
              <span className="text-xl font-bold">{card.title}</span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

