/**
 * Input passado pelo usuário utilizando a função `prompt()`.
 * Pode conter os seguintes valores:
 *
 * - Uma `string`.
 * - Uma `string` **VAZIA**.
 * - `null`.
 *
 * @typedef {string | null} respostaPrompt
 */

/**
 * Lista com a qual iremos interagir.
 * Contém um montão de carros.
 *
 * @type {string[]} */
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
  console.log(`
█░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█ 
█░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀
`);
  console.log(` Lista de carros disponíveis:`);
  console.table(listaDeCarros);
}

/**
 * Remove o carro da lista passando o ID como argumento.
 * Durante a execução, o input é *transformado* em número.
 *
 * > [!NOTE]
 * > Nada será removido se lhe for passado um ID vazio ou um número **negativo**.
 * > O número precisa ser menor do que o tamanho da lista.
 *
 * ### Exemplo
 *
 * @example Removendo o segundo carro da lista.
 * ```Javascript
 * const listaDeCarros = ["Toyota Camry", "Honda Accord", "Ford Mustang"]
 * removecarro(listaDeCarros, "1")
 * console.log(listaDeCarros) = ["Toyota Camry", "Ford Mustang"] // "Honda Accord" removido
 * ```
 *
 * @param {string[]} lista - Lista de carros a ser alterada.
 * @param {respostaPrompt} id - ID do carro a ser removido.
 */
function removeCarro(lista, id) {
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
      `\n%c${nomeCarroRemovido} %cfoi removido da lista!`, // Feedback
      "color: red",
      "color: white",
    );
  } else {
    atualizaTabela(); // Exibe a lista atualizada.
    console.log("\n%cNenhum carro %cfoi removido.", "color: yellow", "color:"); // Feedback
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

// Removendo carro da lista.
removeCarro(listaDeCarros, idCarroPrompt);

/**
 * Inicia un `while` loop caso valor seja `true`.
 * @type {boolean} */
let removerMais = confirm("\nGostaria de REMOVER mais alguns?");

atualizaTabela(); // Limpando de novo

let inputUsuarioID; // Declarando fora para poder mudar o  valor dentro do loop.

// Remova quantos carros quanto quiser, um de cada vez.
while (removerMais) {
  inputUsuarioID = prompt("\nInsira o ID do carro ou deixe em branco. \n\n>");

  if (
    inputUsuarioID == null ||
    inputUsuarioID.trim() === "" ||
    inputUsuarioID.trim() === "exit" ||
    inputUsuarioID.trim() === "q"
  ) {
    removerMais = false;
    break;
  }

  removeCarro(listaDeCarros, inputUsuarioID);
}

atualizaTabela(); // Atualizando após o loop.

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
 * Adiciona o carro no *final* da lista, passando um nome como argumento.
 * Pode ser utilizado em qualquer lista.
 *
 * > [!NOTE]
 * > Nada será adicionado se lhe for passado uma string vazia.
 *
 * ### Exemplo
 *
 * @example Adicionando um fusquinha.
 * ```Javascript
 * const listaDeCarros = ["Toyota Camry", "Ford Mustang"]
 * adicionaNomeCarro(listaDeCarros, "Fusquinha")
 * console.log(listaDeCarros) = ["Toyota Camry", "Ford Mustang", "Fusquinha"] // :D
 * ```
 *
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

// Adicionando carro á lista.
adicionaNomeCarro(listaDeCarros, nomeCarroPrompt);

/**
 * Inicia un `while` loop caso valor seja `true`.
 * @type {boolean} */
let adicionarMais = confirm("\nGostaria de adicionar mais alguns?");

let inputUsuarioNome; // Declarando fora para poder mudar o  valor dentro do loop.

// Adicione quantos carros quanto quiser, um de cada vez.
while (adicionarMais) {
  inputUsuarioNome = prompt(
    "\nInsira o nome do carro ou deixe em branco. \n\n>",
  );

  if (
    inputUsuarioNome == null ||
    inputUsuarioNome.trim() === "" ||
    inputUsuarioNome.trim() === "exit" ||
    inputUsuarioNome.trim() === "q"
  ) {
    adicionarMais = false;
    break;
  }

  adicionaNomeCarro(listaDeCarros, inputUsuarioNome);
}

atualizaTabela();

console.log(
  `\nTemos um total de %c${listaDeCarros.length} %ccarros disponíveis!\n`,
  "color:green",
  "color:",
);
