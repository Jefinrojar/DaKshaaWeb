import React, { useState } from "react";
import { motion } from "framer-motion";
import Pravartak from '../../../assets/WorkshopImages/Pravartak.jpg';
import virtuospark from '../../../assets/WorkshopImages/virtuospark.jpg';
import care4 from '../../../assets/WorkshopImages/care4.jpg';
import dftt from '../../../assets/WorkshopImages/dftt.jpg';
import garuda from '../../../assets/WorkshopImages/garuda.jpg';
import macro from '../../../assets/WorkshopImages/macro.jpg';
import millet from '../../../assets/WorkshopImages/millet.jpg';
import seeka from '../../../assets/WorkshopImages/seeka.jpg';
import Photo1 from "../../../assets/workshop_card/Ai.jpg";
import Photo2 from "../../../assets/workshop_card/Aiml.jpg";
import Photo3 from "../../../assets/workshop_card/bt.jpg";
import Photo4 from "../../../assets/workshop_card/civil.jpg";
import Photo5 from "../../../assets/workshop_card/csbs.jpg";
import Photo6 from "../../../assets/workshop_card/cse.jpg";
import Photo7 from "../../../assets/workshop_card/ece.jpg";
import Photo8 from "../../../assets/workshop_card/eee.jpg";
import Photo9 from "../../../assets/workshop_card/ft.jpg";
import Photo10 from "../../../assets/workshop_card/it.jpg";
import Photo11 from "../../../assets/workshop_card/mct.jpg";
import Photo12 from "../../../assets/workshop_card/mech.jpg";
import Photo13 from "../../../assets/workshop_card/tex.jpg";
import Photo14 from "../../../assets/workshop_card/vlsi.jpg";

// Workshop data (unchanged)
const workshops = [
  {
    id: 1,
    img: Photo1,
    department: "Artificial Intelligence and Data Science",
    dept: "Department of AIDS",
    title: "Ui Path Supported Workshop 'Robotic Process Automation'",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Ui Path",
    companyImg: ""
  },
  {
    id: 2,
    img: Photo2,
    department: "Artificial Intelligence and Machine Learning",
    dept: "Department of AIML",
    title: "AI for Game Development",
    facultyCo: "Mrs R S Sivaranjini",
    facultyCoNo: "+91 96770 55783",
    studentCo1: "Kavinesh K  III-Year/CSE(AIML)",
    studentCo2: "Ruban B III-Year/CSE(AIML)",
    studentCo3: "Pavithran G II-Year/CSE(AIML)",
    studentCoNo1: "+91 94892 43775",
    studentCoNo2: "+91 81445 96872",
    studentCoNo3: "+91 93635 75964",
    companyName: "IITM Pravartak Technologies Foundation",
    companyImg: Pravartak
  },
  {
    id: 3,
    img: Photo3,
    department: "Bio-Technology",
    dept: "Department of BT",
    title: "Next Generation Sequencing (NGS)",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "",
    companyImg: ""
  },
  {
    id: 4,
    img: Photo4,
    department: "Civil Engineering",
    dept: "Department of CIVIL",
    title: "Building Information Modeling (BIM)",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "",
    companyImg: ""
  },
  {
    id: 5,
    img: Photo5,
    department: "Computer Science and Business Systems",
    dept: "Department of CSBS",
    title: "Unlocking Digital Potential: A Workshop on Modern Marketing",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Virtuospark",
    companyImg: virtuospark,
  },
  {
    id: 6,
    img: Photo6,
    department: "Computer Science and Engineering",
    dept: "Department of CSE",
    title: "Mobile App Development",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "",
    companyImg: "",
  },
  {
    id: 7,
    img: Photo7,
    department: "Electronics and Communication Engineering",
    dept: "Department of ECE",
    title: "Industry IoT using LoRaWAN Technology",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "",
    companyImg: "",
  },
  {
    id: 8,
    img: Photo8,
    department: "Electrical and Electronics Engineering",
    dept: "Department of EEE",
    title: "NI Lab view",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "",
    companyImg: "",
  },
  {
    id: 9,
    img: Photo9,
    department: "Food Technology",
    dept: "Department of FT",
    title: "Millet Fiesta: From Farm to Fork",
    facultyCo: "Mr. S. Nithishkumar",
    facultyCoNo: "+91 89733 33396",
    studentCo1: "Pugazh Vendhan R, III Year",
    studentCo2: "Shahana B, II Year",
    studentCo3: "Santhosh S, II Year",
    studentCoNo1: "+91 75503 48891",
    studentCoNo2: "+91 74188 83634",
    studentCoNo3: "+91 73058 44895",
    companyName: "E-MILLET PRODUCTS",
    companyImg: millet,
  },
  {
    id: 10,
    img: Photo10,
    department: "Information Technology",
    dept: "Department of IT",
    title: "Digital Marketing",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Seeka Host India",
    companyImg: seeka,
  },
  {
    id: 11,
    img: Photo11,
    department: "Mechatronics Engineering",
    dept: "Department of MCT",
    title: "Soaring High: Hands-On Drone Building and Flight Workshop",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Garuda Aerospace",
    companyImg: garuda,
  },
  {
    id: 12,
    img: Photo12,
    department: "Mechanical Engineering",
    dept: "Department of MECH",
    title: "Design and development of automotive Product",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Macro Technology Pvt Ltd",
    companyImg: macro,
  },
  {
    id: 13,
    img: Photo13,
    department: "Textile Technology",
    dept: "Department of TXT",
    title: "Medi Tex",
    facultyCo: "",
    facultyCoNo: "",
    studentCo1: "",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Care 4 U India Pvt, Ltd",
    companyImg: care4,
  },
  {
    id: 14,
    img: Photo14,
    department: "VLSI",
    dept: "Department of VLSI",
    title: "From Digital Logic to DFT",
    facultyCo1: "Mr. S. Pradeep",
    facultyCoNo1: "+91 81221 39862",
    facultyCo2: "Mrs. S. Gomathi",
    facultyCoNo2: "+91 98942 79244",
    studentCo1: "Harikesavaraj J",
    studentCo2: "Aishvarieya V",
    studentCoNo1: "+91 82702 78279",
    studentCoNo2: "+91 63746 84519",
    companyName: "DFTTraining Institute Private Limited",
    companyImg: dftt,
  },
];

const WorkshopSection = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedWorkshop(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-center font-bold text-white text-2xl md:text-4xl mb-8 mt-20">
        {"Workshop".split("").map((char, index) => (
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-6 justify-items-center px-4">
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="relative group cursor-pointer overflow-hidden duration-500 
                      w-80 h-96 bg-sky-900 bg-opacity-30 border border-sky-900 text-gray-50 p-5"
            onClick={() => setSelectedWorkshop(workshop)}
          >
            <img
              src={workshop.img}
              alt={workshop.title}
              className="group-hover:scale-110 w-full h-72 duration-500 object-cover"
            />
            <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-full h-32 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />
              <span className="text-lg text-center md:text-xl font-bold">{workshop.title}</span>
              <p className="group-hover:opacity-100 w-full duration-500 opacity-0">{workshop.dept}</p>
              <button
                className="group-hover:opacity-100 w-full duration-500 opacity-0 text-base mt-2 border border-white px-2 py-1 hover:bg-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedWorkshop && (
        <div
          className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-20 
                    backdrop-blur-sm z-50 overflow-y-auto"
          onClick={handleOverlayClick}
        >
          <div
            className="p-2 relative w-full max-w-[95%] my-6"
          >
            <button
              className="absolute -top-5 right-0 text-2xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setSelectedWorkshop(null)}
            >
              ×
            </button>
            <div className="bg-sky-800/80 text-white p-3 shadow-lg w-full rounded-lg">
              <div className="flex flex-col items-center gap-4">
                <img
                  className="w-72 h-72 object-cover rounded-lg"
                  src={selectedWorkshop.img}
                  alt={selectedWorkshop.title}
                />
                <div className="w-full">
                  <h1 className="text-2xl font-bold mt-2 leading-tight">
                    {selectedWorkshop.title}
                  </h1>
                  <p className="font-semibold text-white/90 mb-2 text-base">
                    {selectedWorkshop.dept}
                  </p>
                  <hr />
                  <p className="mt-4 text-base">
                    <b>Company Name:</b> {selectedWorkshop.companyName}
                  </p>
                  {(selectedWorkshop.facultyCo1 || selectedWorkshop.facultyCoNo1) && (
                    <p className="mt-4 text-base">
                      <b>Faculty Coordinator 1:</b> {selectedWorkshop.facultyCo1}{" "}
                      {selectedWorkshop.facultyCoNo1}
                    </p>
                  )}
                  {(selectedWorkshop.facultyCo2 || selectedWorkshop.facultyCoNo2) && (
                    <p className="mt-4 text-base">
                      <b>Faculty Coordinator 2:</b> {selectedWorkshop.facultyCo2}{" "}
                      {selectedWorkshop.facultyCoNo2}
                    </p>
                  )}
                  {(selectedWorkshop.studentCo1 || selectedWorkshop.studentCoNo1) && (
                    <p className="mt-4 text-base">
                      <b>Student Coordinator 1:</b> {selectedWorkshop.studentCo1}{" "}
                      {selectedWorkshop.studentCoNo1}
                    </p>
                  )}
                  {(selectedWorkshop.studentCo2 || selectedWorkshop.studentCoNo2) && (
                    <p className="mt-4 text-base">
                      <b>Student Coordinator 2:</b> {selectedWorkshop.studentCo2}{" "}
                      {selectedWorkshop.studentCoNo2}
                    </p>
                  )}
                  {(selectedWorkshop.studentCo3 || selectedWorkshop.studentCoNo3) && (
                    <p className="mt-4 text-base">
                      <b>Student Coordinator 3:</b> {selectedWorkshop.studentCo3}{" "}
                      {selectedWorkshop.studentCoNo3}
                    </p>
                  )}
                  {selectedWorkshop.companyImg && (
                    <img
                      className="w-1/2 my-4 rounded-lg"
                      src={selectedWorkshop.companyImg}
                      alt={selectedWorkshop.companyName}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopSection;