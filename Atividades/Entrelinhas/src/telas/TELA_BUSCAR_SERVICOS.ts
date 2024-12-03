import { Tela, TServico } from "../types/index.d.ts";
import { exibirTela } from "../main.ts";
import { green } from "@std/fmt/colors";

const SERVICOS: TServico[] = [
  {
    id: 123,
    usuario: "JonasBrother",
    categoria: "Cosplay",
    descricao: "Preciso de um cosplay de Power Ranger",
    localizacao: {
      estado: "PE",
      cidade: "Recife",
    },
  },
  {
    id: 124,
    usuario: "JamesBonder",
    categoria: "Reparos",
    descricao: "Meu gato rasgou meu terno",
    localizacao: {
      estado: "PE",
      cidade: "Olinda",
    },
  },
];

function montarLista(servicos: TServico[]): string[] {
  const lista = servicos.map((serv: TServico) => {
    return `
ID: ${serv.id},
CATEGORIA:${serv.categoria},
USUÁRIO: @${serv.usuario},
DESCRIÇÃO: ${serv.descricao},
LOCALIZAÇÃO: ${serv.localizacao.cidade} - ${serv.localizacao.estado}
`;
  });

  return lista;
}

export const TELA_BUSCAR_SERVICOS: Tela = {
  nome: "TelaBuscarServicos",
  ASCII: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================
    `,
  subtitulo: "==> Serviços disponíveis:",
  listaDeOpcoes: montarLista(SERVICOS),
  conteudo: "",
  rodape: `
                                                                        Beekeepers, 2024
========================================================================================
`,
  main: (): void => {
    const opcaoSelecionada = prompt(`Pressione ENTER para ${green("VOLTAR")}`);

    switch (opcaoSelecionada) {
      case "1": {
        // TODO:
        break;
      }
      case "2": {
        // TODO:
        break;
      }
      default: {
        exibirTela("TelaPrincipal"); // Voltando ao menu
      }
    }
  },
};
