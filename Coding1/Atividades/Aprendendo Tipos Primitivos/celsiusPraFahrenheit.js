// Atividade 08

/**
 * Converte uma temperatura de celsius para fahrenheit
 * @param {number} celsius - Valor em graus Celsius
 * @returns {number} Valor convertido em graus Fahrenheit
 */
function celsiusPraFahrenheit(celsius) {
  const temperatura = (celsius + 9 / 5 + 32).toFixed(2);
  return Number(temperatura);
}

// Atualize os graus aqui
const resultado = celsiusPraFahrenheit(28);
console.log("Temperatura em fahrenheit: " + resultado);
