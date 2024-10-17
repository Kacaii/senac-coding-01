// Atividade 04

/**
 * @param {number} base -  Base do triângulo
 * @param {number} altura -  Altura do triângulo
 * @returns {number} Retorna a área do triângulo
 */
function calculaAreaDoTriangulo(base, altura) {
  return (base * altura) / 2;
}

const areaDoTriangulo = calculaAreaDoTriangulo(9, 18);
console.log(`A área to triângulo é igual a ${areaDoTriangulo.toFixed(2)}`);
