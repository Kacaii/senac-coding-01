import * as log from "@std/log"; // Biblioteca padrão do Deno

console.clear();

/**
 * Módulo contendo métodos e recursos necessários para interação do usuário com a lista de carros.
 */
const LocadoraDeCarros = {
  /**
   * Lista de carros para interação, inicia vazia.
   * Adicione items com `carregarLista()` antes de começar a interação.
   *
   * @type {string[]}
   */
  listaParaInteragir: [],

  /**
   * Digite um dos comandos abaixo para interromper a execução do loop.
   *
   * @type {Set<string>}
   */
  EXIT_COMMANDS: new Set([":q", ":quit", ":exit"]),

  /** Limpa a tela, e então exibe a lista de carros. */
  exibirLista() {
    console.clear();
    console.log(`
█░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█ 
█░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀ `);
    console.log("\nLista de carros disponíveis:");
    console.table(this.listaParaInteragir);
  },

  /** Exibe a quantidade de carros na lista. */
  exibeQuantidade() {
    console.log(
      `Temos um total de %c${this.listaParaInteragir.length} %ccarros disponíveis!\n`,
      "color:green; text-weight: bold",
      "color:",
    );
  },

  /**
   * Recebe input do usuário.
   *
   * @param {string} mensagemPrompt - Mensagem a ser exibida ao usuário.
   * @returns {string?} Retorna o input do usuário ou undefined se o usuário inserir um comando de saída.
   */
  recebeInput(mensagemPrompt) {
    const input = prompt(mensagemPrompt)?.trim();
    return input && !this.EXIT_COMMANDS.has(input) ? input : null;
  },

  /**
   * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
   *
   * @param {string} mensagem - Mensagem a ser exibida no console.
   * @param {string?} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
   * @param {string?} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
   */
  exibeMensagemFeedback(
    mensagem,
    nomeDoCarro = "Nenhum carro",
    corTexto = "yellow",
  ) {
    console.log(
      `%c${nomeDoCarro} %c${mensagem}`,
      `color:${corTexto}; text-weight: bold`,
      "color:white",
    );
  },

  /**
   * Remove o carro da lista passando o ID como argumento.
   *
   * @param {string} id - ID do carro a ser removido.
   */
  removeCarro(id) {
    // Early return
    if (
      !id ||
      isNaN(parseInt(id)) ||
      parseInt(id) < 0 ||
      parseInt(id) > this.listaParaInteragir.length
    ) {
      this.exibirLista();
      this.exibeMensagemFeedback("foi removido."); // Mensagem padrão.
      this.exibeQuantidade();
      return;
    }

    // Remove o carro da lista.
    const [nomeCarroRemovido] = this.listaParaInteragir.splice(parseInt(id), 1);
    this.exibirLista(); // Exibe a lista atualizada.
    this.exibeMensagemFeedback(
      "foi removido da lista!",
      nomeCarroRemovido,
      "red",
    );
    this.exibeQuantidade();
  },

  /** Inicia um `while` loop onde o usuário pode continuar removendo os carros. */
  LoopRemovendoCarros() {
    console.log(
      "Gostaria de %cREMOVER %cmais alguns? ",
      "color:red",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarRemocao = confirm("");

    this.exibirLista();

    removendoCarros: while (continuarRemocao) {
      const idCarroSelecionado = this.recebeInput(
        "\nInsira o ID do carro ou deixe em branco para sair.\n\n>",
      );

      if (!idCarroSelecionado || this.EXIT_COMMANDS.has(idCarroSelecionado)) {
        continuarRemocao = false;
        break removendoCarros;
      }

      this.removeCarro(idCarroSelecionado);
    }

    this.exibirLista();
  },

  /** Inicia a interação com o usuário. */
  iniciarRemocaoDeCarros() {
    if (this.listaParaInteragir.length === 0) {
      throw new Deno.errors.InvalidData("Não há carros na lista.");
    }

    this.exibirLista();

    console.log(
      "\nGostaria de %cREMOVER %calgum carro da lista? ",
      "color:red; text-weight: bold",
      "color:",
    );

    const idCarroInicial = this.recebeInput(
      "Insira o ID do carro ou deixe em branco para sair.\n\n>",
    );

    if (idCarroInicial) {
      this.removeCarro(idCarroInicial);
      this.LoopRemovendoCarros();
    }
  },

  /**
   * Adiciona o carro no final da lista passando o nome como argumento.
   *
   * @param {string} nomeCarro - Nome do carro a ser adicionado.
   */
  adicionaCarro(nomeCarro) {
    if (!nomeCarro) {
      this.exibirLista(); // Atualizando
      this.exibeMensagemFeedback("foi adicionado");
      this.exibeQuantidade();
      return; // Early return
    }

    this.listaParaInteragir.push(nomeCarro); // Adiciona o carro na lista
    this.exibirLista();
    this.exibeMensagemFeedback("adicionado!", nomeCarro, "green");
    this.exibeQuantidade();
  },

  /** Inicia um `while` loop onde o usuário pode continuar adicionando os carros. */
  LoopAdicionandoCarros() {
    console.log(
      "Gostaria de %cADICIONAR %cmais alguns? ",
      "color:green",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarAdicao = confirm("");

    this.exibirLista();

    adicionandoCarros: while (continuarAdicao) {
      const carroParaAdicionar = this.recebeInput(
        "\nInsira o nome do carro ou deixe em branco para sair.\n\n>",
      );

      if (!carroParaAdicionar || this.EXIT_COMMANDS.has(carroParaAdicionar)) {
        continuarAdicao = false;
        break adicionandoCarros;
      }

      this.adicionaCarro(carroParaAdicionar);
    }

    this.exibirLista();
  },

  /** Inicia a interação com o usuário. */
  iniciarAdicaoDeCarros() {
    this.exibirLista();

    console.log(
      "\nGostaria de %cADICIONAR %calgum carro na lista? ",
      "color:green; text-weight: bold",
      "color:",
    );

    const nomeCarroInicial = this.recebeInput(
      "\nInsira o nome do carro ou deixe em branco para sair.\n\n>",
    );

    if (nomeCarroInicial) {
      this.adicionaCarro(nomeCarroInicial);
      this.LoopAdicionandoCarros();
    }
  },

  /**
   * Carrega a lista de carros importando um arquivo JSON.
   *
   * @param {string | URL} lista - Arquivo JSON contendo a lista de carros.
   */
  carregarLista(lista) {
    try {
      // Carregando o arquivo de dados.
      const data = Deno.readTextFileSync(lista);
      this.listaParaInteragir = JSON.parse(data);
    } catch (err) {
      // Caso arquivo não seja encontrado.
      if (err instanceof Deno.errors.NotFound) {
        this.listaParaInteragir = []; // Definindo a lista como vazia em caso de erro.
        console.clear();
        log.critical(
          "Erro ao ler o arquivo de dados.\nO arquivo JSON não existe na pasta atual?  \n",
        );
        throw err;
      }
    }
  },
};

LocadoraDeCarros.carregarLista("./data.json"); // Importando o arquivo de dados.
LocadoraDeCarros.iniciarRemocaoDeCarros(); // Iniciando
LocadoraDeCarros.iniciarAdicaoDeCarros();
LocadoraDeCarros.exibeQuantidade();
