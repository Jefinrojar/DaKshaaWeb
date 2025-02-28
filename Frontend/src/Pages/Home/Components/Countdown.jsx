import React, { useState, useEffect } from "react";
import divider from "../../../assets/divider.svg";
import warning from "../../../assets/warning.svg";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("March 21, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="flex flex-col md:mt-6 mt-0 items-center md:items-start md:justify-center md:pb-24">
      <p
        className="text-red-400 text-sm md:text-xl mb-4 md:mb-0 mt-16 "
        
      >
        <span className="inline-flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-1 sm:py-2 border-2 border-red-800 bg-red-500 bg-opacity-40 flicker">
          <img className="w-8 sm:w-10 md:w-8" src={warning} alt="Warning Icon" />
          21st & 22nd March, 2025
        </span>
      </p>
      <div className="relative sm:my-8 flex">
        {/* Divider SVG */}
        {/* <img
          className="absolute w-full max-w-[100%] h-auto top-1/2 -translate-y-1/2"
          src={divider}
          alt="Divider"
        /> */}
        {/* Timer Container */}
        <div className="border-2 border-sky-900 p-2 sm:p-3 md:p-2">
          <div
            className="relative px-4 sm:px-8 md:px-8 py-3 md:py-2 sm:py-4 bg-sky-900 bg-opacity-70 flex flex-wrap justify-center sm:justify-between items-center z-10 clip"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)" }}
          >
            {/* Days */}
            <div className="flex flex-col items-center mx-2 sm:mx-4 md:mx-5">
              <div className="text-xs sm:text-sm md:text-lg font-poppins uppercase text-white">
                Days
              </div>
              <div className="text-4xl sm:text-6xl md:text-8xl font-digital font-bold text-white">
                {formatNumber(timeLeft.days)}
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center mx-2 sm:mx-3 md:mx-5">
              <div className="text-xs sm:text-sm md:text-lg font-poppins uppercase text-white">
                Hours
              </div>
              <div className="text-3xl sm:text-5xl md:text-6xl font-digital font-bold text-white">
                {formatNumber(timeLeft.hours)} :
              </div>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center mx-2 sm:mx-3 md:mx-5">
              <div className="text-xs sm:text-sm md:text-lg font-poppins uppercase text-white">
                Minutes
              </div>
              <div className="text-3xl sm:text-5xl md:text-6xl font-digital font-bold text-white">
                {formatNumber(timeLeft.minutes)} :
              </div>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center mx-2 sm:mx-3 md:mx-5">
              <div className="text-xs sm:text-sm md:text-lg font-poppins uppercase text-white">
                Seconds
              </div>
              <div className="text-3xl sm:text-5xl md:text-6xl font-digital font-bold text-white">
                {formatNumber(timeLeft.seconds)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;