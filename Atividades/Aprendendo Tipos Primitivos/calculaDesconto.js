// Atividade 06

/**
 * Calcula o valor de uma compra com desconto aplicado
 * @param {number} valorOriginal - Valor original do produto *antes* do desconto
 * @param {number} percentualDeDesconto - Valor do desconto em %
 * @returns {number} Retorna o valor da compra com o desconto aplicado
 *
 * @example Um exemplo de como esta função deve ser utilizada
 *
 * ```js
 * calculaValorComDesconto(100, 10) // 90
 *
 * ```
 */
function calculaValorComDesconto(valorOriginal, percentualDeDesconto) {
  return valorOriginal - valorOriginal * (percentualDeDesconto / 100);
}

const resultado = calculaValorComDesconto(100, 10);
console.log(`Seu desconto é de $${resultado}`);
