
import React from 'react';

const TajMahalImage: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden transition-transform duration-500 hover:scale-105 group">
      <img
        src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="The Taj Mahal in Agra, India"
        className="w-full h-auto object-cover aspect-video"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default TajMahalImage;
