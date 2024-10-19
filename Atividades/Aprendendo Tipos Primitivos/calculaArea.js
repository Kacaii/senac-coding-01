// Atividade 04

/**
 * Calcula a área de um triângulo utilizando os argumentos passados.
 *
 * @param {number} base -  Base do triângulo
 * @param {number} altura -  Altura do triângulo
 * @returns {number} Retorna a área do triângulo
 *
 * @example Um exemplo de como esta função deve ser utilizada
 *
 * ```js
 * calculaAreaDoTriangulo(9, 18) // 81.00
 *
 * ```
 */
function calculaAreaDoTriangulo(base, altura) {
  return (base * altura) / 2;
}

const areaDoTriangulo = calculaAreaDoTriangulo(9, 18);

console.log(`A área to triângulo é igual a ${areaDoTriangulo.toFixed(2)}`);
