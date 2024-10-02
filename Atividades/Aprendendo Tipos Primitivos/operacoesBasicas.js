// Atividade 03

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
