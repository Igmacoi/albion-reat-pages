import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex space-x-6">
      <Link to="/" className="hover:text-orange-400">Home</Link>
      <Link to="/PagesCalculatorMats" className="hover:text-orange-400">Calculadira Refinado</Link>
    </nav>
  );
}

export default Navbar;
