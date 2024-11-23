/**
 * Módulo que gerencia uma locadora de carros, permitindo adicionar, remover
 * e listar carros, além de interagir com o usuário por meio do console.
 *
 * A lista é iniciada vazia. Para adicionar itens,
 * utilize o método {@linkcode carregarLista} antes de iniciar a interação.
 *
 * @example Exemplo de uso:
 * ```ts ignore
 * import { assertEquals } from "@std/assert";
 * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
 * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
 *
 * // Importando o arquivo de dados.
 *
 * await minhaLocadora.carregarLista("./api/carros_3.json"); // Importando o arquivo de dados.
 * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 1", "Carro 2", "Carro 3"]); // Verificando a lista de carros.
 * assertEquals(minhaLocadora.exibirQuantidade(), "Temos um total de 3 carros disponíveis!"); // Exibindo a quantidade de carros na lista.
 *
 * // Removendo um carro.
 *
 * minhaLocadora.removerCarro("0"); // Mensagem no console: Carro 1 foi removido!
 * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 2", "Carro 3"]);
 *
 * // Adicionando um carro.
 *
 * minhaLocadora.adicionarCarro("Carro 4"); // Mensagem no console: Carro 4 adicionado na lista!
 * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 2", "Carro 3", "Carro 4"]);
 *
 * // Limpando a lista.
 *
 * minhaLocadora.limparLista();
 * assertEquals(minhaLocadora.listaParaInteragir, []);
 * ```
 */
export class LocadoraDeCarros {
  /**
   * Lista de carros para interação.
   * Adicione items com {@linkcode carregarLista} antes de começar a interação.
   *
   * @type {string[]} - Inicia vazia.
   */
  listaParaInteragir = [];

  /**
   * Limpa a lista de carros.
   *
   * @see {@linkcode listaParaInteragir}
   *
   * @example Exemplo de uso:
   * ```ts
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * await minhaLocadora.carregarLista("./api/carros_3.json"); // Importando o arquivo de dados.
   * minhaLocadora.limparLista();
   * assertEquals(minhaLocadora.listaParaInteragir, [])
   * ```
   *
   * @returns {void} Não retorna nada.
   */
  limparLista() {
    this.listaParaInteragir = [];
  }

  /**
   * Exibe uma mensagem de ajuda no console.
   *
   * @example Exemplo de uso:
   * ```ts ignore
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * minhaLocadora.help(); // Exibindo a mensagem de ajuda.
   * ```
   *
   * @returns {void} Não retorna nada.
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
   * @example Exemplo de uso:
   * ```ts ignore
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * minhaLocadora.exibirLista(); // Exibindo a lista de carros.
   * ```
   *
   * @returns {void} Não retorna nada.
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
   * Exibe a quantidade de carros disponíveis na lista.
   *
   * @example Exemplo de uso:
   * ```ts
   * // Impedindo logs inesperados.
   * console.log = () => {}; // Travando console.log()
   *
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * await minhaLocadora.carregarLista("./api/carros_3.json"); // Importando o arquivo de dados.
   * assertEquals(minhaLocadora.exibirQuantidade(), "Temos um total de 3 carros disponíveis!"); // Exibindo a quantidade de carros na lista.
   * ```
   *
   * @returns {string} - Mensagem originada pela função.
   */
  exibirQuantidade() {
    console.log(
      `Temos um total de %c${this.listaParaInteragir.length} %ccarros disponíveis!`,
      "color:green; text-weight: bold",
      "color:",
    );
    return `Temos um total de ${this.listaParaInteragir.length} carros disponíveis!`;
  }

  /**
   * Carrega a lista de carros importando um arquivo JSON.
   *
   * @example Carregando a lista de carros
   * ```ts
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * await minhaLocadora.carregarLista("./api/carros_3.json"); // Importando o arquivo de dados.
   * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 1", "Carro 2", "Carro 3"]); // Verificando a lista de carros.
   * ```
   *
   * @param {string | URL} lista - Arquivo JSON contendo a lista de carros.
   * @returns {Promise<void>} Não retorna nada.
   * @throws {Deno.errors.NotFound} Caso o arquivo não seja encontrado.
   */
  async carregarLista(lista) {
    try {
      // Carregando o arquivo de dados
      const data = await Deno.readTextFile(lista);
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
   * @example Exemplo de uso:
   * ```ts ignore
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * const carro = minhaLocadora.receberInput("Insira o nome do carro ou deixe em branco para sair."); // Exibindo a mensagem.
   * ```
   *
   * @param {string} mensagemPrompt - Mensagem a ser exibida ao usuário.
   * @returns {string?} O input do usuário ou `null`.
   */
  receberInput(mensagemPrompt) {
    const input = prompt(mensagemPrompt)?.trim();
    return input || null;
  }

  /**
   * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
   *
   * @example Exibindo mensagem sobre remoção de um carro
   * ```ts
   * // Impedindo logs inesperados.
   * console.log = () => {}; // Travando console.log()
   *
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * assertEquals(minhaLocadora.exibirMensagemFeedback("foi removido da lista!", "Carro 1", "red"), "Carro 1 foi removido da lista!");
   * assertEquals(minhaLocadora.exibirMensagemFeedback("adicionado na lista!", "Carro 2", "green"), "Carro 2 adicionado na lista!");
   * assertEquals(minhaLocadora.exibirMensagemFeedback("foi removido"), "Nenhum carro foi removido");
   * ```
   *
   * @param {string} mensagem - Mensagem a ser exibida no console.
   * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
   * @default "Nenhum carro"
   * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
   * @default "yellow"
   * @returns {string} - Mensagem formatada para ser exibida no console.
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
    return `${nomeDoCarro} ${mensagem}`;
  }

  /**
   * Remove o carro da lista passando o ID como argumento.
   *
   * @example Removendo o primeiro carro de uma lista:
   * ```ts
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
   *
   * @param {string} id - ID do carro a ser removido.
   * @returns {string?} - Nome do carro removido ou `null` caso o ID não seja válido.
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
      return null;
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
    return nomeCarroRemovido;
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
      const idCarroSelecionado = this.receberInput(
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
   * @example Exemplo de uso:
   * ```ts ignore
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * minhaLocadora.iniciarRemocaoDeCarros(); // Iniciando a remoção de carros.
   * ```
   *
   * > [!WARNING]
   * > Não pode ser utilizado com a lista vazia.
   *
   * @see {@linkcode removerCarro}
   * @see {@linkcode #executarLoopDeRemocao}
   *
   * @returns {void} Não retorna nada.
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
    const idCarroInicial = this.receberInput(
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
   * ```ts
   * // Impedindo logs inesperados.
   * console.log = () => {}; // Travando console.log()
   * console.table = () => {}; // Travando console.table()
   * console.clear = () => {}; // Travando console.clear()
   *
   * import { assertEquals } from "@std/assert";
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * minhaLocadora.adicionarCarro("Carro 1");
   * assertEquals(minhaLocadora.listaParaInteragir, ["Carro 1"])
   * ```
   *
   * @param {string} nomeCarro - Nome do carro a ser adicionado.
   * @returns {string?} - Nome do carro adicionado ou `null` caso o nome seja inválido.
   */
  adicionarCarro(nomeCarro) {
    if (!nomeCarro) {
      this.exibirLista(); // Atualizando
      this.exibirMensagemFeedback("foi adicionado");
      // this.exibirQuantidade();
      return null; // Early return
    }

    this.listaParaInteragir.push(nomeCarro); // Adiciona o carro na lista
    this.exibirLista();
    this.exibirMensagemFeedback("adicionado!", nomeCarro, "green");
    return nomeCarro;
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
      const carroParaAdicionar = this.receberInput(
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
   * ```ts ignore
   * import { LocadoraDeCarros } from "./LocadoraDeCarros.js";
   * const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
   *
   * minhaLocadora.iniciarAdicaoDeCarros(); // Iniciando a adição de carros.
   * ```
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
    const nomeCarroInicial = this.receberInput(
      "Insira o nome do carro ou deixe em branco para sair.\n\n>",
    );

    if (nomeCarroInicial) {
      this.adicionarCarro(nomeCarroInicial);
      this.#executarLoopDeAdicao();
    }
  }
}
