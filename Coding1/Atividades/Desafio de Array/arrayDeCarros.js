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

/** Limpa a tela, e então exibe a tabela de carros disponíveis. */
function atualizaTabela() {
  console.clear();
  console.log(`\nLista de carros disponíveis:\n`);
  console.table(listaDeCarros);
}

/**
 * Remove o carro da lista passando o ID como argumento
 * @param {string[]} lista - Lista de carros.
 * @param {respostaPrompt} id - ID do carro a ser removido
 */
function removeCarro(lista, id) {
  // Verifica se o input está vazio.
  if (id === null || id.trim() === "") {
    atualizaTabela();
    console.log("\n%cNenhum carro %cfoi removido.", "color: yellow", "color:"); // Early return.
    return;
  }
  const parsedID = parseInt(id); // Transforma ID em número.

  if (parsedID >= 0 && parsedID < lista.length) {
    const [nomeCarroRemovido] = lista.splice(parsedID, 1); // Remove o carro da lista.
    atualizaTabela(); // Exibe a lista atualizada.
    console.log(
      `\n%c${nomeCarroRemovido} %cfoi removido da lista!`, // Feedback para o usuário.
      "color: red",
      "color: white",
    );
  } else {
    atualizaTabela(); // Exibe a lista atualizada.
    console.log("\n%cNenhum carro %cfoi removido.", "color: yellow", "color:");
  }
}

atualizaTabela(); // Inicia o código.

/**
 * Resposta que o usuário passou para o prompt.
 * Contém o ID do carro em formato de `string`, ou `null`.
 *
 * @type {respostaPrompt}
 */
const idCarroPrompt = prompt(
  "\n( Opcional ) Gostaria de REMOVER algum carro da lista? \n\nInsira o ID do carro ou deixe em branco.\n>",
);

removeCarro(listaDeCarros, idCarroPrompt);

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o nome do carro em formato de `string`, ou `null`.
 *
 * @type {respostaPrompt}
 */
const nomeCarroPrompt = prompt(
  "\nGostaria de ADICIONAR algum carro na lista? \n\nInsira o nome do carro ou deixe em branco. \n>",
);

/**
 * Adiciona o carro da lista.
 * @param {string[]} lista - Lista de carros.
 * @param {respostaPrompt} nomeCarro - Nome do carro a ser adicionado.
 */
function adicionaNomeCarro(lista, nomeCarro) {
  // Verifica se o input está vazio.
  if (nomeCarro === null || nomeCarro.trim() === "") {
    atualizaTabela(); // Atualizando
    return; // Early return
  }
  lista.push(nomeCarro); // Adiciona o carro na lista
  atualizaTabela(); // Atualizando
  console.log(`\n%c${nomeCarro} %cadicionado!`, "color:green", "color:)"); // Feedback
}

adicionaNomeCarro(listaDeCarros, nomeCarroPrompt);

/** @type {boolean} */
let continuarAdicionando = confirm("\nGostaria de adicionar mais alguns?");

let inputUsuario; // Declarando fora para poder mudar o  valor dentro do loop.

// Adicione o quanto quiser
while (continuarAdicionando) {
  inputUsuario = prompt("\nInsira o nome do carro ou deixe em branco. \n\n>");

  if (
    inputUsuario == null ||
    inputUsuario.trim() === "" ||
    inputUsuario.trim() === "exit" ||
    inputUsuario.trim() === "q"
  ) {
    continuarAdicionando = false;
    break;
  }

  adicionaNomeCarro(listaDeCarros, inputUsuario);
}

atualizaTabela();

console.log(
  `\nTemos um total de %c${listaDeCarros.length} %ccarros disponíveis!\n`,
  "color:green",
  "color:",
);
