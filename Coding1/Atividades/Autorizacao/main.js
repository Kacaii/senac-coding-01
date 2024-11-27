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
      console.log("\u0007 Olá, Cliente!");
      break;
    case "Funcionário":
      console.log("\u0007 Olá, Funcionário!");
      break;
    default:
      console.error("Usuário inválido:" + usr);
      Deno.exit(1);
  }
}

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
            Voce eh um cliente um funcionario?

            1 - Funcionário.
            2 - Cliente.
            3 - Sair.

                                     Pedro Ayres, 2024
=======================================================
`);

  switch (atendimentoUsuario) {
    case "1":
      console.clear();
      atendimento("Funcionário");
      break;
    case "2":
      console.clear();
      atendimento("Cliente");
      break;
    case "3":
      console.clear();
      Deno.exit(0);
  }
}

// Executa o programa principal.
if (import.meta.main) {
  console.clear();
  main();
}
