import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dance from "../../../assets/HORMONICS/SOLO DANCE.png";
import group from "../../../assets/HORMONICS/GROUP.png";
import instruments from "../../../assets/HORMONICS/INSTRUMENT.png";
import musical from "../../../assets/HORMONICS/MUSICAL.png";
import shortFilm from "../../../assets/HORMONICS/short flim.png"
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    { id: 1, image: instruments, title: "Mastro Mania", text: "Musicians performing with musical instruments.", fee: "Registration Fee: 150", link: "/event/culturals-event-2" },
    { id: 2, image: musical, title: "Musical Mavericks", text: "Solo singing is an individual vocal performance with expression.", fee: "Registration Fee: 150", link: "/event/culturals-event-1" },
    { id: 3, image: group, title: "Beat Battle", text: "Synchronized dance performance by group.",fee: "Registration Fee: 600", link: "/event/culturals-event-3" },
    { id: 4, image: dance, title: "Spotlight Stepper", text: "Solo dance is expressive, graceful, and captivating.", fee: "Registration Fee: 150", link: "/event/culturals-event-4" },
    { id: 5, image: shortFilm, title: "Short Film", text: "A single moment can change a lifetime, shaping destiny in unexpected ways.", fee: "Registration Fee: 150", link: "/event/culturals-event-5" },
  ];

  const title = "Harmonicks";

  return (
    <div className="p-6 sm:p-8 md:p-10">
      <h1
        className="text-center font-bold text-white text-4xl sm:text-5xl mb-8 sm:mb-10 mt-20 sm:mt-[10px] md:mt-14"
        data-aos="fade-up"
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

      {/* Grid Layout - 3 Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16 justify-center px-4 sm:px-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative group cursor-pointer overflow-hidden duration-500 
                       w-full sm:w-64 md:w-72 lg:w-80 h-80 sm:h-96 bg-sky-900 
                       bg-opacity-30 border border-sky-900 text-gray-50 p-5"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            onClick={()=>navigate(card.link)}
          >
            <img
              src={card.image}
              alt="Icon"
              className="group-hover:scale-110 w-full h-56 sm:h-72 duration-500"
            />
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
};

export default Card;