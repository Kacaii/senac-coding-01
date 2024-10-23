/**
 * `prompt()` sempre retorna uma string, ou null.
 *
 * @typedef {string | null} respostaPrompt
 */

/**
 * Uma array com vários carros
 *
 * @type {string[]}
 */
const listaDeCarros = [
  "Toyota Camry",
  "Honda Accord",
  "Ford Mustang",
  "Chevrolet Malibu",
  "BMW 3 Series",
  "Audi A4",
  "Nissan Altima",
  "Hyundai Sonata",
  "Kia Optima",
  "Volkswagen Passat",
];

/**
 * Esta função realiza os seguintes comandos:
 *
 * 1. Limpa a tela do terminal.
 * 2. Exibe a tabela de carros disponíveis
 */
function exibeTabelaDeCarros() {
  console.clear();
  console.log(`\nLista de carros disponíveis:\n`);
  console.table(listaDeCarros);
}

exibeTabelaDeCarros();

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o ID em formato de string, ou null.
 * @type {respostaPrompt}
 */
const idCarroPrompt = prompt(
  "\n( Opcional ) Gostaria de remover algum carro da lista? \n\nInsira o ID do carro.\n>",
);

/**
 * Valida o ID que o usuário passou para o prompt.
 * Precisa retornar um número, ou NaN.
 * @param {respostaPrompt} id - ID do Carro a ser removido.
 * @returns {number} Retorna um número, ou NaN
 */
function validaIdCarro(id) {
  if (idCarroPrompt === null || idCarroPrompt.trim() === "") {
    return NaN;
  }
  return Number(id);
}

/**
 * ID do carro, ou um `NaN`.
 * Por algum motivo, NaN também é do tipo número (?)
 * @type {number}
 */
const parsedRemoveCarroPrompt = validaIdCarro(idCarroPrompt);

// Remove o carro, dado o ID
if (!isNaN(parsedRemoveCarroPrompt)) {
  listaDeCarros.splice(parsedRemoveCarroPrompt, 1);
}

exibeTabelaDeCarros();

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o nome de um carro, ou null
 *
 * @type {respostaPrompt}
 */
const carroPrompt = prompt(
  "\nGostaria de adicionar algum carro na lista? \n\nInsira o nome do carro. \n>",
);

/**
 * Valida o imput passado para o prompt.
 * Devolve uma das duas opcoes:
 *
 * - Uma array contendo string com o nome do carro, e null
 * - Um array contendo null e um Erro
 *
 * @param {respostaPrompt} input
 * @returns { [string, null] | [null, Error] }
 */
function validaNomeCarro(input) {
  if (input === null || input === "") {
    return [null, new Error("\nInput vazio!")];
  } else {
    return [input, null];
  }
}

const [nomeDoCarro, erro] = validaNomeCarro(carroPrompt);

if (erro) {
  console.error(erro.message);
} else {
  listaDeCarros.push(nomeDoCarro);
  console.log("\n%cCarro adicionado a lista! \n", "color:green");
}

exibeTabelaDeCarros();
console.log(`\nTemos um total de ${listaDeCarros.length} carros disponíveis!`);
