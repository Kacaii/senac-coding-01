// Atividade 06

function calculaValorComDesconto(valorOriginal, percentualDeDesconto) {
  return valorOriginal - valorOriginal * (percentualDeDesconto / 100);
}

const resultado = calculaValorComDesconto(100, 10);
console.log(`Seu desconto é de ${resultado}`);
