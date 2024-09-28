// Atividade 09

function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

const resultado = calculaIMC(78, 1.78);
console.log(`Seu IMC é de ${resultado}`);
