console.clear();

/**
 * @typedef {string | null} respostaPrompt
 */

/**
 * Array com varios carros
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

listaDeCarros.forEach((carro, index) => {
  console.log(`Nome: ${carro}, posicao: ${index}`);
});

/**
 * Resposta que o usuario passou para o prompt.
 * Pode conter o numero em formato de string, ou null
 * @type {string | null}
 */
const removeCarroPrompt = prompt(
  "\nBom dia! Escreva o numero do carro que voce gostaria de remover \n\n>",
);

const parsedRemoveCarroPrompt = Number(removeCarroPrompt); // Vai retornar um numero, ou NaN

if (!isNaN(Number(parsedRemoveCarroPrompt))) {
  listaDeCarros.splice(parsedRemoveCarroPrompt, 1);
}

/**
 * Resposta que o usuario passou para o prompt.
 * Pode conter o nome de um carro, ou null
 *
 * @type {respostaPrompt}
 */
const carroPrompt = prompt(
  "\nQual carro voce gostaria de adicionar a lista?\n\n>",
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
function validaCarro(input) {
  // Limpando o Console
  console.clear();
  if (input === null || input === "") {
    return [null, new Error("\nInput vazio!")];
  } else {
    return [input, null];
  }
}

const [nomeDoCarro, erro] = validaCarro(carroPrompt);

if (erro) {
  console.error(erro.message);
} else {
  listaDeCarros.push(nomeDoCarro);
  console.log("\n%cCarro adicionado a lista! \n", "color:green");
}

console.log(`Temos um total de ${listaDeCarros.length} disponiveis`);
console.log(listaDeCarros);
