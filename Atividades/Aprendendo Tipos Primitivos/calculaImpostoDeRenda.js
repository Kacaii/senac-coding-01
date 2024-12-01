// Atividade 07

console.clear();

/**
 * Imprime o resultado no console.
 * @param {number} salarioBruto - Valor do salario bruto.
 */
function calculaImpostoDeRenda(salarioBruto) {
  if (!salarioBruto) return;

  console.log("");

  if (salarioBruto >= 6000) {
    const impostoDeRenda = 0.3;
    console.log(`Entrou no primeiro IF\n`);
    console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
    return;
  } else if (salarioBruto >= 4000) {
    const impostoDeRenda = 0.2;
    console.log("Entrou no segundo IF\n");
    console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
    return;
  } else if (salarioBruto >= 2000) {
    const impostoDeRenda = 0.1;
    console.log("Entrou no terceiro IF");
    console.log(`Imposto de Renda: R$ ${impostoDeRenda * salarioBruto}`);
    return;
  } else {
    console.log("Sem imposto!💰");
  }
}

/** @type {string | undefined } */
const input = prompt("\nInsira o seu salário bruto:\n\n>")?.trim();

input && !isNaN(parseInt(input))
  ? calculaImpostoDeRenda(parseInt(input))
  : console.error("Input vazio!");
