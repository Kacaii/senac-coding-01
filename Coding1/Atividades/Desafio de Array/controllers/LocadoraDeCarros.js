import { parseArgs } from "@std/cli";

const args = parseArgs(Deno.args, { alias: { help: "h", data: "d" } });

/**
 * Módulo que gerencia uma locadora de carros, permitindo adicionar, remover
 * e listar carros, além de interagir com o usuário por meio do console.
 *
 * A lista é iniciada vazia. Para adicionar itens,
 * utilize o método {@linkcode LocadoraDeCarros.carregarLista()} antes de iniciar a interação.
 *
 * @example Exemplo de uso:
 *
 * ```js
 * import { assertEquals } from "@std/assert";
 * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
 * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
 *
 * await minhaLocadora.carregarLista("./api/carros_3.json"); // Importando o arquivo de dados.
 * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 1", "Carro 2", "Carro 3"]); // Verificando a lista de carros.
 * ```
 */
export class LocadoraDeCarros {
  /**
   * Lista de carros para interação.
   * Adicione items com `carregarLista()` antes de começar a interação.
   *
   * @see {@linkcode carregarLista}
   *
   * @type {string[]} - Inicia vazia.
   */
  listaParaInteragir = [];

  /**
   * Limpa a lista de carros.
   *
   * @see {@linkcode listaParaInteragir}
   *
   * @returns {void}
   */
  limparLista() {
    this.listaParaInteragir = [];
  }

  /**
   * Exibe uma mensagem de ajuda no console.
   *
   * @returns {void}
   *
   * @example Utilizando a flag `--help`
   *
   * ```help
   * ===========================
   * Atividade: Desafio de Array
   * ===========================
   *
   * Como utilizar:
   *
   * deno run --allow-read arrayDeCarros.js --data <caminho para o arquivo de dados>
   *
   * Comandos:
   *
   * --help, -h: Mostra este menu de ajuda.
   * --data, -d: Caminho para o arquivo de dados.
   * ```
   */
  help() {
    console.log(`
===========================
Atividade: Desafio de Array
===========================

Como utilizar:

deno run --allow-read arrayDeCarros.js --data <caminho para o arquivo de dados>

Comandos:

--help, -h: Mostra este menu de ajuda.
--data, -d: Caminho para o arquivo de dados.
  `);
  }

  /**
   * Limpa a tela, exibe uma mensagem personalizada e então a lista de carros.
   *
   * @see {@linkcode listaParaInteragir}
   *
   * @returns {void}
   *
   * @example Mensagem exibida no console:
   *
   * ```plaintext
   * █░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█
   * █░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█
   * ▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀
   * ```
   */
  exibirLista() {
    console.clear();
    console.log(`
█░░ █▀▀█ █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ █▀▀█ 
█░░ █░░█ █░░ █▄▄█ █░░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀░▀▀ ▀░░▀ `);
    console.log("\nLista de carros disponíveis:");
    console.table(this.listaParaInteragir);
    this.exibirQuantidade();
  }

  /**
   * Exibe a quantidade de carros na lista.
   *
   * @see {@linkcode listaParaInteragir}
   *
   * @returns {void}
   *
   * @example Mensagem exibida no console:
   *
   * ```plaintext
   * Temos um total de <número de carros> carros disponíveis!`,
   * ```
   */
  exibirQuantidade() {
    console.log(
      `Temos um total de %c${this.listaParaInteragir.length} %ccarros disponíveis!`,
      "color:green; text-weight: bold",
      "color:",
    );
  }

  /**
   * Carrega a lista de carros importando um arquivo JSON.
   *
   * @see {@linkcode listaParaInteragir}
   *
   * @param {string | URL } [lista] - Arquivo JSON contendo a lista de carros.
   * @returns {Promise<void>}
   * @throws {Deno.errors.NotFound} Caso o arquivo não seja encontrado.
   *
   * @example Carregando a lista de carros
   *
   * ```js
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * await minhaLocadora.carregarLista("./api/carros_3.json"); // Importando o arquivo de dados.
   * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 1", "Carro 2", "Carro 3"]); // Verificando a lista de carros.
   * ```
   */
  async carregarLista(lista) {
    try {
      // Carregando o arquivo de dados
      const data = await Deno.readTextFile(args.data || lista);
      this.listaParaInteragir = JSON.parse(data);
    } catch (err) {
      // Caso arquivo não seja encontrado.
      if (err instanceof Deno.errors.NotFound) {
        this.listaParaInteragir = []; // Definindo a lista como vazia em caso de erro.
        console.error("Erro ao ler o arquivo de dados.  ");
        throw err;
      }
    }
  }

  /**
   * Recebe input do usuário utilizando o método `prompt()`.
   *
   * @param {string} mensagemPrompt - Mensagem a ser exibida ao usuário.
   * @returns {string?} Retorna o input do usuário ou `null`.
   */
  #receberInput(mensagemPrompt) {
    const input = prompt(mensagemPrompt)?.trim();
    return input || null;
  }

  /**
   * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
   *
   * @param {string} mensagem - Mensagem a ser exibida no console.
   * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
   * @default "Nenhum carro"
   * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
   * @default "yellow"
   * @returns {string} - Mensagem formatada para ser exibida no console.
   *
   * @example Exibindo mensagem sobre remoção de um carro
   *
   * ```js
   * // Impedindo logs inesperados.
   * console.log = () => {}; // Travando console.log()
   * console.table = () => {}; // Travando console.table()
   * console.clear = () => {}; // Travando console.clear()
   *
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * assertEquals(minhaLocadora.exibirMensagemFeedback( "foi removido da lista!", "Carro 1", "red" ), "%cCarro 1 %cfoi removido da lista!");
   * assertEquals(minhaLocadora.exibirMensagemFeedback( "adicionado na lista!", "Carro 2", "green" ), "%cCarro 2 %cadicionado na lista!");
   * assertEquals(minhaLocadora.exibirMensagemFeedback( "foi removido" ), "%cNenhum carro %cfoi removido");
   * ```
   */
  exibirMensagemFeedback(
    mensagem,
    nomeDoCarro = "Nenhum carro",
    corTexto = "yellow",
  ) {
    console.log(
      `%c${nomeDoCarro} %c${mensagem}`,
      `color: ${corTexto}; text-weight: bold;`,
      "color: white;",
    );
    return `%c${nomeDoCarro} %c${mensagem}`;
  }

  /**
   * Remove o carro da lista passando o ID como argumento.
   *
   * @param {string} id - ID do carro a ser removido.
   * @returns {void}
   *
   * @example Removendo o primeiro carro de uma lista:
   *
   * ```js
   * // Impedindo logs inesperados.
   * console.log = () => {}; // Travando console.log()
   * console.table = () => {}; // Travando console.table()
   * console.clear = () => {}; // Travando console.clear()
   *
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros();
   *
   * minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"]
   * minhaLocadora.removerCarro("0") // Mensagem no console: Carro 1 foi removido!
   * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 2", "Carro 3"])
   * ```
   */
  removerCarro(id) {
    const parsedID = parseInt(id); // Precisamos que o `id`` seja um número.

    // Early return se o valor for inválido.
    if (
      parsedID == null ||
      isNaN(parsedID) ||
      parsedID < 0 ||
      parsedID > this.listaParaInteragir.length
    ) {
      this.exibirLista();
      this.exibirMensagemFeedback("foi removido."); // Mensagem padrão.
      // this.exibirQuantidade();
      return;
    }

    // Removendo o carro da lista e guardando o nome em uma variável
    // para ser exibido no console.
    const [nomeCarroRemovido] = this.listaParaInteragir.splice(parsedID, 1);
    this.exibirLista(); // Exibe a lista atualizada, agora sem o carro removido.
    this.exibirMensagemFeedback(
      "foi removido da lista!",
      nomeCarroRemovido, // Exibindo qual carro foi removido.
      "red",
    );
  }

  /**
   * Inicia um `while` loop onde o usuário pode continuar removendo os carros.
   *
   * @returns {void}
   */
  #executarLoopDeRemocao() {
    console.log(
      "\nGostaria de %cREMOVER %cmais alguns? ",
      "color:red",
      "color:",
      "\n==================================================",
    );

    /**  Inicia o loop `removendoCarros` caso o valor seja `true`. */
    let continuarRemocao = confirm("");

    this.exibirLista();

    removendoCarros: while (continuarRemocao) {
      const idCarroSelecionado = this.#receberInput(
        "\nInsira o ID do carro ou deixe em branco para sair." +
          "\n==================================================" +
          "\n>",
      );

      if (!idCarroSelecionado) {
        continuarRemocao = false;
        break removendoCarros;
      }

      this.removerCarro(idCarroSelecionado);
    }
  }

  /**
   * Inicia a interação com o usuário.
   *
   * @see {@linkcode removerCarro}
   * @see {@linkcode #executarLoopDeRemocao}
   *
   * @returns {void}
   * @throws {Deno.errors.InvalidData} Caso não haja carros na lista ao iniciar a remoção.
   */
  iniciarRemocaoDeCarros() {
    if (this.listaParaInteragir.length === 0) {
      // Caso não haja carros na lista.
      throw new Deno.errors.InvalidData("Não há carros na lista.");
    }

    this.exibirLista();

    console.log(
      "\nGostaria de %cREMOVER %calgum carro da lista? ",
      "color:red; text-weight: bold",
      "color:",
      "\n==================================================",
    );

    /** @type {string?} */
    const idCarroInicial = this.#receberInput(
      "Insira o ID do carro ou deixe em branco para sair.\n\n>",
    );

    if (idCarroInicial) {
      this.removerCarro(idCarroInicial);
      this.#executarLoopDeRemocao();
    }
  }

  /**
   * Adiciona o carro no final da lista passando o nome como argumento.
   *
   * @param {string} nomeCarro - Nome do carro a ser adicionado.
   * @returns {void}
   */
  adicionarCarro(nomeCarro) {
    if (!nomeCarro) {
      this.exibirLista(); // Atualizando
      this.exibirMensagemFeedback("foi adicionado");
      // this.exibirQuantidade();
      return; // Early return
    }

    this.listaParaInteragir.push(nomeCarro); // Adiciona o carro na lista
    this.exibirLista();
    this.exibirMensagemFeedback("adicionado!", nomeCarro, "green");
    // this.exibirQuantidade();
  }

  /**
   * Inicia um `while` loop onde o usuário pode continuar adicionando os carros.
   *
   * @see {@linkcode adicionarCarro}
   *
   * @returns {void}
   */
  #executarLoopDeAdicao() {
    console.log(
      "\nGostaria de %cADICIONAR %cmais alguns? ",
      "color:green",
      "color:",
      "\n==================================================",
    );

    /** Inicia o loop `removendoCarros` caso o valor seja `true`. */
    let continuarAdicao = confirm("");

    this.exibirLista();

    adicionandoCarros: while (continuarAdicao) {
      const carroParaAdicionar = this.#receberInput(
        "\nInsira o nome do carro ou deixe em branco para sair." +
          "\n====================================================" +
          "\n>",
      );

      if (!carroParaAdicionar) {
        continuarAdicao = false;
        break adicionandoCarros;
      }

      this.adicionarCarro(carroParaAdicionar);
    }
  }

  /**
   * Inicia a interação com o usuário.
   *
   * @see {@linkcode adicionarCarro}
   * @see {@linkcode #executarLoopDeAdicao}
   *
   * @returns {void}
   */
  iniciarAdicaoDeCarros() {
    this.exibirLista();

    console.log(
      "\nGostaria de %cADICIONAR %calgum carro na lista? ",
      "color:green; text-weight: bold",
      "color:",
      "\n==================================================",
    );

    /** @type {string?} */
    const nomeCarroInicial = this.#receberInput(
      "Insira o nome do carro ou deixe em branco para sair.\n\n>",
    );

    if (nomeCarroInicial) {
      this.adicionarCarro(nomeCarroInicial);
      this.#executarLoopDeAdicao();
    }
  }
}
