console.clear();

/**
 * Módulo contendo métodos e recursos necessários para interação do usuário com a lista de carros.
 */
const LocadoraDeCarros = {
  /**
   * Lista de carros para interação.
   * Adicione items antes de começar a interação.
   *
   * @type {string[]}
   */
  listaParaInteragir: [],

  /**
   * Comandos para interromper a execução do loop.
   *
   * @type {Set<string>}
   */
  EXIT_COMMANDS: new Set([":q", ":quit", ":exit"]),

  /** Limpa a tela, e então exibe a lista de carros. */
  exibeLista() {
    console.clear();
    console.log(`
█░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█ 
█░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀ `);
    console.log("Lista de carros disponíveis");
    console.table(this.listaParaInteragir);
  },

  /** Exibe a quantidade de carros na lista. */
  exibeQuantidade() {
    console.log(
      `\nTemos um total de %c${this.listaParaInteragir.length} %ccarros disponíveis!\n`,
      "color:green; text-weight: bold",
      "color:",
    );
  },

  /**
   * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
   *
   * @param {string} mensagem - Mensagem a ser exibida no console.
   * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
   * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
   */
  exibeMensagemFeedback(
    mensagem,
    nomeDoCarro = "Nenhum carro",
    corTexto = "yellow",
  ) {
    console.log(
      `%c${nomeDoCarro} %c${mensagem}`,
      `color:${corTexto};text-weight: bold`,
      "color:white",
    );
  },

  /**
   * Remove o carro da lista passando o ID como argumento.
   *
   * @param {string} [id] - ID do carro a ser removido.
   */
  removeCarro(id) {
    if (!id || this.EXIT_COMMANDS.has(id)) {
      this.exibeLista();
      this.exibeMensagemFeedback("foi removido."); // Mensagem padrão.
      return; // Early return
    }

    const parsedID = parseInt(id); // ID do carro a ser removido

    if (
      !isNaN(parsedID) &&
      parsedID >= 0 &&
      parsedID < this.listaParaInteragir.length
    ) {
      const [nomeCarroRemovido] = this.listaParaInteragir.splice(parsedID, 1); // Remove o carro da lista.
      this.exibeLista(); // Exibe a lista atualizada.
      this.exibeMensagemFeedback(
        "foi removido da lista!",
        nomeCarroRemovido,
        "red",
      );
    } else {
      this.exibeLista();
      this.exibeMensagemFeedback("foi removido"); // Mensagem padrão.
    }
  },

  /** Inicia a interação com o usuário. */
  iniciarRemocaoDeCarros() {
    this.exibeLista();

    console.log(
      "\nGostaria de %cREMOVER %calgum carro da lista? ",
      "color:red",
      "color:",
    );

    const idCarroInicial = prompt(
      "\nInsira o ID do carro ou deixe em branco para sair.\n\n>",
    )?.trim();

    // Removendo carro da lista.
    this.removeCarro(idCarroInicial);

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

    this.exibeLista();

    removendoCarros: while (continuarRemocao) {
      const idCarroSelecionado = prompt(
        "\nInsira o ID do carro ou deixe em branco para sair.\n\n>",
      )?.trim();

      if (!idCarroSelecionado || this.EXIT_COMMANDS.has(idCarroSelecionado)) {
        continuarRemocao = false;
        break removendoCarros;
      }

      this.removeCarro(idCarroSelecionado);
    }

    this.exibeLista();
  },

  /**
   * Adiciona o carro no final da lista passando o nome como argumento.
   *
   * @param {string} [nomeCarro] - Nome do carro a ser adicionado.
   */
  adicionaCarro(nomeCarro) {
    if (!nomeCarro || this.EXIT_COMMANDS.has(nomeCarro)) {
      this.exibeLista(); // Atualizando
      this.exibeMensagemFeedback("foi adicionado");
      return; // Early return
    }

    this.listaParaInteragir.push(nomeCarro); // Adiciona o carro na lista
    this.exibeLista();
    this.exibeMensagemFeedback("adicionado!", nomeCarro, "green");
  },

  /** Inicia a interação com o usuário. */
  iniciarAdicaoDeCarros() {
    this.exibeLista();

    console.log(
      "\nGostaria de %cADICIONAR %calgum carro na lista? ",
      "color:green",
      "color:",
    );

    const nomeCarroInicial = prompt(
      "\nInsira o nome do carro ou deixe em branco para sair.\n\n>",
    )?.trim();

    // Adicionando carro á lista.
    this.adicionaCarro(nomeCarroInicial);

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

    this.exibeLista();

    adicionandoCarros: while (continuarAdicao) {
      const carroParaAdicionar = prompt(
        "\nInsira o nome do carro ou deixe em branco para sair.\n\n>",
      )?.trim();

      if (!carroParaAdicionar || this.EXIT_COMMANDS.has(carroParaAdicionar)) {
        continuarAdicao = false;
        break adicionandoCarros;
      }

      this.adicionaCarro(carroParaAdicionar);
    }

    this.exibeLista();
  },
};

// Verifica e transforma o arquivo de dados em um objeto JSON.
try {
  const data = Deno.readTextFileSync("./data.json");
  LocadoraDeCarros.listaParaInteragir = JSON.parse(data);
  LocadoraDeCarros.iniciarRemocaoDeCarros(); // Iniciando
  LocadoraDeCarros.iniciarAdicaoDeCarros();
  LocadoraDeCarros.exibeQuantidade();
} catch (_erro) {
  LocadoraDeCarros.listaParaInteragir = []; // Definindo a lista como vazia em caso de erro.
  console.clear();
  console.error("%cErro ao ler o arquivo de dados. 󰘦", "color:red");
}
