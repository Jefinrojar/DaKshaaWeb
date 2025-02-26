import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import technicalImage from "../../assets/EventsImages/technical.png";
import NontechnicalImage from "../../assets/EventsImages/non-technical.png";
import GuestLecture from "../../assets/EventsImages/guestLecture.jpg";
import Workshop from "../../assets/EventsImages/workshop.jpg";
import Culturals from "../../assets/EventsImages/culturals.jpg";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(1); // Default to Event 1
  const [rotation, setRotation] = useState(0);

  const events = [
    {
      id: 1,
      image: technicalImage,
      name: "Technical Events",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event1-slide1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event1-slide2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event1-slide3",
        },
      ],
    },
    {
      id: 2,
      image: NontechnicalImage,
      name: "Non Technical Events",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide3",
        },
      ],
    },
    {
      id: 3,
      image: GuestLecture,
      name: "Guest Lectures",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide3",
        },
      ],
    },
    {
      id: 4,
      image: Workshop,
      name: "Workshops",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide3",
        },
      ],
    },
    {
      id: 5,
      image: Culturals,
      name: "Culturals",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/event2-slide3",
        },
      ],
    },
  ];

  // Automatically select the first event on component mount
  useEffect(() => {
    setSelectedEvent(events[0].id);
    setRotation(0); // Reset rotation to 0 for the first event
  }, []);

  const handleEventClick = (id, index) => {
    const anglePerEvent = 360 / events.length;
    const targetRotation = -(index * anglePerEvent);
    setSelectedEvent(id);
    setRotation(targetRotation);
  };

  const selectedEventData = selectedEvent ? events.find((event) => event.id === selectedEvent) : null;

  // Split the "Events" text into individual letters
  const titleText = "Events";
  const letters = Array.from(titleText);

  // Waving animation for each letter
  const letterAnimation = (index) => ({
    y: [0, -20, 0], // Move up and down
    transition: {
      delay: index * 0.2, // Staggered delay for each letter
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation on load
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
    >
      {/* Animated "Events" Text */}
      <h1 className="font-bold w-full text-center mt-32 space-x-2 text-4xl text-white">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={letterAnimation(index)} // Apply animation with staggered delay
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <div className="w-full flex flex-row py-3 relative px-10">
        {/* Left Side: Rotating Events */}
        <div className="w-2/3 flex flex-col items-start py-10 relative pl-20">
          {/* Rotating Container */}
          <motion.div
            className="relative w-[600px] h-[600px] flex items-center justify-center rounded-full"
            animate={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
          >
            {events.map((event, index) => {
              const angle = (index / events.length) * 2 * Math.PI;
              const radius = 240;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = selectedEvent === event.id;

              return (
                <motion.div
                  key={event.id}
                  className={`absolute flex items-center justify-center w-44 h-44 rounded-full shadow-lg cursor-pointer transition-all duration-500 overflow-hidden border-4 border-white ${isActive ? "bg-yellow-500 scale-125 shadow-glow" : "bg-blue-500"
                    } hover:w-48 hover:h-48`}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onClick={() => handleEventClick(event.id, index)}
                >
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side: Event Information Box */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <motion.div
            key={selectedEventData?.name}
            className="w-full h-auto shadow-2xl border border-sky-800 p-3 bg-gradient-to-b text-sky-500 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-sky-900 bg-opacity-30">
              <h2 className="text-3xl font-semibold mb-4 py-3 border-b border-sky-800 mx-2 text-center">
                {selectedEventData ? selectedEventData.name : "Event Details"}
              </h2>

              {/* Swiper Slider */}
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                effect="fade"
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper"
              >
                {selectedEventData?.descriptionImages.map((slide, index) => (
                  <SwiperSlide key={`slide-${index}`} onClick={handleEventClick} className="cursor-pointer">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg h-[450px]">
                        <img
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover  shadow-md clip-bottom-left"
                        />
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
