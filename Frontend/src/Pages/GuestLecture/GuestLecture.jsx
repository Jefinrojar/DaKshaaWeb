import React from "react";
import { motion } from "framer-motion";
import GuestLectureCard from "./Components/GuestLectureCards";
import cs from "../../assets/conference/3.png";
import mech from "../../assets/conference/1.png";
import els from "../../assets/conference/4.png";
import is from "../../assets/conference/2.png";


const GuestLecture = () => {
  const title = "Conference"; // Single title at the top

  const frames = [
    {
      lectures: [
        {
          name: "National Conference on Innovations in Science",
          // title: "Founder of Thyrocare Technologies Ltd",
          description: "The School of Building & Mechanical Sciences at KSRCT focuses on engineering excellence, innovation, and hands-on learning in mechanical, mechatronics, and civil engineering. It offers state-of-the-art facilities, an industry-driven curriculum, and advanced research opportunities. Mechanical engineering emphasizes design, manufacturing, robotics, and aerospace; mechatronics integrates mechanical, electronics, and computing for AI-driven automation and Industry 4.0; civil engineering specializes in sustainable infrastructure and smart cities. With cutting-edge labs, strong industry partnerships, and a practical learning approach, KSRCT ensures students excel in automotive, aerospace, robotics, and construction sectors, preparing them for global career opportunities.",
          image: mech,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Technology",
          // title: "CEO of Alphabet & Google",
          image: is,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Engineering",
          // title: "Former President of India",
          image: els,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Mathematics (NCISTEM)",
          // title: "CEO of Tesla & SpaceX",
          image: cs,
        },
      ],
    },
  ];

  return (
    <div className="my-24">
      {/* Single Global Title at the Top */}
      <h1
              className="text-center font-bold text-white md:text-5xl text-3xl mt-0 mb-12 md:mt-8"
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
