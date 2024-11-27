// TODO: Adicionar pontuacao e acentos

/** @typedef {"Cliente" | "Funcionário"} Usuario */

/**
 * Realiza o atendimento do usuário.
 *
 * @param {Usuario} usr - O tipo de usuário, deve ser "Cliente" ou "Funcionário".
 * @returns {void} Nao retorna nada, apenas realiza o atendimento.
 *
 * @example Realizando o atendimento
 * ```ts
 * atendimento("Cliente");
 * // Realiza o atendimento do usuário como cliente.
 *
 * atendimento("Funcionário");
 * // Realiza o atendimento do usuário como funcionário.
 * ```
 */
function atendimento(usr) {
  switch (usr) {
    case "Cliente":
      break;
    case "Funcionário":
      break;
    default:
      console.error("Usuário inválido:" + usr);
      Deno.exit(1);
  }
}
