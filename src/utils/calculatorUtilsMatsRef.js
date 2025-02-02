// src/utils/calculatorUtilsMatsRef.js

// Recetas base para la cadena en BRUTO.
export const recetasBruto = {
    2: [ { label: "T2 en Bruto", base: 1 } ],
    3: [ { label: "T3 en Bruto", base: 2 },
         { label: "T2 en Bruto", base: 1 } ],
    4: [ { label: "T4 en Bruto", base: 2 },
         { label: "T3 en Bruto", base: 2 },
         { label: "T2 en Bruto", base: 1 } ],
    5: [ { label: "T5 en Bruto", base: 3 },
         { label: "T4 en Bruto", base: 2 },
         { label: "T3 en Bruto", base: 2 },
         { label: "T2 en Bruto", base: 1 } ],
    6: [ { label: "T6 en Bruto", base: 4 },
         { label: "T5 en Bruto", base: 3 },
         { label: "T4 en Bruto", base: 2 },
         { label: "T3 en Bruto", base: 2 },
         { label: "T2 en Bruto", base: 1 } ],
    7: [ { label: "T7 en Bruto", base: 5 },
         { label: "T6 en Bruto", base: 4 },
         { label: "T5 en Bruto", base: 3 },
         { label: "T4 en Bruto", base: 2 },
         { label: "T3 en Bruto", base: 2 },
         { label: "T2 en Bruto", base: 1 } ],
    8: [ { label: "T8 en Bruto", base: 5 },
         { label: "T7 en Bruto", base: 5 },
         { label: "T6 en Bruto", base: 4 },
         { label: "T5 en Bruto", base: 3 },
         { label: "T4 en Bruto", base: 2 },
         { label: "T3 en Bruto", base: 2 },
         { label: "T2 en Bruto", base: 1 } ]
  };
  
  // Recetas para refinados intermedios.
  export const recetasRefinado = {
    3: [ { label: "T2 refinado", base: 1 } ],
    4: [ { label: "T3 Refinado", base: 1 },
         { label: "T2 Refinado", base: 1 } ],
    5: [ { label: "T4 Refinado", base: 1 },
         { label: "T3 Refinado", base: 1 },
         { label: "T2 Refinado", base: 1 } ],
    6: [ { label: "T5 Refinado", base: 1 },
         { label: "T4 Refinado", base: 1 },
         { label: "T3 Refinado", base: 1 },
         { label: "T2 Refinado", base: 1 } ],
    7: [ { label: "T6 Refinado", base: 1 },
         { label: "T5 Refinado", base: 1 },
         { label: "T4 Refinado", base: 1 },
         { label: "T3 Refinado", base: 1 },
         { label: "T2 Refinado", base: 1 } ],
    8: [ { label: "T7 Refinado", base: 1 },
         { label: "T6 Refinado", base: 1 },
         { label: "T5 Refinado", base: 1 },
         { label: "T4 Refinado", base: 1 },
         { label: "T3 Refinado", base: 1 },
         { label: "T2 Refinado", base: 1 } ]
  };
  
  /**
   * Calcula el total a comprar usando la fórmula:
   *    total = base * cantidad_final * (1 - devolucion_ajustada)^(nivel + 1)
   *
   * Se ajusta el porcentaje de devolución restando 1.1.
   *
   * @param {number} base       Cantidad base por unidad final
   * @param {number} cantidad   Cantidad final deseada
   * @param {number} nivel      Nivel en la cadena (0 para el primer material)
   * @param {number} devolucion Porcentaje de devolución (ej: 36.7)
   * @returns {number}          Cantidad efectiva a comprar
   */
  export function calcEfectivo(base, cantidad, nivel, devolucion) {
    const factor = Math.pow(1 - ((devolucion - 1.08) / 100), (nivel + 1));
    return Math.round(base * cantidad * factor);
  }
  
  /**
   * Calcula los materiales a comprar tanto para la cadena en BRUTO como para los refinados intermedios.
   *
   * @param {number} tierFinal   Tier final deseado (ej: 2, 3, …, 8)
   * @param {number} cantidad    Cantidad de material refinado deseado
   * @param {number} devolucion  Porcentaje de devolución
   * @returns {object}           Objeto con dos propiedades: 'bruto' y 'refinado'
   */
  export function calculateMaterials(tierFinal, cantidad, devolucion) {
    const results = {};
  
    // Cálculo para materiales en BRUTO
    if (recetasBruto[tierFinal]) {
      results.bruto = recetasBruto[tierFinal].map((item, index) => ({
        ...item,
        total: calcEfectivo(item.base, cantidad, index, devolucion)
      }));
    }
  
    // Cálculo para refinados intermedios (solo si tierFinal > 2)
    if (tierFinal > 2 && recetasRefinado[tierFinal]) {
      results.refinado = recetasRefinado[tierFinal].map((item, index) => ({
        ...item,
        total: calcEfectivo(item.base, cantidad, index, devolucion)
      }));
    }
  
    return results;
  }
  