import { Tela } from "../types/index.d.ts";
import { exibirTela } from "../main.ts";
import { green } from "@std/fmt/colors";

export const TELA_NOVO_SERVICO: Tela = {
  nome: "TelaNovoServico",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
    `,
  subtitulo: "==> Serviço postado! Aguarde até alguém receber o pedido.",
  conteudo: "", // Essa parte sera preenchida ao ser renderizada
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  main: (): void => {
    prompt(`Pressione ENTER para ${green("VOLTAR")}`);
    exibirTela("TelaDoCliente");
  },
};
