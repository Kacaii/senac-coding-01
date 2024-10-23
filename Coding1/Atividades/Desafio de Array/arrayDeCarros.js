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

let carroRemovido = null;

/**
 * Limpa e tela, e então exibe a tabela de carros disponíveis
 */
function limpaTelaEExibeTabelaDeCarros() {
  console.clear();
  console.log(`\nLista de carros disponíveis:\n`);
  console.table(listaDeCarros);
}

limpaTelaEExibeTabelaDeCarros();

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o ID em formato de string, ou null.
 * @type {respostaPrompt}
 */
const idCarroPrompt = prompt(
  "\n( Opcional ) Gostaria de remover algum carro da lista? \n\nInsira o ID do carro ou deixe em branco.\n>",
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
const parsedIdCarro = validaIdCarro(idCarroPrompt);

// Remove o carro, dado o ID
if (!isNaN(parsedIdCarro)) {
  carroRemovido = listaDeCarros.splice(parsedIdCarro, 1);
}

limpaTelaEExibeTabelaDeCarros();

if (carroRemovido != null) {
  if (parsedIdCarro < listaDeCarros.length)
    console.log(
      `\n%c${carroRemovido} %cfoi removido da lista!`,
      "color: red",
      "color:",
    );
  else {
    console.log("Nenhum carro foi removido da lista");
  }
}

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o nome de um carro, ou null
 *
 * @type {respostaPrompt}
 */
const carroPrompt = prompt(
  "\nGostaria de adicionar algum carro na lista? \n\nInsira o nome do carro ou deixe em branco. \n>",
);

/**
 * Valida o imput passado para o prompt.
 * Devolve uma das duas opcoes:
 *
 * - Uma array contendo string com o nome do carro, e null
 * - Um array contendo null e um Erro
 *
 * @param {respostaPrompt} input
 * @returns { string | null }
 */
function validaNomeCarro(input) {
  if (input === null || input.trim() === "") {
    return null;
  } else {
    return input;
  }
}

const nomeDoCarro = validaNomeCarro(carroPrompt);

if (nomeDoCarro != null) {
  listaDeCarros.push(nomeDoCarro);
}

limpaTelaEExibeTabelaDeCarros();
console.log(`\nTemos um total de ${listaDeCarros.length} carros disponíveis!`);
