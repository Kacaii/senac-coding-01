/**
 * Objeto que armazena as informações do paciente.
 * @typedef {Object} Paciente
 * @property {string | null} nome - O nome do Paciente
 * @property {number | null} idade - O nome do Paciente
 * @property {string | null} servico - O serviço que o paciente solicitou.
 */

/** @type {Paciente} */
const paciente = {
  nome: null,
  idade: null,
  servico: null,
};

console.clear();

/**
 * Solicita e guarda o nome do paciente.
 * @type {string|null}
 */
const inputNome = prompt(
  "\nBem vindo(a) ao Sistema de Saúde!  \nQual o seu nome? \n\n>",
);

/**
 * - Valida o input fornecido pelo usuário.
 * - Verifica se o input não está vazio ou nulo.
 *
 * @param {string | null} input - O valor do input fornecido.
 * @returns {[string | null, Error | null]} Retorna o input e um erro, se houver.
 */
function validaInput(input) {
  // Limpando o Console
  console.clear();
  if (input === null || input === "") {
    return [null, new Error("\nInput vazio!")];
  } else {
    return [input, null];
  }
}

const [nome, erroNome] = validaInput(inputNome);

if (erroNome) {
  console.error(erroNome.message);
} else {
  typeof nome === "string" && isNaN(Number(nome))
    ? (paciente.nome = nome)
    : console.error("\nNome Inválido ");
}

/**
 * Solicita e guarda a idade do paciente.
 * @type {string | null}
 */
const inputIdade = prompt(
  `\nOi ${paciente.nome}! Seja bem vindo(a) <3 \nQual a sua idade? \n\n>`,
);

const [idade, erroIdade] = validaInput(inputIdade);

if (erroIdade) {
  console.error(erroIdade.message);
} else {
  const parsedIdade = Number(idade);
  typeof parsedIdade === "number" && !isNaN(parsedIdade)
    ? (paciente.idade = parsedIdade)
    : console.error("\nIdade Inválida ");
}

/**
 * Solicita e guarda o serviço desejado pelo paciente.
 * @type {string | null}
 */
const inputServico = prompt("\nEntendido, como posso lhe ajudar? \n\n>");

const [servico, erroServico] = validaInput(inputServico);

if (erroServico) {
  console.error(erroServico.message);
} else {
  typeof servico === "string" && isNaN(Number(nome))
    ? (paciente.servico = servico)
    : console.error("\nServiço Inválido! ");
}

console.clear();
console.log("\n");

/**
 * Verifica e exibe as informações fornecidas pelo paciente.
 * Se algum valor estiver faltando, exibe um erro correspondente.
 */
Object.entries(paciente).forEach(([key, value]) => {
  value === null
    ? console.error(`Faltaram algumas informações  ( ${key} )`)
    : console.log(`%c${key} verificado(a)! `, "color:green");
});

/**
 * Valida se todas as informações do paciente foram preenchidas.
 * @type {boolean}
 */
const pacienteValido = Object.values(paciente).every((value) => value != null);

pacienteValido
  ? console.log("\n%cPaciente valido! ", "color: blue")
  : console.error("\n%cPaciente Invalido! ", "color: red");

console.log("\n"); // Apenas adicionando um espaço 󰯖
console.table(paciente);
console.log("\n");
