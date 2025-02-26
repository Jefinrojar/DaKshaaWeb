import React, { useState, useEffect } from 'react';
import divider from '../../../assets/divider.svg'
import warning from '../../../assets/warning.svg'
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Set target date: March 21, 2025 at 00:00:00
    const targetDate = new Date('March 21, 2025 00:00:00').getTime();
    
    // Update timer every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  
  // Helper function to add leading zeros
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  
  return (
    <>
    <p className='text-red-500 text-2xl text-center mb-12' data-aos="fade-up">
      <span className='inline-flex items-center gap-4 px-4 py-2 border-4 border-red-800 bg-red-500 bg-opacity-40 flicker'>
        <img className='w-12' src={warning} alt="Warning Icon" />
        21st & 22nd March, 2025
      </span>
    </p>
    <div className="relative w-full my-8 flex justify-center">
      {/* SVG for the curved line */}

      <img className='absolute w-full' src={divider} alt="" />
      {/* Timer container */}
      <div className='border-2 border-sky-900 p-2' data-aos="fade-up">
        <div 
          className="relative px-12 py-4 bg-sky-900 bg-opacity-70 flex items-center justify-between z-10 clip" 
          style={{  
            boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)',
          }}
        >
          {/* Days */}
          <div className="flex flex-col items-center mx-5">
            <div className="text-lg font-poppins uppercase text-white">Days</div>
            <div className="text-8xl font-digital font-bold text-white">{formatNumber(timeLeft.days)}</div>
          </div>
          
          {/* Hours */}
          <div className="flex flex-col items-center ml-5 mr-3">
            <div className="text-sm font-poppins uppercase text-white">Hours</div>
            <div className="text-6xl font-digital font-bold text-white">{formatNumber(timeLeft.hours)} :</div>
          </div>
          
          {/* Minutes */}
          <div className="flex flex-col items-center mx-3">
            <div className="text-sm font-poppins uppercase text-white">Minutes</div>
            <div className="text-6xl font-digital font-bold text-white">{formatNumber(timeLeft.minutes)} :</div>
          </div>
          
          {/* Seconds */}
          <div className="flex flex-col items-center mx-3">
            <div className="text-sm font-poppins uppercase text-white">Seconds</div>
            <div className="text-6xl font-digital font-bold text-white">{formatNumber(timeLeft.seconds)}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CountdownTimer;