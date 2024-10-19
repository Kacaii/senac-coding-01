// @ts-check

// Atividade 09

/**
 * Calcula o Indice de Massa Corporal de uma pessoa.
 * @param {number} peso - Peso do paciente, em Quilos.
 * @param {number} altura - Altura da pessoa, em Metros.
 * @returns {number} Retorna o IMC da pessoa.
 */
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

const resultado = calculaIMC(78, 1.78);
console.log(`Seu IMC é de ${resultado}`);
