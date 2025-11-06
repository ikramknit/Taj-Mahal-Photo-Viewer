
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-6 md:mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-300 tracking-wider">
        The Taj Mahal
      </h1>
      <p className="text-gray-400 mt-2 text-lg md:text-xl">An Eternal Monument of Love</p>
    </header>
  );
};

export default Header;
