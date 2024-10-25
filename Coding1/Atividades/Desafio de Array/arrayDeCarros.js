/**
 * @typedef {string | null} respostaPrompt
 */

/** @type {string[]} */
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

/** Nome do carro a ser removido. Inicia como `null`. */
let nomeCarroRemovido = null;

/** Limpa e tela, e então exibe a tabela de carros disponíveis. */
function limpaTelaEExibeTabelaDeCarros() {
  console.clear();
  console.log(`\nLista de carros disponíveis:\n`);
  console.table(listaDeCarros);
}

/**
 * Remove o carro da lista passando o ID como argumento
 * @param {number} id - ID do carro a ser removido
 */
function removeIdCarro(id) {
  if (!isNaN(id) && id >= 0 && id < listaDeCarros.length) {
    nomeCarroRemovido = listaDeCarros.splice(id, 1);
  }
}

limpaTelaEExibeTabelaDeCarros();

/**
 * Resposta que o usuário passou para o prompt.
 * Contém o ID do carro em formato de `string`, ou `null`.
 *
 * @type {respostaPrompt}
 */
const idCarroPrompt = prompt(
  "\n( Opcional ) Gostaria de remover algum carro da lista? \n\nInsira o ID do carro ou deixe em branco.\n>",
);

/**
 * Valida o ID que o usuário passou para o prompt.
 * Retorna um número, ou `NaN`.
 *
 * @param {respostaPrompt} id - ID do Carro a ser removido.
 * @returns {number} Retorna um número, ou `NaN`.
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
 *
 * @type {number}
 */
const idCarroRemovido = validaIdCarro(idCarroPrompt);

// Remove o carro, dado o ID. Não aceita números negativos.
removeIdCarro(idCarroRemovido);

limpaTelaEExibeTabelaDeCarros();

// Feedback para o usuário.
if (nomeCarroRemovido != null) {
  if (idCarroRemovido < listaDeCarros.length && idCarroRemovido >= 0)
    console.log(
      `\n%c${nomeCarroRemovido} %cfoi removido da lista!`,
      "color: red",
      "color:",
    );
  else {
    console.log("\nNenhum carro foi removido da lista");
  }
}

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o nome de um carro, ou null
 *
 * @type {respostaPrompt}
 */
const nomeCarroPrompt = prompt(
  "\nGostaria de adicionar algum carro na lista? \n\nInsira o nome do carro ou deixe em branco. \n>",
);

/**
 * Valida o imput passado para o prompt.
 * Devolve uma das duas opções:
 *
 * - Uma array contendo string com o nome do carro, e `null`
 * - Um array contendo `null` e um Erro
 *
 * @param {respostaPrompt} input - Nome do carro.
 * @returns { string | null } Nome do carro, ou `null`
 */
function validaNomeCarro(input) {
  if (input === null || input.trim() === "") {
    return null;
  } else {
    return input;
  }
}

const nomeCarroNovo = validaNomeCarro(nomeCarroPrompt);

// Verifica se o usuário digitou o nome do carro.
if (nomeCarroNovo != null) {
  listaDeCarros.push(nomeCarroNovo); // Adiciona o carro novo no final da lista
}

limpaTelaEExibeTabelaDeCarros();

// Feedback para o usuário.
if (nomeCarroNovo != null) {
  console.log(`\n%c${nomeCarroNovo} %cadicionado!`, "color:green", "color:)");
}

console.log(
  `\nTemos um total de ${listaDeCarros.length} carros disponíveis!\n`,
);
