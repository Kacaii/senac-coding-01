/**
 * Indica se a porta está aberta
 * @type {boolean}
 */
const portaAberta = true;

/**
 * Conjunto de respostas possíveis que concedem permissão para entrar.
 * @type {Set<string>}
 */
const respostasPossiveis = new Set(["sim", "pode", "entre", "venha", "chegue"]);

/**
 * Verifica o estado atual da porta (aberta ou fechada).
 * @returns {string} O estado da porta: "aberta! " ou "fechada! ".
 */
const verificaPorta = () => (portaAberta ? "aberta! " : "fechada! ");

console.clear();
console.log(`\n A porta esta ${verificaPorta()}`);

const pedePraEntrar = prompt("Eu posso entrar? \n\n>").toLocaleLowerCase();

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
function verificaEntrada() {
  return respostasPossiveis.has(pedePraEntrar) && portaAberta;
}

verificaEntrada()
  ? console.log("%cEntrei! 󰩈", "color:green")
  : console.log("%cNão consegui entrar ", "color:red");
