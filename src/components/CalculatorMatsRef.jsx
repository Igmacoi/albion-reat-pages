import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { calculateMaterials } from '../utils/calculatorUtilsMatsRef';

const CalculatorMatsRef = () => {
  const [tierFinal, setTierFinal] = useState(2);
  const [cantidad, setCantidad] = useState('');
  const [devolucion, setDevolucion] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const cantidadNum = parseFloat(cantidad);
    const devolucionNum = parseFloat(devolucion);

    if (cantidadNum <= 0 || devolucionNum < 0 || devolucionNum > 100) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    const results = calculateMaterials(parseInt(tierFinal), cantidadNum, devolucionNum);
    let salida = `Objetivo: ${cantidadNum} de T${tierFinal} refinado\n`;
    salida += `Devolución: ${devolucionNum}%\n\n`;

    if (results.bruto) {
      salida += "Materiales a comprar (en BRUTO):\n";
      results.bruto.forEach(item => {
        salida += `- ${item.label}: ${item.total}\n`;
      });
      salida += "\n";
    }

    if (results.refinado) {
      salida += "Materiales a comprar (REFINADOS intermedios):\n";
      results.refinado.forEach(item => {
        salida += `- ${item.label}: ${item.total}\n`;
      });
    }

    setResult(salida);
  };

  return (
      <div className="h-screen w-full relative">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://assets.albiononline.com/uploads/media/default/media/38ef43e963326eab91eca4fa04d95e5304dd1bf8.jpeg')" }}
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
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Calculadora de Refinado (con devolución)</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selección del tier deseado */}
              <div>
                <label htmlFor="mineral" className="block mb-1">
                  Tier a obtener (refinado final):
                </label>
                <select
                  id="mineral"
                  value={tierFinal}
                  onChange={(e) => setTierFinal(e.target.value)}
                  className="p-2 rounded bg-gray-800 text-gray-200 w-full"
                >
                  <option value="2">T2</option>
                  <option value="3">T3</option>
                  <option value="4">T4</option>
                  <option value="5">T5</option>
                  <option value="6">T6</option>
                  <option value="7">T7</option>
                  <option value="8">T8</option>
                </select>
              </div>

              {/* Cantidad deseada */}
              <div>
                <label htmlFor="cantidad" className="block mb-1">
                  Cantidad de material refinado deseado:
                </label>
                <input
                  type="number"
                  id="cantidad"
                  placeholder="Ej. 2000"
                  required
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  className="p-2 rounded bg-gray-800 text-gray-200 w-full"
                />
              </div>

              {/* Porcentaje de devolución */}
              <div>
                <label htmlFor="devolucion" className="block mb-1">
                  Devolución (%)
                </label>
                <input
                  type="number"
                  id="devolucion"
                  step="0.1"
                  min="0"
                  max="100"
                  placeholder="Ej. 36.7"
                  required
                  value={devolucion}
                  onChange={(e) => setDevolucion(e.target.value)}
                  className="p-2 rounded bg-gray-800 text-gray-200 w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full"
              >
                Enviar
              </button>
            </form>

            {result && (
              <div className="mt-4 p-4 bg-gray-800 border border-gray-600 whitespace-pre-wrap text-gray-200">
                {result}
              </div>
            )}
          </div>
        </div>

          <Footer />
        </div>
      </div>
  );
}

export default CalculatorMatsRef;
