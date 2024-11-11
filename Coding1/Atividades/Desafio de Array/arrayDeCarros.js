/**
 * Coleção de métodos e recursos necessários para interação do usuário com a lista de carros.
 * @class
 * @property {string[]} listaParaInteragir
 */
class LocadoraDeCarros {
  /** @type {string[]} */
  #listaParaInteragir = [];

  /**
   * @readonly
   * @type {Set<string>}
   */
  #EXIT_COMMANDS = new Set([":q", ":quit", ":exit"]);

  /**
   * @constructor
   * @param {string[]} listaParaInteragir - Lista de carros a ser usada.
   */
  constructor(listaParaInteragir) {
    this.#listaParaInteragir = listaParaInteragir;
  }

  /** Limpa a tela, e então exibe a lista de carros. */
  exibeLista() {
    console.clear();
    console.log(`
█░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█ 
█░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀
`);
    console.log(` Lista de carros disponíveis:`);
    console.table(this.#listaParaInteragir);
  }

  /**
   * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
   *
   * @param {string} mensagem - Mensagem a ser exibida no console.
   * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
   * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
   */
  #exibeMensagemFeedback(
    mensagem,
    nomeDoCarro = "Nenhum carro",
    corTexto = "yellow",
  ) {
    console.log(
      `%c${nomeDoCarro} %c${mensagem}`,
      `color:${corTexto}`,
      "color:white",
    );
  }

  /**
   * Remove o carro da lista passando o ID como argumento.
   *
   * @param {string} [id] - ID do carro a ser removido.
   */
  #removeCarro(id) {
    if (!id || this.#EXIT_COMMANDS.has(id)) {
      this.exibeLista();
      this.#exibeMensagemFeedback("foi removido."); // Mensagem padrão.
      return;
    }

    const parsedID = parseInt(id); // ID do carro a ser removido

    if (parsedID >= 0 && parsedID < this.#listaParaInteragir.length) {
      const [nomeCarroRemovido] = this.#listaParaInteragir.splice(parsedID, 1); // Remove o carro da lista.
      this.exibeLista(); // Exibe a lista atualizada.
      this.#exibeMensagemFeedback(
        "foi removido da lista!",
        nomeCarroRemovido,
        "red",
      );
    } else {
      this.exibeLista();
      this.#exibeMensagemFeedback("foi removido"); // Mensagem padrão.
    }
  }

  /**
   * Inicia a interação com o usuário.
   */
  iniciarRemocaoDeCarros() {
    console.log(
      "\nGostaria de %cREMOVER %calgum carro da lista? ",
      "color:red",
      "color:",
    );

    const idCarroInicial = prompt(
      "\nInsira o ID do carro ou deixe em branco.\n\n>",
    )?.trim();

    // Removendo carro da lista.
    this.#removeCarro(idCarroInicial);

    if (!idCarroInicial || this.#EXIT_COMMANDS.has(idCarroInicial)) return;

    console.log(
      "\nGostaria de %cREMOVER %cmais alguns? ",
      "color:red",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarRemocao = confirm("");

    this.exibeLista(); // Limpando de novo

    // Remova quantos carros quanto quiser, um de cada vez.
    while (continuarRemocao) {
      const idCarroSelecionado = prompt(
        "\nInsira o ID do carro ou deixe em branco. \n\n>",
      )?.trim();

      if (!idCarroSelecionado || this.#EXIT_COMMANDS.has(idCarroSelecionado)) {
        continuarRemocao = false;
        break;
      }

      this.#removeCarro(idCarroSelecionado);
    }

    this.exibeLista();
  }

  /**
   * Adiciona o carro no final da lista passando o nome como argumento.
   *
   * @param {string[]} lista - Lista de carros.
   * @param {string} [ nomeCarro ] - Nome do carro a ser adicionado.
   */
  #adicionaCarro(lista, nomeCarro) {
    // Verifica se o input está vazio antes de adicionar.
    if (!nomeCarro || this.#EXIT_COMMANDS.has(nomeCarro)) {
      this.exibeLista(); // Atualizando
      return; // Early return
    }
    lista.push(nomeCarro); // Adiciona o carro na lista
    this.exibeLista();
    this.#exibeMensagemFeedback("adicionado!", nomeCarro, "green");
  }

  /**
   * Inicia a interação com o usuário.
   */
  iniciarAdicaoDeCarros() {
    console.log(
      "\nGostaria de %cADICIONAR %calgum carro na lista? ",
      "color:green",
      "color:",
    );

    const nomeCarroInicial = prompt(
      "\nInsira o nome do carro ou deixe em branco.\n\n>",
    )?.trim();

    // Adicionando carro á lista.
    this.#adicionaCarro(this.#listaParaInteragir, nomeCarroInicial);

    if (!nomeCarroInicial || this.#EXIT_COMMANDS.has(nomeCarroInicial)) {
      this.#exibeMensagemFeedback("foi adicionado.");
      return;
    }

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

    // Adicione quantos carros quanto quiser, um de cada vez.
    while (continuarAdicao) {
      const carroParaAdicionar = prompt(
        "\nInsira o nome do carro ou deixe em branco.\n\n>",
      )?.trim();

      if (!carroParaAdicionar || this.#EXIT_COMMANDS.has(carroParaAdicionar)) {
        continuarAdicao = false;
        break;
      }

      this.#adicionaCarro(this.#listaParaInteragir, carroParaAdicionar);
    }

    this.exibeLista();
  }
}

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

const locadora = new LocadoraDeCarros(listaDeCarros);

locadora.exibeLista(); // Inicia o código.
locadora.iniciarRemocaoDeCarros();
locadora.iniciarAdicaoDeCarros();

console.log(
  `\nTemos um total de %c${listaDeCarros.length} %ccarros disponíveis!\n`,
  "color:green",
  "color:",
);
