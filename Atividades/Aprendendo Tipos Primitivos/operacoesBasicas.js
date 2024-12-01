// Atividade 03

console.clear();

/**
 * Calculadora que realiza operações matemáticas básicas
 * utilizando os números passados como argumentos
 * e as exibe no terminal.
 *
 * @param {number | undefined} x - Primeiro Número
 * @param {number | undefined} y - Segundo Número
 */
function operacoesBasicas(x, y) {
  console.clear();
  if (x == undefined || y == undefined) return;

  const adicao = x + y;
  const subtracao = x - y;
  const multiplicacao = x * y;
  const divisao = (x / y).toFixed(2);

  console.log("=================");
  console.log(`Valores: ${x} e ${y}.`);
  console.log("Adição: " + adicao);
  console.log("Subtração: " + subtracao);
  console.log("Multiplicação: " + multiplicacao);
  console.log("Divisão: " + divisao);
  console.log("=================");
}

const inputs = [
  prompt("\nPrimeiro número?\n\n> ")?.trim(),
  prompt("\nSegundo número?\n\n> ")?.trim(),
];

const [num1, num2] = inputs.map((numero) => {
  if (numero && !isNaN(parseInt(numero))) return parseInt(numero);
});

operacoesBasicas(num1, num2);
