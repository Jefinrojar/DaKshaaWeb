import React, { useState } from "react";
import img1 from "../../../assets/teamimage/img1.jpg";
import img2 from "../../../assets/teamimage/img2.jpg";
import img3 from "../../../assets/teamimage/img3.jpg";
import img4 from "../../../assets/teamimage/img4.jpg";
import img5 from "../../../assets/teamimage/img5.jpg";
import img6 from "../../../assets/teamimage/img6.jpg";
import img7 from "../../../assets/teamimage/img7.jpg";
import img8 from "../../../assets/teamimage/img8.jpg";
import img9 from "../../../assets/teamimage/img9.jpg";
import img10 from "../../../assets/teamimage/img10.jpg";
import img11 from "../../../assets/teamimage/img11.jpg";
import img12 from "../../../assets/teamimage/img12.jpg";
import img13 from "../../../assets/teamimage/img13.jpg";
import img14 from "../../../assets/teamimage/img14.jpg";
import img15 from "../../../assets/teamimage/img15.jpg";
import img16 from "../../../assets/teamimage/img16.jpg";

const teamMembers = [
  { id: 1, name: "Hari", department: "IT Department", img: img1, category: "Creativity & Initiatives" },
  { id: 2, name: "John Doe", department: "CSE Department", img: img2, category: "Design" },
  { id: 3, name: "Jane Smith", department: "ECE Department", img: img3, category: "Events" },
  { id: 4, name: "Alice Brown", department: "Mechanical", img: img4, category: "Finance" },
  { id: 5, name: "Bob Johnson", department: "Civil Engineering", img: img5, category: "Hospitality" },
  { id: 6, name: "Emma Wilson", department: "AI & DS", img: img6, category: "Guest Lectures" },
  { id: 7, name: "Olivia Davis", department: "Hospitality", img: img7, category: "Human Resources" },
  { id: 8, name: "Michael Thompson", department: "Industry Relations", img: img8, category: "Industry Relations" },
  { id: 9, name: "Sarah Wilson", department: "Internal Audit", img: img9, category: "Internal Audit" },
  { id: 10, name: "Daniel Parker", department: "Public Relations", img: img10, category: "Public Relations" },
  { id: 11, name: "David Thompson", department: "Marketing", img: img11, category: "Marketing" },
  { id: 12, name: "Emily Johnson", department: "Media Relations", img: img12, category: "Media Relations" },
  { id: 13, name: "Michael Thompson", department: "Operations", img: img13, category: "Operations" },
  { id: 14, name: "Jennifer Thompson", department: "Supply Chain", img: img14, category: "Supply Chain" },
  { id: 15, name: "David Thompson", department: "Technology", img: img15, category: "Technology" },
  { id: 16, name: "Aurn", department: "CSE Department", img: img16, category: "Design" },
];

const categories = [
  "All", "Website Designers & Developers", "Design", "Events", "Finance", 
  "Guest Lectures", "Hospitality", "Human Resources", "Industry Relations", "Internal Audit", 
  "Marketing", "Media Relations", "Operations", "Supply Chain", "Technology"
];

const Teams = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter members based on category
  const filteredMembers = selectedCategory === "All"
    ? teamMembers.sort((a, b) => (a.id === 4 || a.id === 5 ? -1 : 1)) // Move ID 4 & 5 to top
    : teamMembers.filter(member => member.category === selectedCategory);

  return (
    <div className="w-full p-6 mt-32">
      
      {/* Desktop: Button-based category selection */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-white ${
              selectedCategory === category ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
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
            className="w-64 h-80 border-2 border-[#212121] rounded-xl shadow-lg transition-all duration-300 ease-in hover:-translate-y-6 hover:border border-sky-800 hover:rounded-[2.5rem_0_2.5rem_0] flex flex-col items-center p-4"
          >
            {/* Square Image */}
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-60 h-60 object-cover border-2 border-white rounded-lg "
            />
            {/* Name */}
            <h3 className="text-sky-500 text-lg font-semibold mt-4">{member.name}</h3>
            {/* Department */}
            <p className="text-sky-400 text-sm">{member.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
