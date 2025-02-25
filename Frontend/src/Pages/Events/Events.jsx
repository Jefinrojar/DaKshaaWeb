import React, { useState } from "react";
import { motion } from "framer-motion";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rotation, setRotation] = useState(0);

  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Event 1",
      description: ["Point 1 about Event 1.", "Point 2 about Event 1.", "Point 3 about Event 1.", "Point 4 about Event 1.", "Point 5 about Event 1.", "Point 6 about Event 1."],
      descriptionImages: [
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Event 2",
      description: ["Point 1 about Event 1.", "Point 2 about Event 1.", "Point 3 about Event 1.", "Point 4 about Event 1.", "Point 5 about Event 1.", "Point 6 about Event 1."],
      descriptionImages: [
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Event 3",
      description: ["Point 1 about Event 1.", "Point 2 about Event 1.", "Point 3 about Event 1.", "Point 4 about Event 1.", "Point 5 about Event 1.", "Point 6 about Event 1."],
      descriptionImages: [
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Event 4",
      description: ["Point 1 about Event 1.", "Point 2 about Event 1.", "Point 3 about Event 1.", "Point 4 about Event 1.", "Point 5 about Event 1.", "Point 6 about Event 1."],
      descriptionImages: [
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Event 5",
      description: ["Point 1 about Event 1.", "Point 2 about Event 1.", "Point 3 about Event 1.", "Point 4 about Event 1.", "Point 5 about Event 1.", "Point 6 about Event 1."],
      descriptionImages: [
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718563552473-2d97b224e801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1732491482042-bfb6bc27678e?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739609579483-00b49437cc45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    // Add other events similarly...
  ];

  const handleEventClick = (id, index) => {
    const anglePerEvent = 360 / events.length;
    const targetRotation = -(index * anglePerEvent);
    setSelectedEvent(id);
    setRotation(targetRotation);
  };

  const selectedEventData = selectedEvent ? events.find((event) => event.id === selectedEvent) : null;
  const leftDescription = selectedEventData ? selectedEventData.description.slice(0, 5) : [];
  const rightDescription = selectedEventData ? selectedEventData.description.slice(5) : [];
  const leftImages = selectedEventData ? selectedEventData.descriptionImages.slice(0, 5) : [];
  const rightImages = selectedEventData ? selectedEventData.descriptionImages.slice(5) : [];

  // Split the "Events" text into individual letters
  const titleText = "Events";
  const letters = Array.from(titleText);

  // Waving animation for each letter
  const letterAnimation = (index) => ({
    y: [0, -20, 0], // Move up and down
    transition: {
      delay: index * 0.2, // Staggered delay for each letter
      duration: 2,
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
      <h1 className="font-bold w-full text-center mt-28 space-x-2 text-4xl text-white">
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
            style={{ background: "radial-gradient(circle, rgba(0,30,255,1) 0%, rgba(0,0,0,1) 100%)" }}
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
                  className={`absolute flex items-center justify-center w-44 h-44 rounded-full shadow-lg cursor-pointer transition-all duration-500 overflow-hidden border-4 border-white ${
                    isActive ? "bg-yellow-500 scale-125 shadow-glow" : "bg-blue-500"
                  } hover:w-52 hover:h-52`}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onClick={() => handleEventClick(event.id, index)}
                >
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Circle */}
          <div className="absolute left-72 top-60 flex items-center justify-center w-44 h-44 rounded-full text-xl font-bold text-white border-4 border-white shadow-lg bg-black">
            {selectedEvent ? events.find((event) => event.id === selectedEvent)?.name : "Select an Event"}
          </div>
        </div>

        {/* Right Side: Event Information Box */}
        <div className="w-1/2 flex items-center justify-center p-10 ">
          <motion.div
            key={selectedEvent}
            className="w-full h-[600px] p-8 shadow-xl rounded-xl border-2 border-[#9DD3FF] transition-all duration-500 text-white "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-extrabold mb-4 border-b-2 pb-2 border-white">
              {selectedEvent ? selectedEventData.name : "Event Details"}
            </h2>
            <div className="flex">
              {/* Left Section */}
              <div className="w-1/2 pr-4">
                <ul className="text-lg font-medium leading-relaxed space-y-10">
                  {leftDescription.map((point, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <img src={leftImages[index]} alt="icon" className="w-16 h-16 rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Section */}
              <div className="w-1/2 pl-4">
                <ul className="text-lg font-medium leading-relaxed space-y-2">
                  {rightDescription.map((point, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <img src={rightImages[index]} alt="icon" className="w-16 h-16 rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;