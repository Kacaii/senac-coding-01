// Atividade 05

// Experimentei passar um operador de espalhamento nos argumentos
function calcularMedia(...notas) {
  return (
    notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) /
    notas.length
  ).toFixed();
}

// Tente com mais argumentos, funciona até com mais de 3 notas
const resultado = calcularMedia(10, 3, 7, 10);
console.log(`Sua média é de ${resultado}`);
