import React from "react";
import { motion } from "framer-motion";
import GuestLectureCards from "./Components/GuestLectureCards";
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
          description:
            "The School of Building & Mechanical Sciences at KSRCT focuses on engineering excellence, innovation, and hands-on learning in mechanical, mechatronics, and civil engineering.",
          image: mech,
          facultyCoordinators: ["Dr. A. Murugesan"],
          studentCoordinators: ["John Doe", "Jane Smith"]
        },
      ],
    },
    {
      lectures: [
        {
          name: "Technology",
          description:
            "The School of Life Sciences at KSRCT offers specialized programs in Textile Technology, Biotechnology, and Food Technology.",
          image: is,
          facultyCoordinators: ["Dr. B. Kalpana"],
          studentCoordinators: ["Alice Johnson", "Bob Williams"]
        },
      ],
    },
    {
      lectures: [
        {
          name: "Engineering",
          description:
            "The School of Electrical Sciences at KSRCT offers cutting-edge programs in Electrical & Electronics Engineering (EEE), Electronics & Communication Engineering (ECE), and Electronics Engineering (VLSI Design and Technology).",
          image: els,
          facultyCoordinators: ["Dr. G. Vijaya Gowri"],
          studentCoordinators: ["Charlie Brown", "David Lee"]
        },
      ],
    },
    {
      lectures: [
        {
          name: "Mathematics (NCISTEM)",
          description:
            "The School of Computer Sciences at KSRCT offers programs in Computer Science and Engineering, Information Technology, and AI-driven fields.",
          image: cs,
          facultyCoordinators: ["Dr. S. Madhavi"],
          studentCoordinators: ["Eve Adams", "Frank Miller"]
        },
      ],
    },
  ];


  return (
    <div className="my-24">
      {/* Single Global Title at the Top */}
      <h1
        className="text-center font-bold text-white md:text-5xl text-3xl mt-0 mb-12 md:mt-8"
        data-aos="fade-down"
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
                <GuestLectureCards {...lecture} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestLecture;
