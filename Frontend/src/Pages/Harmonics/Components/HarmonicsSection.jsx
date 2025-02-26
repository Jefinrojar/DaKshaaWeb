import React from 'react';
import Photo1 from "../../../assets/Ai.jpg";

const Card = () => {
  const cards = [
    { id: 1, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, image: Photo1, title: "Hover me!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div className="p-28">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Harmonics</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card) => (
          <div key={card.id} className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
            <img src={card.image} alt="Icon" className="group-hover:scale-110 w-full h-60 duration-500" />
            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />
              <span className="text-xl font-bold">{card.title}</span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
