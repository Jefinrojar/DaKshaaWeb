import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import TechnicalImage from "../../assets/EventsImages/technical.png"; 
import NonTechnicalImage from "../../assets/EventsImages/non-technical.png"
import Cultural from "../../assets/EventsImages/culturals.jpg"
import GuestLecture from "../../assets/EventsImages/guestLecture.jpg"
import Workshop from "../../assets/EventsImages/workshop.jpg"

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(1);
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      image: TechnicalImage,
      name: "Technical Events",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "technical-event-1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "technical-event-2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "technical-event-3",
        },
      ],
    },
    {
      id: 2,
      image: NonTechnicalImage,
      name: "Technical Events",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "non-technical-event-1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "non-technical-event-2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "non-technical-event-3",
        },
      ],
    },
    {
      id: 3,
      image: Cultural,
      name: "Culturals",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "culturals-event-1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "culturals-event-2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "culturals-event-3",
        },
      ],
    },
    // {
    //   id: 4,
    //   image: GuestLecture,
    //   name: "GuestLecture",
    //   descriptionImages: [
    //     {
    //       image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //       eventId: "guest-lecture-1",
    //     },
    //     {
    //       image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //       eventId: "guest-lecture-2",
    //     },
    //     {
    //       image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //       eventId: "guest-lecture-3",
    //     },
    //   ],
    // },
    {
      id: 5,
      image: Workshop,
      name: "Workshop",
      descriptionImages: [
        {
          image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "workshop-1",
        },
        {
          image: "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "workshop-2",
        },
        {
          image: "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          eventId: "workshop-3",
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

  const letterAnimation = (index) => ({
    y: [0, -20, 0],
    transition: {
      delay: index * 0.2,
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  const handleSlideClick = (eventId) => {
    console.log("Clicked eventId:", eventId); // Debug: Log the eventId
    console.log("Navigating to:", `/event/${eventId}`); // Debug: Log the URL
    navigate(`/event/${eventId}`); // Navigate to the dynamic route
  };

  // Settings for react-slick
  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
    pauseOnHover: false, // Disable pause on hover
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
      <h1 className="font-bold w-full text-center mt-32 space-x-2 text-4xl text-white">
        {Array.from("Events").map((letter, index) => (
          <motion.span key={index} initial={{ y: 0 }} animate={letterAnimation(index)} style={{ display: "inline-block" }}>
            {letter}
          </motion.span>
        ))}
      </h1>

      <div className="w-full flex flex-row py-3 relative px-10">
        <div className="w-2/3 flex flex-col items-start py-10 relative pl-20">
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
                  className={`absolute flex items-center justify-center w-52 h-52 rounded-full shadow-lg cursor-pointer transition-all duration-500 overflow-hidden border-4 border-white ${
                    isActive ? "bg-yellow-500 scale-125 shadow-glow" : "bg-blue-500"
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

              {/* React Slick Slider */}
              <Slider {...sliderSettings}>
                {selectedEventData?.descriptionImages.map((slide, index) => (
                  <div
                    key={`slide-${slide.eventId}-${index}`}
                    className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg h-[450px] cursor-pointer"
                    onClick={() => handleSlideClick(slide.eventId)} // Pass eventId directly
                  >
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover shadow-md clip-bottom-left"
                    />
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