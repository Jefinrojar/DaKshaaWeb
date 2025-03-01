import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Pravartak from '../../../assets/WorkshopImages/Pravartak.jpg'
import virtuospark from '../../../assets/WorkshopImages/virtuospark.jpg'
import care4 from '../../../assets/WorkshopImages/care4.jpg'
import dftt from '../../../assets/WorkshopImages/dftt.jpg'
import garuda from '../../../assets/WorkshopImages/garuda.jpg'
import macro from '../../../assets/WorkshopImages/macro.jpg'
import millet from '../../../assets/WorkshopImages/millet.jpg'
import seeka from '../../../assets/WorkshopImages/seeka.jpg'
import Cokupa from '../../../assets/WorkshopImages/Cokupa.png'
import EnthuTechnology from '../../../assets/WorkshopImages/EnthuTechnology.png'
import uipath from '../../../assets/WorkshopImages/uipath.png'
import Ictacademy from '../../../assets/WorkshopImages/Ictacademy.png'

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


// Workshop data
const workshops = [
  {
    id: 1,
    img: Photo1,
    department: "Artificial Intelligence and Data Science",
    dept: "Department of AIDS",
    title: "Ui Path Supported Workshop 'Robotic Process Automation'",
    facultyCo: "Mr  N.Giridharan",
    facultyCoNo: "+91 8925325252",
    studentCo1: "Gowrinath V",
    studentCo2: "Durga S",
    studentCoNo1: "+91 8056570574",
    studentCoNo2: "+91 9080191925",
    companyName: "Ui Path",
    companyImg: uipath,

    
  },
  {
    id: 2,
    img: Photo2,
    department: "Artificial Intelligence and Machine Learning",
    dept: "Department of AIML",
    title: "AI for Game Development",
    facultyCo: "Mrs R S Sivaranjini",
    facultyCoNo: "+91 96770 55783",
    studentCo1: "Surendra Krishana R  III-Year/CSE(AIML)",
    studentCo2: "Sriharan S III-Year/CSE(AIML)",
    studentCoNo1: "+91 8438878063",
    studentCoNo2: "+91 9629729009",
    companyName: "IITM Pravartak Technologies Foundation",
    companyImg: Pravartak
  },
  {
    id: 3,
    img: Photo3,
    department: "Bio-Technology",
    dept: "Department of BT",
    title: "Next Generation Sequencing (NGS)",
    facultyCo: " Dr. Puniethaa Prabhu",
    facultyCoNo: "+91 9080195801",
    facultyCo1: " Dr. Sidhra S",
    facultyCoNo1: "+91 8870681797",
    studentCo1: "Javeed Akthar G",
    studentCo2: "Mohammed Arkam K",
    studentCo3: "Sanjay Kumar K",
    studentCo4: "Meriam Janitta J",
    studentCoNo1: "+91 9345647270",
    studentCoNo2: "+91 7904655755",
    studentCoNo3: "+91 8807076569",
    studentCoNo4: "+91 7010347812",
    companyName: "Genotypic Technology - Bengaluru",
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
    companyName: "Ictacademy",
    companyImg: Ictacademy
  },
  {
    id: 5,
    img: Photo5,
    department: "Computer Science and Business Systems",
    dept: "Department of CSBS",
    title: "Unlocking Digital Potential: A Workshop on Modern Marketing",
    facultyCo: "Mr. P. Venkatesh",
    facultyCoNo: "+91 89033 66916",
    studentCo1: "K. Mohanakumaran",
    studentCo2: "",
    studentCo3: "",
    studentCoNo1: "+91 88384 01078",
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
    title: "Mobile Application Development",
    facultyCo: "Mr K.Dinesh Kumar",
    facultyCoNo: "+91 9360287212",
    studentCo1: "Alyushra A III-Year/CSE",
    studentCoNo1: "+91 6369548280",
    companyName: "RemitBee India Private Limited - Chennai",
    companyImg: Cokupa
  },
  {
    id: 7,
    img: Photo7,
    department: "Electronics and Communication Engineering",
    dept: "Department of ECE",
    title: "Industry IoT using LoRaWAN Technology",
    facultyCo: "Mr. Jayamani S",
    facultyCoNo: "+91 9629297054",
    studentCo1: "Nishanthini III-Year/ECE",
    studentCo2: "Rithan II-Year/ECE",
    studentCoNo1: "",
    studentCoNo2: "",
    studentCoNo3: "",
    companyName: "Enthu Technology Solutions India Pvt Ltd",
    companyImg: EnthuTechnology,
  },
  {
    id: 8,
    img: Photo8,
    department: "Electrical and Electronics Engineering",
    dept: "Department of EEE",
    title: "NI Lab view",
    facultyCo: "Thangadurai A",
    facultyCoNo: "+91 9095322233",
    studentCo1: "Nivitha V P",
    studentCo2: "Karmuhilan V",
    studentCoNo1: "+91 9003344108",
    studentCoNo2: "+91 9025244374",
    companyName: " Mew Technology - Bangalore",
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
    facultyCo: "Mr. P. Dinesh Kumar",
    facultyCoNo: "+91 96888 37873",
    studentCo1: "F.Anisa III Year/IT",
    studentCo2: "E.Balasastha III Year/IT",
    studentCoNo1: "+91 99426 51212",
    studentCoNo2: "+91 99426 51212",
    companyName: "Seeka Host India",
    companyImg: seeka,
  },
  {
    id: 11,
    img: Photo11,
    department: "Mechatronics Engineering",
    dept: "Department of MCT",
    title: "Soaring High: Hands-On Drone Building and Flight Workshop",
    facultyCo: "Mr. S. Hari Prasadh",
    facultyCoNo: "+91 7092821630",
    facultyCo1: "Mr. R. Vivek",
    facultyCoNo1: "+91 7200458826",
    studentCo1: "Soundarrajan A",
    studentCoNo1: "+91 9442727410",
    companyName: "Garuda Aerospace",
    companyImg: garuda,
  },
  {
    id: 12,
    img: Photo12,
    department: "Mechanical Engineering",
    dept: "Department of MECH",
    title: "Design and development of automotive Product",
    facultyCo: "Dr.K.Raja",
    facultyCoNo: "+91 9842314481",
    studentCo1: " Lingeshwaran S L",
    studentCoNo1: "",
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
    facultyCo: "Mr. S. Pradeep",
    facultyCoNo: "+91 81221 39862",
    facultyCo1: "Mrs. S. Gomathi",
    facultyCoNo1: "+91 98942 79244",
    studentCo1: "Harikesavaraj J II-Year/EE(VLSI D&T)",
    studentCo2: "Aishvarieya V II-Year/EE(VLSI D&T)",
    studentCoNo1: "+91 82702 78279",
    studentCoNo2: "+91 63746 84519",
    companyName: "DFTTraining Institute Private Limited",
    companyImg: dftt,
  },
];

const WorkshopSection = () => {
  const title = "Workshop";
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="container mx-auto mb-28 mt-[120px]">
      {/* Animated Title */}
      <h1
        className="text-center font-bold text-white md:text-5xl text-2xl mb-10 mt-8"
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

      {/* Cards Section */}
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {workshops.map((workshop, index) => (
          <div
            key={workshop.id}
            className="md:p-3 p-3 border border-sky-800"
            data-aos="fade-up" // Add AOS animation
            data-aos-delay={index * 100} // Staggered delay for each card
          >
            <div className="text-white shadow-md overflow-hidden relative group">
              {/* Image Container */}
              <div className="relative md:w-full md:max-w-[300px] w-60">
                <img
                  src={workshop.img}
                  alt={workshop.title}
                  className="w-full"
                />

                {/* Overlay Section */}
                <div className="absolute inset-0 flex flex-col space-y-4 items-center justify-center text-center text-white bg-sky-800/60 opacity-0 backdrop-blur-sm group-hover:opacity-100 transition duration-500 px-4">
                  <Slide cascade>
                    <h1 className="text-xl font-semibold cursor-default">
                      {workshop.title}
                    </h1>
                    <button
                      className="border border-white px-4 py-1 hover:bg-white/20 duration-300"
                      onClick={() => setSelectedWorkshop(workshop)}
                    >
                      View
                    </button>
                  </Slide>
                </div>
              </div>
              <p className="text-center my-2 text-sky-500">{workshop.dept}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 flex items-center md:justify-center bg-black bg-opacity-20 backdrop-blur-sm z-50">
          <div
            className="p-2 border border-sky-800 relative md:mx-4 sm:mx-0 ml-8"
            data-aos="zoom-in" // Add AOS animation for modal
          >
            <button
              className="absolute -top-7 -right-6 text-3xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setSelectedWorkshop(null)}
            >
              &times;
            </button>
            <div className="bg-sky-800/60 text-white clip-bottom-right-3 shadow-lg md:max-w-7xl md:w-full w-72 relative">
              <div className="flex flex-col md:flex-row items-center gap-8 px-3">
                <img
                  className="w-44 h-44 md:w-72 md:h-72"
                  src={selectedWorkshop.img}
                  alt=""
                />
                <div className="w-full md:w-auto ml-8">
                  <h1 className="text-lg mb-3 font-bold mt-2">
                    {selectedWorkshop.title}
                  </h1>
                  <p className="font-semibold text-white/90 mb-2">
                    {selectedWorkshop.dept}
                  </p>
                  <hr />

                  <p className="mt-4">
                    <b>Company Name:</b> {selectedWorkshop.companyName}
                  </p>
                  <div className="flex gap-2 my-4">
                    <img
                      className="w-1/2 md:w-1/3 h-full object-cover"
                      src={selectedWorkshop.companyImg}
                      alt=""
                    />
                    <img
                      className="w-1/2 md:w-1/3 h-full object-cover"
                      src={selectedWorkshop.companyImg1}
                      alt=""
                    />
                  </div>
                  <p className="font-bold">Student Co-ordinators:</p>
                  <ul className="list-disc ml-6">
                    {selectedWorkshop.studentCo1 && <li>{selectedWorkshop.studentCo1}</li>}
                    {selectedWorkshop.studentCo2 && <li>{selectedWorkshop.studentCo2}</li>}
                    {selectedWorkshop.studentCo3 && <li>{selectedWorkshop.studentCo3}</li>}
                  </ul>
                  <p className="font-bold mt-8">Faculty Co-ordinator:</p>
                  <ul className="list-disc ml-4 text-sm mb-6">
                    {selectedWorkshop.facultyCo && selectedWorkshop.facultyCoNo && (
                      <li>{selectedWorkshop.facultyCo}: {selectedWorkshop.facultyCoNo}</li>
                    )}
                    {selectedWorkshop.facultyCo1 && selectedWorkshop.facultyCoNo1 && (
                      <li>{selectedWorkshop.facultyCo1}: {selectedWorkshop.facultyCoNo1}</li>
                    )}
                  </ul>
                  <button
                      className="border border-white px-6 py-2 hover:bg-white/20 duration-300 mb-5"
                      onClick={() => setSelectedWorkshop(workshop)}
                    >
                      REGISTER NOW!
                    </button>
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