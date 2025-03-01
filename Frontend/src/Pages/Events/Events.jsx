
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import TechnicalImage from "../../assets/EventsImages/technical.png";
import NonTechnicalImage from "../../assets/EventsImages/non-technical.png";
import Cultural from "../../assets/EventsImages/culturals.jpg";
import Workshop from "../../assets/EventsImages/workshop.jpg";
import Tech2 from "../../assets/EventsImages/EventDetails/TechnicalImages/Ai.png"
import Tech3 from "../../assets/EventsImages/EventDetails/TechnicalImages/Ai2.png"
import Tech5 from "../../assets/EventsImages/EventDetails/TechnicalImages/buildthon.png"
import Tech6 from "../../assets/EventsImages/EventDetails/TechnicalImages/codathon.png"
import Tech7 from "../../assets/EventsImages/EventDetails/TechnicalImages/cse.png"
import Tech8 from "../../assets/EventsImages/EventDetails/TechnicalImages/DESIGNATHON.png"
import Tech9 from "../../assets/EventsImages/EventDetails/TechnicalImages/ELECTROBUZZ.png"
import Tech10 from "../../assets/EventsImages/EventDetails/TechnicalImages/figma.png"
import Tech11 from "../../assets/EventsImages/EventDetails/TechnicalImages/ft.png"
import Tech12 from "../../assets/EventsImages/EventDetails/TechnicalImages/mct.png"
import Tech13 from "../../assets/EventsImages/EventDetails/TechnicalImages/mech.png"
import Tech14 from "../../assets/EventsImages/EventDetails/TechnicalImages/pitch.png"
import Tech15 from "../../assets/EventsImages/EventDetails/TechnicalImages/tex.png"
import Tech16 from "../../assets/EventsImages/EventDetails/TechnicalImages/Ai4.png"
import Tech17 from "../../assets/EventsImages/EventDetails/TechnicalImages/VLSI.png"

import Nontech1 from "../../assets/EventsImages/EventDetails/Nontech/ComputerScienceandBusinessSystem.png"
import Nontech2 from "../../assets/EventsImages/EventDetails/Nontech/ComputerScienceandEngineering.png"
import Nontech3 from "../../assets/EventsImages/EventDetails/Nontech/ElectricalandElectronicsEngineering.png"
import Nontech4 from "../../assets/EventsImages/EventDetails/Nontech/MechanicalEngineering.png"
import Nontech5 from "../../assets/EventsImages/EventDetails/Nontech/TextileTechnology.png"
import Nontech6 from "../../assets/EventsImages/EventDetails/Nontech/AIDS.png"
import Nontech7 from "../../assets/EventsImages/EventDetails/Nontech/BT.png"
import workshop1 from "../../assets/EventsImages/EventDetails/Workshop/CSE.png"
import workshop2 from "../../assets/EventsImages/EventDetails/Workshop/EEE.png"
import workshop3 from "../../assets/EventsImages/EventDetails/Workshop/IT.jpg"
import workshop4 from "../../assets/EventsImages/EventDetails/Workshop/MCT.png"
import workshop5 from "../../assets/EventsImages/EventDetails/Workshop/TXT.png"

import Culturals1 from "../../assets/photo1.jpg"
import Culturals2 from "../../assets/photo2.jpg"
import Culturals3 from "../../assets/photo3.jpg"
import Culturals4 from "../../assets/photo4.jpg"

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      image: TechnicalImage,
      name: "Technical Events",
      descriptionImages: [
        {
          image: Tech2,
          eventId: "technical-event-13",
        },
        {
          image: Tech3,
          eventId: "technical-event-12",
        },
        {
          image: Tech5,
          eventId: "technical-event-5",
        },
        {
          image: Tech6,
          eventId: "technical-event-14",
        },
        {
          image: Tech7,
          eventId: "technical-event-1",
        },
        {
          image: Tech8,
          eventId: "technical-event-10",
        },
        {
          image: Tech9,
          eventId: "technical-event-7",
        },
        {
          image: Tech10,
          eventId: "technical-event-6",
        },
        {
          image: Tech11,
          eventId: "technical-event-8",
        },
        {
          image: Tech12,
          eventId: "technical-event-5",
        },
        {
          image: Tech14,
          eventId: "technical-event-4",
        },
        {
          image: Tech15,
          eventId: "technical-event-15",
        },
        {
          image: Tech17,
          eventId: "technical-event-3",
        },
      ],
    },
    {
      id: 2,
      image: NonTechnicalImage,
      name: "Non-Technical Events",
      descriptionImages: [
        {
          image: Nontech1,
          eventId: "non-technical-event-6",
        },
        {
          image: Nontech2,
          eventId: "non-technical-event-1",
        },
        {
          image: Nontech3,
          eventId: "non-technical-event-2",
        },
        {
          image: Nontech4,
          eventId: "non-technical-event-8",
        },
        {
          image: Nontech5,
          eventId: "non-technical-event-5",
        },
        {
          image: Nontech6,
          eventId: "non-technical-event-10",
        },
        {
          image: Nontech5,
          eventId: "non-technical-event-6",
        },
      ],
    },
    {
      id: 3,
      image: Cultural,
      name: "Culturals",
      descriptionImages: [
        {
          image: Culturals1,
          eventId: "culturals-event-1",
        },
        {
          image: Culturals2,
          eventId: "culturals-event-2",
        },
        {
          image: Culturals3,
          eventId: "culturals-event-3",
        },
        {
          image: Culturals4,
          eventId: "culturals-event-4",
        },
      ],
    },
    {
      id: 5,
      image: Workshop,
      name: "Workshop",
      descriptionImages: [
        {
          image: workshop1,
          eventId: "workshop-6",
        },
        {
          image: workshop2,
          eventId: "workshop-10",
        },
        {
          image: workshop3,
          eventId: "workshop-2",
        },
        {
          image: workshop4,
          eventId: "workshop-9",
        },
        {
          image: workshop5,
          eventId: "workshop-5",
        },
      ],
    },
  ];

  useEffect(() => {
    setSelectedEvent(events[0].id);
    setRotation(0);
  }, []);

  const handleEventClick = (id, index) => {
    const anglePerEvent = 360 / events.length;
    const targetRotation = -(index * anglePerEvent);
    setSelectedEvent(id);
    setRotation(targetRotation);
  };

  const selectedEventData = events.find((event) => event.id === selectedEvent) || null;

  const title = "Events"

  const handleSlideClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  // Responsive settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full"
    >
      <h1
        className="text-center font-bold text-white md:text-5xl  text-3xl mt-24 md:mt-28 md:mb-12"
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

      <div className="w-full flex flex-col lg:flex-row py-3 relative px-4 sm:px-6 md:px-10">
        {/* Circular Event Selector */}

        <motion.div className="w-full lg:w-2/3 md:w-2/3 flex flex-col items-center lg:items-start py-6 lg:py-10 relative lg:pl-20">
          <motion.div className="absolute inset-0 md:right-20 flex items-center justify-center">
            <motion.div
              className="text-white text-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p className="text-[10px] sm:text-xl md:text-2xl font-bold">Spin the Wheel</p>
              <p className="text-[7px] sm:text-base md:text-lg">Click on an event to start</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex items-center justify-center rounded-full"
            animate={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
          >
            {/* Centered Content */}

            {events.map((event, index) => {
              const angle = (index / events.length) * 2 * Math.PI;
              const radius = window.innerWidth < 1024 ? (window.innerWidth < 768 ? 80 : 120) : 240;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = selectedEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  className={`absolute flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-52 lg:h-52 rounded-full shadow-lg cursor-pointer transition-all duration-500 overflow-hidden border-4 border-white ${isActive ? "bg-yellow-500 scale-125 shadow-glow" : "bg-blue-500"
                    } hover:w-16 hover:h-16 sm:hover:w-24 sm:hover:h-24 md:hover:w-28 md:hover:h-28 lg:hover:w-48 lg:hover:h-48`}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onClick={() => handleEventClick(event.id, index)}
                  onMouseEnter={() => setHoveredCircle(event.id)} // Set hover state to true
                  onMouseLeave={() => setHoveredCircle(null)} // Set hover state to false
                >
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                  {/* Backdrop and Event Name */}
                  {hoveredCircle === event.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <motion.span
                        className="text-white text-[10px] lg:text-xl md:text-2xl font-bold text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {event.name}
                      </motion.span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Event Details Slider */}
        <div className="w-full lg:w-2/5 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            key={selectedEventData?.name}
            className="w-full h-auto shadow-2xl border border-sky-800 p-3 bg-gradient-to-b text-sky-500 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-sky-900 bg-opacity-30">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 py-3 border-b border-sky-800 mx-2 text-center">
                {selectedEventData ? selectedEventData.name : "Event Details"}
              </h2>

              <Slider {...sliderSettings}>
                {selectedEventData?.descriptionImages.map((slide, index) => (
                  <div
                    key={`slide-${slide.eventId}-${index}`}
                    className="relative flex flex-col items-center justify-center p-4 rounded-xl shadow-lg h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] cursor-pointer"
                    onClick={() => handleSlideClick(slide.eventId)}
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                  >
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover shadow-md clip-bottom-left"
                    />
                    {/* Backdrop and Text */}
                    {isHovered && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.span
                          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          Click me to register for the event
                        </motion.span>
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;