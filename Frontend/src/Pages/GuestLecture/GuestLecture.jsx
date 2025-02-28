import React from "react";
import { motion } from "framer-motion";
import GuestLectureCard from "./Components/GuestLectureCards";
import photo1 from "../../assets/conference/builders.png";
import photo2 from "../../assets/conference/LS.png";
import photo3 from "../../assets/conference/ES.png"
import photo4 from "../../assets/conference/CSE.png";

const GuestLecture = () => {
  const title = "Conference"; // Single title at the top

  const frames = [
    {
      lectures: [
        {
          name: "Building & Mechanical Science",
          // title: "Founder of Thyrocare Technologies Ltd",
          description: "The School of Building & Mechanical Sciences at KSRCT focuses on engineering excellence, innovation, and hands-on learning in mechanical, mechatronics, and civil engineering. It offers state-of-the-art facilities, an industry-driven curriculum, and advanced research opportunities. Mechanical engineering emphasizes design, manufacturing, robotics, and aerospace; mechatronics integrates mechanical, electronics, and computing for AI-driven automation and Industry 4.0; civil engineering specializes in sustainable infrastructure and smart cities. With cutting-edge labs, strong industry partnerships, and a practical learning approach, KSRCT ensures students excel in automotive, aerospace, robotics, and construction sectors, preparing them for global career opportunities.",
          image: photo1,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Life Science",
          // title: "CEO of Alphabet & Google",
          image: photo2,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Electrical Sciences",
          // title: "Former President of India",
          image: photo3,
        },
      ],
    },
    {
      lectures: [
        {
          name: "Computer Sciences",
          // title: "CEO of Tesla & SpaceX",
          image: photo4,
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
