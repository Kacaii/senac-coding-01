// Atividade 03

function operacoesBasicas() {
  let num1 = 2;
  let num2 = 3;

  const adicao = num1 + num2;
  const subtracao = num1 - num2;
  const multiplicacao = num1 * num2;
  const divisao = (num1 / num2).toFixed(2);

  console.log(`Valores: ${num1} e ${num2}.`);
  console.log("Adição: " + adicao);
  console.log("Subtração: " + subtracao);
  console.log("Multiplicação: " + multiplicacao);
  console.log("Divisão: " + divisao);
}

operacoesBasicas();
