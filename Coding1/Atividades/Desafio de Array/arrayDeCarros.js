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

const LocadoraDeCarros = {
  /**
   * @readonly
   * @type {string[]} - Comandos para interromper o loop.
   */
  EXIT_COMMANDS: [":q", ":exit"],

  /**
   * Limpa a tela, e então exibe a tabela passada como argumento.
   *
   * @param {string[]} tabela
   */
  exibeTabela(tabela) {
    console.clear();
    console.log(`
█░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█ 
█░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀
`);
    console.log(` Lista de carros disponíveis:`);
    console.table(tabela);
  },

  /**
   * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
   *
   * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
   * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
   * @param {string} [mensagem=""] - Mensagem a ser exibida no console.
   *
   * @example Após adicionar um carro.
   *
   * ```javascript
   * exibeMensagemFeedback("Toyota Camry", "green", "adicionado!");
   * ```
   *
   * Exibe uma mensagem no console com o nome do carro em VERDE.
   *
   * @example Após remover um carro.
   *
   * ```javascript
   * exibeMensagemFeedback("Honda Accord", "red", "foi removido da lista!");
   * ```
   *
   * Exibe uma mensagem no console com o nome do carro em VERMELHO.
   *
   * @example Comportamento padrão.
   *
   * ```
   * exibeMensagemFeedback(undefined, undefined, "foi removido da lista!")
   *
   * exibeMensagemFeedback(undefined, undefined, "foi adicionado!")
   * ```
   *
   * Exibe uma mensagem no console escrito "Nenhum carro foi removido" (ou adicionado).
   */
  exibeMensagemFeedback(
    nomeDoCarro = "Nenhum carro",
    corTexto = "yellow",
    mensagem = "",
  ) {
    console.log(
      `%c${nomeDoCarro} %c${mensagem}`,
      `color:${corTexto}`,
      "color:white",
    );
  },

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
   * ```javascript
   * const listaDeCarros = ["Toyota Camry", "Honda Accord", "Ford Mustang"]
   * removecarro(listaDeCarros, "1")
   * console.log(listaDeCarros) = ["Toyota Camry", "Ford Mustang"] // "Honda Accord" removido
   * ```
   *
   * @param {string[]} lista - Lista de carros a ser alterada.
   * @param {string} [id] - ID do carro a ser removido.
   */
  removeCarro(lista, id) {
    // Verifica se o input está vazio.
    if (!id?.trim()) {
      this.exibeTabela(listaDeCarros);
      this.exibeMensagemFeedback(undefined, undefined, "foi removido.");
      return;
    }

    const parsedID = parseInt(id); // Transforma ID em número.

    if (parsedID >= 0 && parsedID < lista.length) {
      const [nomeCarroRemovido] = lista.splice(parsedID, 1); // Remove o carro da lista.
      this.exibeTabela(listaDeCarros); // Exibe a lista atualizada.
      this.exibeMensagemFeedback(
        nomeCarroRemovido,
        "red",
        "foi removido da lista!",
      );
    } else {
      this.exibeTabela(listaDeCarros); // Exibe a lista atualizada.
      console.log(
        "\n%cNenhum carro %cfoi removido.",
        "color: yellow",
        "color:",
      ); // Feedback
    }
  },

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
   * ```javascript
   * const listaDeCarros = ["Toyota Camry", "Ford Mustang"]
   * adicionaNomeCarro(listaDeCarros, "Fusquinha")
   * console.log(listaDeCarros) = ["Toyota Camry", "Ford Mustang", "Fusquinha"] // :D
   * ```
   *
   * @param {string[]} lista - Lista de carros.
   * @param {string} [ nomeCarro ] - Nome do carro a ser adicionado.
   */
  adicionaNomeCarro(lista, nomeCarro) {
    // Verifica se o input está vazio.
    if (!nomeCarro?.trim()) {
      this.exibeTabela(listaDeCarros); // Atualizando
      return; // Early return
    }
    lista.push(nomeCarro); // Adiciona o carro na lista
    this.exibeTabela(listaDeCarros); // Atualizando
    this.exibeMensagemFeedback(nomeCarro, "green", "adicionado!");
  },
};

LocadoraDeCarros.exibeTabela(listaDeCarros); // Inicia o código.

/**
 * Resposta que o usuário passou para o prompt.
 * Contém o ID do carro em formato de `string`, ou `null`.
 */
const idCarroPrompt = prompt(
  "\n( Opcional ) Gostaria de REMOVER algum carro da lista? \n\nInsira o ID do carro ou deixe em branco.\n>",
)?.trim();

// Removendo carro da lista.
LocadoraDeCarros.removeCarro(listaDeCarros, idCarroPrompt);

/**
 * Inicia um `while` loop caso valor seja `true`.
 * @type {boolean} */
let removerMais = confirm("\nGostaria de REMOVER mais alguns?");

LocadoraDeCarros.exibeTabela(listaDeCarros); // Limpando de novo

// Remova quantos carros quanto quiser, um de cada vez.
while (removerMais) {
  // `const` pode ser declarada aqui pois é descartada após cada iteração do loop.
  const inputUsuarioID = prompt(
    "\nInsira o ID do carro ou deixe em branco. \n\n>",
  )?.trim();

  if (
    !inputUsuarioID ||
    LocadoraDeCarros.EXIT_COMMANDS.includes(inputUsuarioID)
  ) {
    removerMais = false;
    break;
  }

  LocadoraDeCarros.removeCarro(listaDeCarros, inputUsuarioID);
}

LocadoraDeCarros.exibeTabela(listaDeCarros); // Atualizando após o loop.

/**
 * Resposta que o usuário passou para o prompt.
 * Pode conter o nome do carro em formato de `string`, ou `null`.
 */
const nomeCarroPrompt = prompt(
  "\nGostaria de ADICIONAR algum carro na lista? \n\nInsira o nome do carro ou deixe em branco. \n>",
)?.trim();

// Adicionando carro á lista.
LocadoraDeCarros.adicionaNomeCarro(listaDeCarros, nomeCarroPrompt);

/**
 * Inicia um `while` loop caso valor seja `true`.
 * @type {boolean} */
let adicionarMais = confirm("\nGostaria de adicionar mais alguns?");

// Adicione quantos carros quanto quiser, um de cada vez.
while (adicionarMais) {
  // `const` pode ser declarada aqui pois é descartada após cada iteração do loop.
  const inputUsuarioCarro = prompt(
    "\nInsira o nome do carro ou deixe em branco. \n\n>",
  )?.trim();

  if (
    !inputUsuarioCarro ||
    LocadoraDeCarros.EXIT_COMMANDS.includes(inputUsuarioCarro)
  ) {
    adicionarMais = false;
    break;
  }

  LocadoraDeCarros.adicionaNomeCarro(listaDeCarros, inputUsuarioCarro);
}

LocadoraDeCarros.exibeTabela(listaDeCarros);

console.log(
  `\nTemos um total de %c${listaDeCarros.length} %ccarros disponíveis!\n`,
  "color:green",
  "color:",
);
