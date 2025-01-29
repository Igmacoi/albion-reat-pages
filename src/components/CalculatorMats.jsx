import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CalculatorMats() {
  return (
    <>
      <div className="h-screen w-full relative">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://imgur.com/6wGwJLp.jpg')" }}
        >
          {/* Capa oscura encima de la imagen */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Contenedor principal con flexbox */}
        <div className="relative z-10 flex flex-col h-full">
          <Header />

        {/* Contenido*/}
        <div className="flex-grow flex flex-col justify-center items-center text-white px-4 text-center">
            {/* Centrado del h1 */}
            <h1 className="text-4xl font-bold mb-4">Calculadora de Refinado</h1>

            {/* Contenedor de los dos divs */}
            <div className="flex space-x-4">
                {/* Primer div: Funcionamiento */}
                <div className="bg-white/10 backdrop-blur-md text-white p-4 shadow-lg p-4 rounded-lg w-2/5">
                    <h3>Funcionamiento de la Calculadora</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod ipsam incidunt eaque delectus esse et nesciunt minima vero mollitia inventore, tempora neque consequuntur reprehenderit ipsum adipisci quo ducimus id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod ipsam incidunt eaque delectus esse et nesciunt minima vero mollitia inventore, tempora neque consequuntur reprehenderit ipsum adipisci quo ducimus id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod ipsam incidunt eaque delectus esse et nesciunt minima vero mollitia inventore, tempora neque consequuntur reprehenderit ipsum adipisci quo ducimus id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod ipsam incidunt eaque delectus esse et nesciunt minima vero mollitia inventore, tempora neque consequuntur reprehenderit ipsum adipisci quo ducimus id.</p>
                </div>
                
                {/* Segundo div: Formulario */}
                <div className="bg-white/10 backdrop-blur-md text-white p-4 shadow-lg rounded-lg w-3/5">
                    <form action="" className="flex flex-wrap space-x-6 justify-center items-center">
                        {/* Primer grupo: Tier */}
                        <div className="flex flex-col w-15">
                            <label htmlFor="mineral" className="mb-2">Tier</label>
                            <select id="mineral" name="mineral" className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600">
                                <option value="0">T2</option>
                                <option value="1">T3</option>
                                <option value="2">T4</option>
                                <option value="3">T5</option>
                                <option value="4">T6</option>
                                <option value="5">T7</option>
                                <option value="6">T8</option>
                            </select>
                        </div>

                        {/* Segundo grupo: Materiales Procesados */}
                        <div className="flex flex-col w-1/4">
                            <label htmlFor="materiales" className="mb-2">Materiales Procesados</label>
                            <input
                                type="text"
                                id="materiales"
                                className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600 appearance-none"
                                style={{
                                WebkitAppearance: "none", 
                                MozAppearance: "textfield", 
                                msOverflowStyle: "none"
                                }}
                            />
                        </div>

                        {/* Tercer grupo: Devolución */}
                        <div className="flex flex-col w-1/4">
                            <label htmlFor="devolucion" className="mb-2">Devolución</label>
                            <input
                                type="text"
                                id="devolucion"
                                className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                            />
                        </div>

                        {/* Botón de Enviar */}
                        <div className="flex flex-col w-1/4 justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-700"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default CalculatorMats;
