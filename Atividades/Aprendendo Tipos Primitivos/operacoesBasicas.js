// Atividade 03

/**
 * Calculadora que realiza operações matemáticas básicas
 * utilizando os números passados como argumentos
 * e as exibe no terminal.
 *
 * @param {number} x - Primeiro Número
 * @param {number} y - Segundo Número
 */
function operacoesBasicas(x, y) {
  const adicao = x + y;
  const subtracao = x - y;
  const multiplicacao = x * y;
  const divisao = (x / y).toFixed(2);

  console.log(`Valores: ${x} e ${y}.`);
  console.log("Adição: " + adicao);
  console.log("Subtração: " + subtracao);
  console.log("Multiplicação: " + multiplicacao);
  console.log("Divisão: " + divisao);
}

// Passe os argumentos aqui
operacoesBasicas(2, 3);
