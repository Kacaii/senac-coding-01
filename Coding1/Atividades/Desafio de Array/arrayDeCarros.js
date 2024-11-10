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

/** Coleção de métodos e recursos necessários para interação do usuário com a lista de carros. */
const LocadoraDeCarros = {
  /**
   * @readonly
   */
  EXIT_COMMANDS: new Set([":q", ":exit"]),

  /**
   * Limpa a tela, e então exibe a tabela passada como argumento.
   *
   * @param {string[]} tabela
   */
  exibeLista(tabela) {
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
    // Verifica se o input está vazio antes de remover.
    if (!id || this.EXIT_COMMANDS.has(id)) {
      this.exibeLista(listaDeCarros);
      this.exibeMensagemFeedback(undefined, undefined, "foi removido.");
      return;
    }

    /** @type {number} ID do carro a ser removido */
    const parsedID = parseInt(id);

    if (parsedID >= 0 && parsedID < lista.length) {
      const [nomeCarroRemovido] = lista.splice(parsedID, 1); // Remove o carro da lista.
      this.exibeLista(listaDeCarros); // Exibe a lista atualizada.
      this.exibeMensagemFeedback(
        nomeCarroRemovido,
        "red",
        "foi removido da lista!",
      );
    } else {
      this.exibeLista(listaDeCarros); // Exibe a lista atualizada.
      this.exibeMensagemFeedback(undefined, undefined, "foi removido");
    }
  },

  /**
   * Inicia a interação com o usuário
   *
   * @param {string[]} lista - Lista de Carros
   */
  iniciarRemocaoDeCarros(lista) {
    console.log(
      "\nGostaria de %cREMOVER %calgum carro da lista? ",
      "color:red",
      "color:",
    );

    const idCarroInicial = prompt(
      "\nInsira o ID do carro ou deixe em branco.\n>",
    )?.trim();

    // Removendo carro da lista.
    this.removeCarro(lista, idCarroInicial);

    if (!idCarroInicial || this.EXIT_COMMANDS.has(idCarroInicial)) return;

    console.log(
      "\nGostaria de %cREMOVER %cmais alguns? ",
      "color:red",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarRemocao = confirm("");

    this.exibeLista(lista); // Limpando de novo

    // Remova quantos carros quanto quiser, um de cada vez.
    while (continuarRemocao) {
      // `const` pode ser declarada aqui pois é descartada após cada iteração do loop.
      const idCarroSelecionado = prompt(
        "\nInsira o ID do carro ou deixe em branco. \n\n>",
      )?.trim();

      if (!idCarroSelecionado || this.EXIT_COMMANDS.has(idCarroSelecionado)) {
        continuarRemocao = false;
        break;
      }

      this.removeCarro(lista, idCarroSelecionado);
    }

    // Exibindo a tabela no final.
    this.exibeLista(lista);
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
  adicionaCarro(lista, nomeCarro) {
    // Verifica se o input está vazio antes de adicionar.
    if (!nomeCarro || this.EXIT_COMMANDS.has(nomeCarro)) {
      this.exibeLista(listaDeCarros); // Atualizando
      return; // Early return
    }
    lista.push(nomeCarro); // Adiciona o carro na lista
    this.exibeLista(listaDeCarros);
    this.exibeMensagemFeedback(nomeCarro, "green", "adicionado!");
  },

  /**
   * Inicia a interação com o usuário
   *
   * @param {string[]} lista - Lista de Carros.
   */
  iniciarAdicaoDeCarros(lista) {
    console.log(
      "\nGostaria de %cADICIONAR %calgum carro na lista? ",
      "color:green",
      "color:",
    );

    const nomeCarroInicial = prompt(
      "\nInsira o nome do carro ou deixe em branco. \n>",
    )?.trim();

    // Adicionando carro á lista.
    this.adicionaCarro(lista, nomeCarroInicial);

    if (!nomeCarroInicial || this.EXIT_COMMANDS.has(nomeCarroInicial)) return;

    console.log(
      "\nGostaria de %cADICIONAR %cmais alguns? ",
      "color:green",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarAdicao = confirm("");

    this.exibeLista(lista);

    // Adicione quantos carros quanto quiser, um de cada vez.
    while (continuarAdicao) {
      // `const` pode ser declarada aqui pois é descartada após cada iteração do loop.
      const carroParaAdicionar = prompt(
        "\nInsira o nome do carro ou deixe em branco. \n\n>",
      )?.trim();

      if (!carroParaAdicionar || this.EXIT_COMMANDS.has(carroParaAdicionar)) {
        continuarAdicao = false;
        break;
      }

      this.adicionaCarro(lista, carroParaAdicionar);
    }

    // Exibindo a tabela no final.
    this.exibeLista(lista);
  },
};

LocadoraDeCarros.exibeLista(listaDeCarros); // Inicia o código.
LocadoraDeCarros.iniciarRemocaoDeCarros(listaDeCarros);
LocadoraDeCarros.iniciarAdicaoDeCarros(listaDeCarros);

console.log(
  `\nTemos um total de %c${listaDeCarros.length} %ccarros disponíveis!\n`,
  "color:green",
  "color:",
);
