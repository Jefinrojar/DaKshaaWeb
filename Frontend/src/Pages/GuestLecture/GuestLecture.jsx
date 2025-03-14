import React from "react";
import { motion } from "framer-motion";
import GuestLectureCard from "./Components/GuestLectureCards";
import cs from "../../assets/conference/3.png";
import mech from "../../assets/conference/1.png";
import els from "../../assets/conference/4.png";
import is from "../../assets/conference/2.png";

const GuestLecture = () => {
  const title = "Conference"; // Page top title

  const frames = [
    {
      lectures: [
        {
          name: "National Conference on Mechanical automation & building science",
          description:
            "The School of Building & Mechanical Sciences at KSRCT focuses on engineering excellence, innovation, and hands-on learning in mechanical, mechatronics, and civil engineering. It offers state-of-the-art facilities, an industry-driven curriculum, and advanced research opportunities. Mechanical engineering emphasizes design, manufacturing, robotics, and aerospace; mechatronics integrates mechanical, electronics, and computing for AI-driven automation and Industry 4.0; civil engineering specializes in sustainable infrastructure and smart cities. With cutting-edge labs, strong industry partnerships, and a practical learning approach, KSRCT ensures students excel in automotive, aerospace, robotics, and construction sectors, preparing them for global career opportunities.",
          image: mech,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Technology",
          image: is,
        },
      ],
    },
    {
      lectures: [
        {
          name: "National Conference on Advancements in Semiconductor Technologies, Intelligent systems and Power Engineering (ASTIPE 2025)",
          image: els,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Applications of Artificial intelligence and  Cybersecurity",
          image: cs,
        },
      ],
    },
  ];

  return (
    <div className="my-24">
      {/* Conference Title at the Top */}
      <h1
        className="text-center font-bold text-white md:text-5xl text-3xl mt-0 mb-12 md:mt-8"
        data-aos="fade-down" // AOS animation
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

      {/* NCISTEM Title & Subtitle Below Conference Title */}
      <div className="text-center  bg-opacity-70 text-white py-6 px-6 shadow-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">NCISTEMM</h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-lg font-semibold">
          NATIONAL CONFERENCE ON INNOVATIONS IN SCIENCE, TECHNOLOGY, ENGINEERING, MATHEMATICS, AND MEDICINE
        </p>
      </div>

      {/* Frames with Lecture Cards */}
      {frames.map((frame, frameIndex) => (
        <div key={frameIndex} className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {frame.lectures.map((lecture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GuestLectureCard {...lecture} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestLecture;
