import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center flex-col">
        {/* Título en el centro */}
        <div className="flex-1 text-center text-xl font-semibold">
          UwU albion
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
