import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenuButtom from './BurgerMenuButtom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Referencia para el botón de hamburguesa

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // Si el clic viene del botón, no cerrar el menú
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="backdrop-blur-3xl shadow-lg rounded-lg md:p-1 sm:p-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-1">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>

        {/* Botón de hamburguesa */}
        <button
          ref={buttonRef} // Referencia al botón
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen ? 'true' : 'false'}>
          <BurgerMenuButtom isOpen={isOpen} /> {/* Pasamos isOpen como prop */}
        </button>

        {/* Menú de navegación */}
        <div
          ref={menuRef}
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium items-center justify-center rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:text-orange-400">
            <li className="w-full ms:w-[90%] text-center">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} // Cerrar menú al hacer clic
                className="text-white block py-2 px-3 rounded-md hover:text-orange-400 hover:bg-black/10 active:bg-black/10 whitespace-nowrap">
                Inicio
              </Link>
            </li>
            <li className="w-full ms:w-full text-center">
              <Link 
                to="/PageCalculatorMatsRef" 
                onClick={() => setIsOpen(false)} // Cerrar menú al hacer clic
                className="text-white block py-2 px-3 rounded-md hover:text-orange-400 hover:bg-black/10 active:bg-black/10 w-full whitespace-nowrap">
                Calculadora de Refinado
              </Link>
            </li>
            <li className="w-full ms:w-full text-center">
              <Link 
                to="/PageCalculatorMatsRef" 
                onClick={() => setIsOpen(false)} // Cerrar menú al hacer clic
                className="text-white block py-2 px-3 rounded-md hover:text-orange-400 hover:bg-black/10 active:bg-black/10 w-full whitespace-nowrap">
                Crea Tus Builds
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
