import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import startuptn from "../../../assets/startup/logo.png";
import member1 from "../../../assets/startup/panelMember1.jpg";
import member2 from "../../../assets/startup/panelMember2.jpg";

function StartupSection() {
  const title1 = "Idea's";
  const title2 = "Elevator";
  const title3 = "Pitching";
  const title4 = "Contest";

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for other animations
  }, []);

  // Framer Motion variants for the load animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cards = [
    {
      id: 1,
      image: member1, // Placeholder image
      title: "Dr. N. Thiruvenkadam",
      text: "Department of Mechatronics",
    },
    {
      id: 2,
      image: member2, // Placeholder image
      title: "Dr. B. Mythili Gnanamangai",
      text: "Department of Biotechnology",
    },
    {
      id: 3,
      image: "https://png.pngtree.com/png-clipart/20220916/ourmid/pngtree-coming-soon-banner-png-image_6177419.png", // Placeholder image
      title: "Person 3",
      text: "Coming soon!",
    },
    {
      id: 4,
      image: "https://png.pngtree.com/png-clipart/20220916/ourmid/pngtree-coming-soon-banner-png-image_6177419.png", // Placeholder image
      title: "Person 4",
      text: "Coming soon!",
    },
  ];

  return (
    <motion.div
      className="text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures the animation only plays once
      variants={containerVariants}
    >
      <h1
        className="text-center font-bold text-white md:text-4xl text-3xl mt-0 md:mt-8"
        data-aos="fade-down" // AOS animation for the title
      >
        {title1.split("").map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        &nbsp;
        {title2.split("").map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        &nbsp;
        {title3.split("").map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        &nbsp;
        {title4.split("").map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* Startup Tamil Nadu Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-16 gap-8">
        <div className="md:col-span-4 flex flex-col items-center md:items-start justify-center">
          <div className="relative inline-block mb-4 md:mb-12">
            <img
              src={startuptn}
              alt=""
              className="border-none bg-white p-4 w-44 md:w-72"
            />
            <div className="absolute -top-4 -left-4 w-1/5 h-1/5 border-t-2 border-l-2 border-sky-900"></div>
            <div className="absolute -bottom-4 -right-4 w-1/5 h-1/5 border-b-2 border-r-2 border-sky-900"></div>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col items-center text-center md:text-left justify-center md:items-start mb-8">
          <div className="p-2 border border-sky-800 w-full">
            <p className="bg-sky-900/30 p-6 clip-bottom-right">
              StartupTN, in collaboration with K.S. Rangasamy College of
              Technology, proudly presents the Idea Elevator Pitching Contest as
              part of DaKshaa T25. This prestigious event serves as a dynamic
              platform for aspiring students to showcase their groundbreaking
              ideas in a fast-paced and impactful setting. As a parallel session
              of the Global Startup Meet, the contest brings together visionary
              minds, industry leaders, and investors, fostering an environment
              of innovation, collaboration, and entrepreneurial excellence.
              Participants will have the opportunity to pitch their ideas,
              receive valuable insights from experts, and gain exposure to
              potential funding and mentorship opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row justify-center my-10 mx-10 gap-10">
        {["Prize", "Panel", "Eligibility", "Rules", "Schedule"].map(
          (item, index) => (
            <motion.div
              key={index}
              className="border-2 border-sky-900 cursor-default p-1"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="bg-sky-900 px-4 md:px-10 py-3 text-sky-300 bg-opacity-80 clip-bottom-right-2">
                {item}
              </h1>
            </motion.div>
          )
        )}
      </div>

      {/* Prize pool */}
      <div className="border border-sky-800 p-2 mb-5">
        <div className="border border-sky-800 shadow-lg p-4 md:p-10">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">
            Prize Pool
          </h2>

          {/* Prize List */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            {/* 1st Prize */}
            <div className="flex flex-col items-center bg-sky-900/30 border border-sky-800 p-6 rounded-lg w-64 shadow-md">
              <span className="text-2xl font-bold text-yellow-400">
                🥇 1st Prize
              </span>
              <span className="text-3xl font-semibold text-white mt-2">
                ₹10,000
              </span>
            </div>

            {/* 2nd Prize */}
            <div className="flex flex-col items-center bg-sky-900/30 border border-sky-800 p-6 rounded-lg w-64 shadow-md">
              <span className="text-2xl font-bold text-gray-300">
                🥈 2nd Prize
              </span>
              <span className="text-3xl font-semibold text-white mt-2">
                ₹7,000
              </span>
            </div>

            {/* 3rd Prize */}
            <div className="flex flex-col items-center bg-sky-900/30 border border-sky-800 p-6 rounded-lg w-64 shadow-md">
              <span className="text-2xl font-bold text-orange-400">
                🥉 3rd Prize
              </span>
              <span className="text-3xl font-semibold text-white mt-2">
                ₹5,000
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel */}
      <div className="border border-sky-800 p-2 mb-5">
        <div className="border border-sky-800 shadow-lg p-4 md:p-10">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">
            Panel
          </h2>

          {/* Grid Layout - Always 2 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative group cursor-pointer overflow-hidden duration-500 
                     w-full max-w-xs mx-auto bg-sky-900 
                     bg-opacity-30 border border-sky-900 text-gray-50 p-5 pb-10"
              >
                {/* Square Image */}
                <div className="w-full aspect-square">
                  <img
                    src={card.image}
                    alt="Icon"
                    className="group-hover:scale-105 w-full h-full object-cover duration-500"
                  />
                </div>

                {/* Hover Text Effect */}
                <div className="absolute w-full left-0 p-5 -bottom-10 duration-500 group-hover:-translate-y-14">
                  <div className="absolute -z-10 left-0 w-full h-24 sm:h-32 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />
                  <span className="text-lg sm:text-xl font-bold block">
                    {card.title}
                  </span>
                  <p className="group-hover:opacity-100 w-full duration-500 opacity-0 text-sm sm:text-base leading-5">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility */}
      <div className="border border-sky-800 p-2 mb-5">
        <div className="border border-sky-800 shadow-lg p-4 md:p-10">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">
            Eligibility
          </h2>
          <div className="flex flex-col mx-10 gap-7">
            {/* <h1 className="font-semibold text-xl md:text-2xl text-sky-600"></h1> */}
            <ul className="list-disc">
              <li className="text-lg md:text-xl text-sky-300">
                UG Students from any college across India are eligible to pitch
                their ideas in this contest
              </li>
              <li className="text-lg md:text-xl text-sky-300">
              Student Entrepreneurs only
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="border border-sky-800 p-2 mb-5">
        <div className="border border-sky-800 shadow-lg p-4 md:p-10">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-5 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">
            Rules
          </h2>
          <div className="flex flex-col items-start mx-10 gap-7">
            <ul className="list-disc">
              <li className="text-lg md:text-xl text-sky-300">
                Individuals or teams (consisting of one to five members) will
                have five minutes to present their innovative business idea to a
                panel of judges. The evaluation will be based on the strength
                and feasibility of the idea.
              </li>
              <li className="text-lg md:text-xl text-sky-300">
                Participants are encouraged to use slides, visual aids, or
                prototypes to enhance their pitch.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="border border-sky-800 p-2 mt-6">
        <div className="p-4 md:p-10">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 text-sky-600 border border-sky-800 bg-sky-900/30 px-3 py-3">
            Schedule
          </h2>

          <div className="border-gray-300 pb-2 mb-2">
            <button className="flex justify-between items-center w-full text-lg md:text-xl font-medium p-3 border border-sky-800 text-sky-500 bg-sky-900">
              Venue and Timing
            </button>
            <div className="mt-2 p-3 border border-sky-900 bg-transparent text-gray-300">
              <p className="text-base md:text-lg">Date: 28th March 2025</p>
              <p className="text-base md:text-lg">Time: 10:00 AM - 4:00 PM</p>
              <p className="text-base md:text-lg">Location: Yet to Announce!</p>
            </div>
          </div>

          {/* <div className="border-gray-300 pb-2 mb-2">
            <button className="flex justify-between items-center w-full text-lg md:text-xl font-medium p-3 border border-sky-800 text-sky-500 bg-sky-900">
              Round 2
            </button>
            <div className="mt-2 p-3 border border-sky-900 bg-transparent text-gray-300">
              <p className="text-base md:text-lg">Date: 16th March 2025</p>
              <p className="text-base md:text-lg">Time: 2:00 PM - 4:00 PM</p>
              <p className="text-base md:text-lg">Location: Seminar Hall</p>
            </div>
          </div>

          <div className="border-gray-300 pb-2 mb-2">
            <button className="flex justify-between items-center w-full text-lg md:text-xl font-medium p-3 border border-sky-800 text-sky-500 bg-sky-900">
              Final Round
            </button>
            <div className="mt-2 p-3 border border-sky-900 bg-transparent text-gray-300">
              <p className="text-base md:text-lg">Date: 17th March 2025</p>
              <p className="text-base md:text-lg">Time: 5:00 PM - 7:00 PM</p>
              <p className="text-base md:text-lg">Location: Main Stage</p>
            </div>
          </div> */}
        </div>
      </div>

      

      
      <div className="w-full my-10 flex items-center justify-center">
        <button
          className="px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-xl shadow-xl"
          onClick={() => window.open("https://unstop.com/o/ynkQAT9?utm_medium=Share&utm_source=shortUrl", "_blank")}
        >
          REGISTER NOW!
        </button>
      </div>
    </motion.div>
  );
}

export default StartupSection;
