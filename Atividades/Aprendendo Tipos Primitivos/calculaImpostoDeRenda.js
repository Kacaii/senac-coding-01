// @ts-check

// Atividade 07

let impostoDeRenda = 0;

/**
 * Calcula o imposto de renda
 * @param {number} salarioBruto - Valor do salario bruto
 */
function calculaImpostoDeRenda(salarioBruto) {
  if (salarioBruto >= 6000) {
    impostoDeRenda = 0.3;
    console.log(`Primeiro IF`);
    console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
    return;
  } else if (salarioBruto >= 4000) {
    impostoDeRenda = 0.2;
    console.log("Segundo IF");
    console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
    return;
  } else if (salarioBruto >= 2000) {
    impostoDeRenda = 0.1;
    console.log("Terceiro IF");
    console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
    return;
  }
}

// Atualize o valor aqui
calculaImpostoDeRenda(7100);
