/** @typedef {"Cliente" | "Funcionario"} Usuario */

const TOCAR_SINO = "\u0007";

/**
 * Realiza o atendimento do usuário.
 *
 * @example Realizando o atendimento
 * ```ts
 * atendimento("Cliente");
 * // Realiza o atendimento do usuário como cliente.
 *
 * atendimento("Funcionário");
 * // Realiza o atendimento do usuário como funcionário.
 * ```
 *
 * @param {Usuario} usr - O tipo de usuário, deve ser "Cliente" ou "Funcionário".
 * @returns {void} Não retorna nada, apenas realiza o atendimento.
 */
function realizarAtendimento(usr) {
  switch (usr) {
    case "Cliente":
      console.log(TOCAR_SINO + "Olá, Cliente!");
      break;
    case "Funcionario":
      console.log(TOCAR_SINO + "Olá, Funcionário!");
      break;
    default:
      console.error("Usuário inválido:" + usr);
      Deno.exit(1);
  }
}

/**
 * Vi alguns devs fazendo algo parecido em Python. 
 *
 * ```javascript
 * if (import.meta.main) {
 *   console.clear();
 *   main();
 * }
 * ```
 *
 * @returns {void} Não retorna nada, apenas inicia o script principal.
 */
function main() {
  const atendimentoUsuario = prompt(`
██╗     ██╗██╗   ██╗██████╗  █████╗ ██████╗ ██╗ █████╗ 
██║     ██║██║   ██║██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗
██║     ██║██║   ██║██████╔╝███████║██████╔╝██║███████║
██║     ██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗██║██╔══██║
███████╗██║ ╚████╔╝ ██║  ██║██║  ██║██║  ██║██║██║  ██║
╚══════╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

=======================================================
           Bem vindo(a) à Livraria Livarinha.
           Voce é um cliente um funcionário?

           1 - Funcionário.
           2 - Cliente.
           3 - Sair                ©️ Pedro Ayres, 2024
=======================================================
`);

  switch (atendimentoUsuario) {
    case "1":
      console.clear();
      realizarAtendimento("Funcionario");
      break;
    case "2":
      console.clear();
      realizarAtendimento("Cliente");
      break;
    case "3":
      console.clear();
      Deno.exit(0);
  }
}

// Funciona apenas se o script for executado diretamente.
if (import.meta.main) {
  console.clear();
  main();
}
