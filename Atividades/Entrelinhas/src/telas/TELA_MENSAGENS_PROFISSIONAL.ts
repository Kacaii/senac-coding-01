import { Tela } from "../types/index.d.ts";
import { exibirTela } from "../main.ts";
import { green } from "@std/fmt/colors";

/**
 * ```help
 * ███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
 * ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
 * █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
 * ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
 * ███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
 * ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
 * ========================================================================================
 *
 *   ==> Mensagens (Profissional)
 *
 *   ...mensagens
 *
 *                                                                         Beekeepers, 2024
 * ========================================================================================
 * ```
 */
export const TELA_MENSAGENS_PROFISSIONAL: Tela = {
  nome: "TelaMensagensProfissional",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
`,
  subtitulo: "==> Exibindo conversa mais recente:",
  conteudo: `
10:09                                                                                   
bom dia!                                                                                
                                                                 Maria das Dores | 10:19
                                                             Bom dia! Como posso ajudar?
10:38                                                                                   
fui atacado por lobos minha camisa rasgou                                               
                                                                                        
                                                                 Maria das Dores | 10:38
                                                                       misericórdia.. 🙀
________________________________________________________________________________________
`,
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  main(): void {
    prompt(`Pressione ENTER para ${green("VOLTAR")}`);
    exibirTela("TelaDaCostureira"); // Voltando ao menu
  },
};
