import React from "react";
import tnStartUp from "../../assets/startup/logo.png";
import hackathonLogo from "../../assets/Hackathon.png";

function Tags() {
  return (
    <div className="fixed top-1/4 md:top-1/3 -left-7 md:-left-14">
      <div className="flex flex-col gap-16 md:gap-36">
        <img
          className="w-20 md:w-40 bg-white p-1 md:p-2 -rotate-90 transition-transform duration-300 ease-in-out cursor-pointer transform hover:translate-x-4"
          src={tnStartUp}
          alt=""
        />
        <img
          className="w-20 md:w-40 bg-white p-1 md:p-2 -rotate-90 transition-transform duration-300 ease-in-out cursor-pointer transform hover:translate-x-4"
          src={hackathonLogo}
          alt=""
        />
      </div>
    </div>
  );
}

export default Tags;
