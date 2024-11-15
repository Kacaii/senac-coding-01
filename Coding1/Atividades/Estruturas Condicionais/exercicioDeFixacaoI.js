/**
 * Objeto que armazena as informações do paciente.
 * @typedef {Object} Paciente
 * @property {string | undefined} [ nome ] - O nome do Paciente
 * @property {number | undefined} [ idade ] -  A idade do Paciente
 * @property {string | undefined} [ servico ] - O serviço solicitado pelo paciente.
 */

/** @type {Paciente} */
const paciente = {
  nome: undefined,
  idade: undefined,
  servico: undefined,
};

console.clear();

/**
 * Solicita e guarda o **nome** do paciente.
 * @type {string | undefined}
 */
paciente.nome =
  prompt(
    "\nBem vindo(a) ao Sistema de Saúde!  \nQual o seu nome? \n\n>",
  )?.trim() || undefined;

console.clear();

/**
 * Solicita e guarda a **idade** do paciente.
 * @type {string | undefined}
 */
const idade =
  prompt(
    `\nOlá ${paciente.nome || "Paciente"}! Seja bem vindo(a) <3 \nQual a sua idade? \n\n>`,
  )?.trim() || undefined;

if (idade && !isNaN(parseInt(idade))) {
  paciente.idade = parseInt(idade);
}

console.clear();

/**
 * Solicita e guarda o **serviço desejado** pelo paciente.
 * @type {string | undefined}
 */
paciente.servico =
  prompt("\nComo posso lhe ajudar? \n\n>")?.trim() || undefined;

console.clear();
console.log("\n");

// Verifica e exibe as informações fornecidas pelo paciente.
// Se algum valor estiver faltando, exibe um erro correspondente.
Object.entries(paciente).forEach(([key, value]) => {
  !value
    ? console.error(`Faltaram algumas informações  ( ${key} )`)
    : console.log(`%c${key} verificado(a)! `, "color:green");
});

/**
 * Retorna false se alguma das propriedades do Paciente for `falsy`.
 * @see {Paciente}
 * @type {boolean}
 */
const pacienteValido = Object.values(paciente).every((value) => value);

pacienteValido
  ? console.log("\n%cPaciente valido! ", "color: blue")
  : console.error("\n%cPaciente Invalido! ", "color: red");

console.table(paciente);
console.log("\n");
