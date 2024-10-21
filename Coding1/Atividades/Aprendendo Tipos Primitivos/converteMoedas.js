// Atividade 08

/**
 * Objeto que representa uma moeda com seu respectivo nome e valor.
 * @typedef {Object} Moeda
 * @property {string} nome - O nome da moeda.
 * @property {number} valor - O valor da moeda em relação ao Real.
 */

/**
 * Objeto que representa uma lista de moedas, onde cada chave é um código de moeda (ex: USD, EUR)
 * e o valor é um objeto do tipo Moeda.
 * @typedef {Object.<string, Moeda>} ListaDeMoedas
 */

/**
 * Lista de moedas com informações sobre nome e valor em relação ao Real.
 * @type {ListaDeMoedas}
 */
const listaDeMoedas = {
  USD: { nome: "dólares", valor: 5.24 },
  EUR: { nome: "euros", valor: 5.61 },
};

/**
 * Converte um valor em reais para uma moeda escolhida com base na taxa de conversão.
 * @param {number} valorEmReais - O valor em reais que será convertido.
 * @param {number} moedaEscolhida - A taxa de conversão da moeda escolhida.
 * @returns {number}  O valor convertido na moeda escolhida.
 */
function converteMoedas(valorEmReais, moedaEscolhida) {
  return valorEmReais * moedaEscolhida;
}

// Use o objeto para escolher a moeda
const resultado = converteMoedas(5, listaDeMoedas.EUR.valor).toFixed(2);
console.log(`Um total de $${resultado}`);
