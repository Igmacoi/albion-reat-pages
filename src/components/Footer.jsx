import React from 'react';


function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-white p-1 my-3 mx-10 shadow-lg rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título en el centro */}
        <div className="flex-1 text-center text-xl font-semibold">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos los derechos reservados. | Autores Igmacoi & IA´s
          <a href="https://github.com/Igmacoi/albion-reat-pages" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> Repositorio en GitHub</a>
        </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
