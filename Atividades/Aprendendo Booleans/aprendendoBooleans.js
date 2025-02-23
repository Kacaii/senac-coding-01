/* Estou adicionando algumas anotações nas atividades mais antigas pra facilitar
 * a leitura e a explicação de como elas funcionam.
 *
 * Se parou para ver meus códigos com o intuito de aprender como eu construia
 * esses scripts mais simples, eu fico feliz. ദ്ദി(ᵔᗜᵔ)
 *
 * Você vai encontrar alguns comentários como "@type {boolean}" ou coisa parecida
 * escrita por aí. Dependendo das ferramentas (programas) que você está usando,
 * eles podem te ajudar a restringir os tipos das variáveis. ( textos, números, booleanos, etc..)
 *
 * Pessoalmente eu gosto de começar meus scripts com um _console.clear()_.
 * Não é realmente necessário, mas eu gosto de manter a minha tela limpinha.
 */

console.clear();

/* `confirm()` é uma função que retorna um valor booleano ( true ou false ).
 * A gente pode usar esse valor retornado em um `if` pra verificar se o visitante pode
 * ou não entrar na casa.
 */

/**
 * Indica se a porta está aberta
 * @type {boolean}
 */
const portaAberta = confirm("A porta está aberta? 󰠚");

/* Um `Set` não é muito diferente de um array. A principal diferença é que um Set
 * não pode guardar valores repetidos, é bem útil.
 */

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

console.clear(); // Limpando o console de novo.

/* Esse aqui é um operador ternário.
 * que é a mesma coisa que um `if else` só que mais compacto,
 * pra quando você não quer escrever muito.
 *
 * É a mesma coisa que escrever:
 *
 * if (portaAberta) {
 *     return "aberta! "
 * } else {
 *     return "fechada! "
 * }
 */
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
function podeEntrar() {
  // Se a porta estiver fechada, nem adianta perguntar.
  const resposta = portaAberta
    ? prompt("\nEu posso entrar? \n\n>")?.trim()?.toLowerCase() || null
    : null;

  if (!resposta) return false;
  return respostasPossiveis.has(resposta);
}

// Mais um operador ternário.
podeEntrar()
  ? console.log("\n%cEntrei! 󰩈\n", "color:green")
  : console.log("\n%cNão consegui entrar \n", "color:red");
