console.clear();

/**
 * Array de comidas disponíveis.
 * @type {string[]}
 */
const listaDeComidas = ["Banana", "Laranja", "Beterraba"]; // Apresentadas em uma tabela

console.table(listaDeComidas);

/**
 * Solicita ao usuário que insira o nome da fruta desejada e guarda em uma variável
 * @type {string | null}
 */
const inputFruta = prompt("\nInsira o nome da fruta escolhida: \n \n>");

/**
 * Verifica o input fornecido pelo usuário.
 * Garante que o input não seja vazio e converte a fruta para letras minúsculas.
 *
 * @param {string | null} inputFruta - O nome da fruta fornecida pelo usuário.
 * @returns {[string | null, Error | null]} Retorna a fruta em minúsculas ou um erro se o input for inválido.
 */
const verificaInput = (inputFruta) => {
  if (inputFruta === null || inputFruta.trim() === "") {
    return [null, new Error("Input vazio!  ")];
  } else {
    return [inputFruta.toLowerCase(), null];
  }
};

console.clear();

/**
 * Armazena o resultado da verificação do input do usuário.
 * @type {[string | null, Error | null]}
 */
const [frutaDesejada, error] = verificaInput(inputFruta);

if (error) {
  console.error(error.message);
} else {
  console.log("\n");

  /**
   * Exibe informações nutricionais dependendo da fruta escolhida.
   * Se a fruta não estiver na lista, exibe um aviso.
   */
  switch (frutaDesejada) {
    case "banana":
      console.clear();
      console.info("%cRica em potássio!", "color: yellow");
      break;

    case "laranja":
      console.clear();
      console.info("%cRica em vitamina C!", "color: orange");
      break;

    case "beterraba":
      console.clear();
      console.info("%cFaz bem pra circulação!", "color: red");
      break;

    default:
      console.clear();
      console.warn("Precisa ser um item da lista!  ");
  }
}
