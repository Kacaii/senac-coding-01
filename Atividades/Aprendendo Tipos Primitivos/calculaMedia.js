// Atividade 05

console.clear(); // Limpando

/**
 * Calcula a media das notas, independente do número de **argumentos** passados.
 * @param {number[]} notas - Notas do aluno
 * @returns {number} Retorna a média das notas
 */
function calcularMedia(...notas) {
  const media =
    notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) /
    notas.length;

  return parseInt(media.toFixed(2)); // `.toFixed()` retorna uma string.
}

// Tente com mais argumentos, funciona até com mais de 3 notas
const resultado = calcularMedia(10, 3, 7, 2, 9);
console.log(`Sua média é de ${resultado} `);
