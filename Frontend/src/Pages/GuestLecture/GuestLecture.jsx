import React from "react";
import { motion } from "framer-motion";
import GuestLectureCard from "./Components/GuestLectureCards";

const GuestLecture = () => {
  const lectures = [
    {
      name: "Dr. Arokiaswamy Velumani",
      title: "Founder of Thyrocare Technologies Ltd",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 23, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Srimathy Kesan",
      title: "Founder & CEO Space Kidz India",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "2:00 PM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Mr. V. Nandakumar",
      title: "Commissioner of Income Tax",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Arokiaswamy Velumani",
      title: "Founder of Thyrocare Technologies Ltd",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 23, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Srimathy Kesan",
      title: "Founder & CEO Space Kidz India",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "2:00 PM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Mr. V. Nandakumar",
      title: "Commissioner of Income Tax",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Arokiaswamy Velumani",
      title: "Founder of Thyrocare Technologies Ltd",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 23, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Srimathy Kesan",
      title: "Founder & CEO Space Kidz India",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "2:00 PM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Mr. V. Nandakumar",
      title: "Commissioner of Income Tax",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Arokiaswamy Velumani",
      title: "Founder of Thyrocare Technologies Ltd",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 23, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Dr. Srimathy Kesan",
      title: "Founder & CEO Space Kidz India",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "2:00 PM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
    {
      name: "Mr. V. Nandakumar",
      title: "Commissioner of Income Tax",
      image: "https://images.unsplash.com/photo-1735094495694-79dd898dea20?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:30 AM",
      date: "Feb 22, 2025",
      location: "Vivek Auditorium",
    },
  ];

  const title = "Guest Lecture";

  return (
    <div className="py-20">
      {/* Title with Letter Waving Animation */}
      <h1 className="text-center font-bold text-white text-5xl mb-10 mt-8">
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

      {/* Lecture Cards with Scroll Animation */}
      <div className="flex flex-wrap justify-center gap-6">
        {lectures.map((lecture, index) => (
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
  );
};

export default GuestLecture;
