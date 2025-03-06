import React, { useState } from "react";
import { motion } from "framer-motion";

const AccommodationDetails = () => {
  const [selectedDate, setSelectedDate] = useState(["March 21"]);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [includeFood, setIncludeFood] = useState(false);
  const pricePerDay = includeFood ? 450 : 300;
  const totalPrice = selectedDate.length * pricePerDay;

  const letter = "Accomodation";
  const letters = letter.split("");

  const letterAnimation = (index) => ({
    y: [0, -5, 0],
    transition: {
      delay: index * 0.05,
      duration: 1.2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center mt-36 text-white">
        <h1 className="font-bold text-center text-3xl">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={letterAnimation(index)}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
      {/* Outer Container with Border and Background */}
      <div className="border border-sky-800 p-3 max-w-6xl mx-auto mt-8 mb-10 lg:ml-48">
        <div className="border border-sky-800 bg-sky-900/30 p-6 shadow-lg w-full mx-auto clip-bottom-right">
          <div className="flex flex-col md:flex-row text-white">
            {/* Left Section */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-2">Accommodation Charges</h2>
              <p>Rs. 300 per day</p>

              {/* Total & Instructions */}
              <div className="mt-4 flex space-x-3 border-sky-800 border p-2 w-full md:w-52">
                <button className="py-2 px-10 border border-sky-800 bg-sky-900/30 text-white shadow-lg w-full">
                  Total - Rs.300/-
                </button>
              </div>

              <div className="p-2 border border-sky-800 w-full mt-4">
                <p className="bg-sky-900/30 p-6 clip-bottom-right">
                  Accommodation is only provided for 21st Evening stay with 21st
                  Evening Dinner and 22nd Morning breakfast.
                </p>
              </div>

              {/* Registration Info */}
              <button
                className="mb-8 w-full md:w-auto md:mt-5 px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-xl md:text-xl shadow-xl"
                onClick={() => window.open("www.google.com", "_blank")}
              >
                BOOK NOW!
              </button>
            </div>

            {/* Vertical Divider */}
            <div className="border-l border-white h-auto md:h-[450px] mx-4"></div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-2">Lunch Charges</h2>
              <p>Rs. 100 per lunch</p>

              <div className="mt-4 flex space-x-3 border-sky-800 border p-2 w-full md:w-52">
                <button className="py-2 px-10 border bg-sky-900/30 border-sky-800 text-white shadow-lg w-full">
                  Total - Rs.100/-
                </button>
              </div>

              <div className="p-2 border border-sky-800 w-full mt-4">
                <p className="bg-sky-900/30 p-6 clip-bottom-right">
                  Only Lunch will be provided for 21st and 22nd. Register here.
                </p>
              </div>

              {/* Date Selection */}
              <div className="flex md:flex-row md:space-y-0 md:space-x-16 mt-4 space-x-2">
                {["March 21", "March 22"].map((date, index) => (
                  <React.Fragment key={date}>
                    <button
                      className="px-10 py-2 border bg-sky-900/30 text-white w-full md:w-auto"
                      onClick={() =>
                        setSelectedDate((prev) =>
                          prev.includes(date)
                            ? prev.filter((d) => d !== date)
                            : [...prev, date]
                        )
                      }
                    >
                      {date}
                    </button>
                    {index === 0 && (
                      <div className="border-l-2 border-gray-500 h-12 md:h-auto w-0 my-4 md:my-0"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Registration Info */}
              <div className="flex md:flex-row space-x-4 md:space-x-32 mt-4">
                <button
                  className="mb-8 w-32 md:w-auto md:mt-5 px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-sm md:text-xl shadow-xl"
                  onClick={() => window.open("www.google.com", "_blank")}
                >
                  BOOK NOW!
                </button>
                <button
                  className="mb-8 w-32 md:w-auto md:mt-5 px-4 py-2 bg-sky-600 clip bg-opacity-70 border-2 border-sky-900 hover:bg-sky-800 transition-all text-white font-semibold text-sm md:text-xl shadow-xl"
                  onClick={() => window.open("www.google.com", "_blank")}
                >
                  BOOK NOW!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetails;