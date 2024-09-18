// Atividade 09

function calcularIMC() {
  let peso = 78;
  let altura = 2.3;
  const valorIMC = peso / (altura * altura);

  console.log("Seu IMC é: " + valorIMC.toFixed(2));
}

calcularIMC();
