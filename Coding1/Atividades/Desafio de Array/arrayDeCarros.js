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
    console.log("\nLista de carros disponíveis:");
    console.table(LocadoraDeCarros.listaParaInteragir);
  },

  /** Exibe a quantidade de carros na lista. */
  exibeQuantidade() {
    console.log(
      `\nTemos um total de %c${LocadoraDeCarros.listaParaInteragir.length} %ccarros disponíveis!\n`,
      "color:green; text-weight: bold",
      "color:",
    );
  },

  /**
   * Recebe input do usuário.
   *
   * @param {string} mensagemPrompt - Mensagem a ser exibida ao usuário.
   * @returns {string | undefined} Retorna o input do usuário.
   */
  recebeInput(mensagemPrompt) {
    const input = prompt(mensagemPrompt)?.trim();
    return input && !LocadoraDeCarros.EXIT_COMMANDS.has(input)
      ? input
      : undefined;
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
    if (!id) {
      LocadoraDeCarros.exibeLista();
      LocadoraDeCarros.exibeMensagemFeedback("foi removido."); // Mensagem padrão.
      return; // Early return
    }

    const parsedID = parseInt(id); // ID do carro a ser removido

    if (
      !isNaN(parsedID) &&
      parsedID >= 0 &&
      parsedID < LocadoraDeCarros.listaParaInteragir.length
    ) {
      const [nomeCarroRemovido] = LocadoraDeCarros.listaParaInteragir.splice(
        parsedID,
        1,
      ); // Remove o carro da lista.
      LocadoraDeCarros.exibeLista(); // Exibe a lista atualizada.
      LocadoraDeCarros.exibeMensagemFeedback(
        "foi removido da lista!",
        nomeCarroRemovido,
        "red",
      );
    } else {
      LocadoraDeCarros.exibeLista();
      LocadoraDeCarros.exibeMensagemFeedback("foi removido"); // Mensagem padrão.
    }
  },

  /** Inicia um `while` loop onde o usuário pode continuar removendo os carros. */
  LoopRemovendoCarros() {
    console.log(
      "\nGostaria de %cREMOVER %cmais alguns? ",
      "color:red",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarRemocao = confirm("");

    LocadoraDeCarros.exibeLista();

    removendoCarros: while (continuarRemocao) {
      const idCarroSelecionado = LocadoraDeCarros.recebeInput(
        "\nInsira o ID do carro ou deixe em branco para sair.\n\n>",
      );

      if (
        !idCarroSelecionado ||
        LocadoraDeCarros.EXIT_COMMANDS.has(idCarroSelecionado)
      ) {
        continuarRemocao = false;
        break removendoCarros;
      }

      LocadoraDeCarros.removeCarro(idCarroSelecionado);
    }

    LocadoraDeCarros.exibeLista();
  },

  /** Inicia a interação com o usuário. */
  iniciarRemocaoDeCarros() {
    LocadoraDeCarros.exibeLista();

    console.log(
      "\nGostaria de %cREMOVER %calgum carro da lista? ",
      "color:red",
      "color:",
    );

    const idCarroInicial = LocadoraDeCarros.recebeInput(
      "\nInsira o ID do carro ou deixe em branco para sair.\n\n>",
    );

    if (idCarroInicial) {
      LocadoraDeCarros.removeCarro(idCarroInicial);
      LocadoraDeCarros.LoopRemovendoCarros();
    }
  },

  /**
   * Adiciona o carro no final da lista passando o nome como argumento.
   *
   * @param {string} [nomeCarro] - Nome do carro a ser adicionado.
   */
  adicionaCarro(nomeCarro) {
    if (!nomeCarro) {
      LocadoraDeCarros.exibeLista(); // Atualizando
      LocadoraDeCarros.exibeMensagemFeedback("foi adicionado");
      return; // Early return
    }

    LocadoraDeCarros.listaParaInteragir.push(nomeCarro); // Adiciona o carro na lista
    LocadoraDeCarros.exibeLista();
    LocadoraDeCarros.exibeMensagemFeedback("adicionado!", nomeCarro, "green");
  },

  /** Inicia um `while` loop onde o usuário pode continuar adicionando os carros. */
  LoopAdicionandoCarros() {
    console.log(
      "\nGostaria de %cADICIONAR %cmais alguns? ",
      "color:green",
      "color:",
    );

    /**
     * Inicia um `while` loop caso valor seja `true`.
     * @type {boolean} */
    let continuarAdicao = confirm("");

    LocadoraDeCarros.exibeLista();

    adicionandoCarros: while (continuarAdicao) {
      const carroParaAdicionar = LocadoraDeCarros.recebeInput(
        "\nInsira o nome do carro ou deixe em branco para sair.\n\n>",
      );

      if (
        !carroParaAdicionar ||
        LocadoraDeCarros.EXIT_COMMANDS.has(carroParaAdicionar)
      ) {
        continuarAdicao = false;
        break adicionandoCarros;
      }

      LocadoraDeCarros.adicionaCarro(carroParaAdicionar);
    }

    LocadoraDeCarros.exibeLista();
  },

  /** Inicia a interação com o usuário. */
  iniciarAdicaoDeCarros() {
    LocadoraDeCarros.exibeLista();

    console.log(
      "\nGostaria de %cADICIONAR %calgum carro na lista? ",
      "color:green",
      "color:",
    );

    const nomeCarroInicial = LocadoraDeCarros.recebeInput(
      "\nInsira o nome do carro ou deixe em branco para sair.\n\n>",
    );

    if (nomeCarroInicial) {
      LocadoraDeCarros.adicionaCarro(nomeCarroInicial);
      LocadoraDeCarros.LoopRemovendoCarros();
    }
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
  console.error("%cErro ao ler o arquivo de dados.", "color:red");
  console.error(
    "%cExiste um arquivo chamado `data.json` na pasta atual? ",
    "color:red",
  );
}
