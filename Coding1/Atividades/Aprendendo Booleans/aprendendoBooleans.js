/**
 * Indica se a porta está aberta
 * @type {boolean}
 */
const portaAberta = true;

/**
 * Conjunto de respostas possíveis que concedem permissão para entrar.
 * @type {Set<string>}
 */
const respostasPossiveis = new Set([
  "sim",
  "claro",
  "pode",
  "entre",
  "venha",
  "vem",
  "chegue",
]);

/**
 * Verifica o estado atual da porta (aberta ou fechada).
 * @returns {string} O estado da porta: "aberta! " ou "fechada! ".
 */
function verificaPorta() {
  return portaAberta ? "aberta! " : "fechada! ";
}

console.clear();
console.log(`\n A porta esta ${verificaPorta()}`);

/**
 * @type {string | null}
 */
const respostaOuNull = prompt("\nEu posso entrar? \n\n>");

/**
 * Verifica se a pessoa pode entrar.
 *
 * A verificação consiste em duas condições:
 *
 * 1. A porta precisa estar aberta.
 * 2. A resposta dada precisa estar dentro das respostas permitidas.
 *
 * @returns {boolean} Retorna `true` se a pessoa pode entrar, caso contrário `false`.
 */
function verificaSePodeEntrar() {
  if (respostaOuNull == null || respostaOuNull.trim() === "") {
    throw new Error("Mensagem vazia ").message;
  }
  return respostasPossiveis.has(respostaOuNull.toLowerCase()) && portaAberta;
}

verificaSePodeEntrar()
  ? console.log("\n%cEntrei! 󰩈\n", "color:green")
  : console.log("\n%cNão consegui entrar \n", "color:red");
