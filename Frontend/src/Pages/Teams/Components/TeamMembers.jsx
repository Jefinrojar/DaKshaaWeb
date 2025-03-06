import React, { useState } from "react";

// Developers 
import sharan from '../../../assets/team_members/sharan.jpg'
import jefin from '../../../assets/team_members/jefin.jpg'
import praveen from '../../../assets/team_members/praveen.jpg'
import aabid from '../../../assets/team_members/aabid.jpg'
import arul from '../../../assets/team_members/arul.jpg'
import anisa from '../../../assets/team_members/anisa.png'
import aakash from '../../../assets/team_members/aakash.jpg'
import gobiha from '../../../assets/team_members/gobiha.jpg'
import vignesh from '../../../assets/team_members/vignesh.jpg'
import bala from '../../../assets/team_members/bala.jpg'
import Dhanush from '../../../assets/team_members/Dhanush Shankar.jpg'


import ruban from '../../../assets/team_members/ruban.jpg'
import rithika from '../../../assets/team_members/rithika.jpg'
import kavinesh from '../../../assets/team_members/kavinesh.jpg'
import gopinath from '../../../assets/team_members/gopinath.jpg'
import monisha from '../../../assets/team_members/monisha.jpg'

const teamMembers = [
  { id: 1, name: "Sharan", department: "Department of IT", img: sharan, category: "Developers" },
  { id: 2, name: "Jefin Rojar", department: "Department of IT", img: jefin, category: "Developers" },
  { id: 3, name: "Praveen", department: "Department of IT", img: praveen, category: "Developers" },
  { id: 4, name: "Shaik Aabid Farhan", department: "Department of IT", img: aabid, category: "Developers" },
  { id: 5, name: "Gobiha", department: "Department of IT", img: gobiha, category: "Web-Designers" },
  { id: 6, name: "Arul", department: "Department of IT", img: arul, category: "Developers" },
  { id: 7, name: "Balasaastha", department: "Department of IT", img: bala, category: "Web-Designers" },
  { id: 8, name: "Anisa Fairoz", department: "Department of IT", img: anisa, category: "Web-Designers" },
  { id: 9, name: "Aakash Kannan", department: "Department of IT", img: aakash, category: "Web-Designers" },
  { id: 10, name: "Dhanush Shankar", department: "Department of IT", img: Dhanush, category: "Web-Designers" },
  { id: 14, name: "Kavinesh", department: "Department of AIML", img: kavinesh, category: "Co-ordinators" },
  { id: 11, name: "Vignesh", department: "Department of IT", img: vignesh, category: "Co-ordinators" },
  { id: 12, name: "Ruban", department: "Department of AIML", img: ruban, category: "Co-ordinators" },
  { id: 13, name: "Rithika", department: "Department of AIML", img: rithika, category: "Co-ordinators" },
  { id: 15, name: "Gopinath", department: "Department of AIML", img: gopinath, category: "Co-ordinators" },
  { id: 16, name: "Monisha", department: "Department of CSE", img: monisha, category: "Co-ordinators" },
  
];

const categories = [
  "All", "Developers", "Web-Designers", "Flyer-Designers", "Co-ordinators",
];

const Teams = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter members based on category
  const filteredMembers = selectedCategory === "All"
  ? teamMembers // No sorting, keeping original order
  : teamMembers.filter(member => member.category === selectedCategory);


  return (
    <div className="w-full p-6">
      
      {/* Desktop: Button-based category selection */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`p-1 font-semibold text-sky-400 ${
              selectedCategory === category ? "bg-sky-900/60" : "bg-transparent border border-sky-800 hover:bg-sky-900/60"
            }`}
          >
            <p className="bg-sky-900/30 p-2 clip-bottom-right">{category}</p>
          </button>
        ))}
      </div>

      {/* Mobile & Tablet: Dropdown category selection */}
      <div className="md:hidden flex justify-center mb-6">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md bg-gray-800 text-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-10 mt-16">
        {filteredMembers.map((member) => (
          <div 
          key={member.id} 
          className="relative w-64 h-80 border-2 shadow-lg transition-all duration-300 ease-in hover:scale-105 border-sky-800 flex flex-col items-center p-4 group"
        >
          {/* Corner Borders */}
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            {/* Top Left */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-sky-800"></div>
            {/* Top Right */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-sky-800"></div>
            {/* Bottom Left */}
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-sky-800"></div>
            {/* Bottom Right */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-sky-800"></div>
          </div>
        
          {/* Square Image */}
          <img 
            src={member.img} 
            alt={member.name} 
            className="w-60 h-60 object-cover border-2 border-sky-800"
          />
          {/* Name */}
          <h3 className="text-sky-500 text-lg font-semibold mt-4">{member.name}</h3>
          {/* Department */}
          <p className="text-sky-400 text-sm text-center">{member.department}</p>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Teams;
