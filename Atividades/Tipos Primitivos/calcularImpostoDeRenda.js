// Atividade 07

let impostoDeRenda = 0;
let salarioBruto = 5100;

function calcularImpostoDeRenda() {
  if (salarioBruto >= 6000) {
    impostoDeRenda = 0.3;
    return;
  } else if (salarioBruto >= 4000) {
    impostoDeRenda = 0.2;
    return;
  } else if (salarioBruto >= 2000) {
    impostoDeRenda = 0.1;
    return;
  }
}

calcularImpostoDeRenda();

console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
