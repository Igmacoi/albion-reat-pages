import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="h-screen w-full relative">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://imgur.com/FicPlHx.gif')" }}
        >
          {/* Capa oscura encima de la imagen */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Contenedor principal con flexbox */}
        <div className="relative z-10 flex flex-col h-full">
          <Header />

          {/* Contenido centrado que ocupa el espacio disponible */}
          <div className="flex-grow flex flex-col justify-center items-center text-white px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Bienvenido a Mi Página</h1>
            <p className="text-xl mb-6">Aquí va una pequeña descripción de lo que hacemos.</p>
            <button className="bg-orange-500 px-10 py-4 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600">
              ¡Comienza aquí!
            </button>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;