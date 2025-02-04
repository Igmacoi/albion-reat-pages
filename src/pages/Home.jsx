import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('https://assets.albiononline.com/uploads/media/default/media/38ef43e963326eab91eca4fa04d95e5304dd1bf8.jpeg')" }}
    >
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div className="relative z-10 flex flex-col flex-grow">
      <Header />
      <main className="flex-grow h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <div className='bg-white/4 backdrop-blur-xs shadow-lg rounded-lg p-5'>
          <h1 className="text-5xl font-bold mb-4">Albion Online</h1>
          <p className="text-xl mb-6">En esta página encontrarás algunas ayudas para aumentar tu eficiencia en Albion Online</p>
          <button className="bg-orange-500 px-10 py-4 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600">
            ¿Click Me?
          </button>
        </div>
      </main>
      <Footer />
    </div>
  </div>
  );
}

export default Home;