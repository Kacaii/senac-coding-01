console.clear();

/**
 * Indica se a porta está aberta
 * @type {boolean}
 */
const portaAberta = confirm("A porta está aberta? 󰠚");

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

console.clear();
console.log(`\n A porta está ${portaAberta ? "aberta! " : "fechada! "}`);

/**
 * Verifica se o _visitante_ pode entrar.
 * A verificação precisa de duas condições:
 *
 * 1. A porta precisa estar aberta.
 * 2. A resposta do usuário precisa estar dentro das respostas permitidas.
 *
 * @returns {boolean} Retorna `true` se a pessoa pode entrar, caso contrário `false`.
 */
function verificaSePodeEntrar() {
  // Se a porta estiver fechada, nem adianta tentar.
  const resposta = portaAberta
    ? prompt("\nEu posso entrar? \n\n>")?.trim()?.toLowerCase()
    : undefined;

  if (!resposta) return false;

  return respostasPossiveis.has(resposta);
}

verificaSePodeEntrar()
  ? console.log("\n%cEntrei! 󰩈\n", "color:green")
  : console.log("\n%cNão consegui entrar \n", "color:red");
