type NomeTela = "TelaPrincipal" | "TelaCliente" | "TelaProfissional";

type Tela = {
  nome: NomeTela;
  conteudo: string;
  executarFuncionalidade: () => void;
};

const TELA_PRINCIPAL: Tela = {
  nome: "TelaPrincipal",
  conteudo: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
========================================================================================

  = MENU PRINCIPAL = Selecione um usuário ⬇️

  1 - Profissional
  2 - Cliente
  3 - Sair
                                                                       Pedro Ayres, 2024
========================================================================================
`,
  executarFuncionalidade() {
    const usuarioSelecionado = prompt("\nEscolha");

    switch (usuarioSelecionado) {
      case "1": {
        exibirTela("TelaCliente");
        break;
      }
      case "2": {
        exibirTela("TelaProfissional");
        break;
      }
    }
  },
};

// TODO: Implementar TELA_CLIENTE  '
export const TELA_CLIENTE: Tela = {
  nome: "TelaCliente",
  conteudo: `== Tela Cliente ==`,
  executarFuncionalidade() {},
};

// TODO: Implementar TELA_PROFISSIONAL  '
export const TELA_PROFISSIONAL: Tela = {
  nome: "TelaProfissional",
  conteudo: `== Tela Profissional ==`,
  executarFuncionalidade() {},
};

/**
 * Mapa contendo todas as telas do script
 * Use `MapaDeTelas.get()` passando o nome de uma {@linkcode NomeTela} para acessar seus conteudo.
 */
const MapaDeTelas = new Map<NomeTela, Tela>([
  ["TelaPrincipal", TELA_PRINCIPAL],
  ["TelaCliente", TELA_CLIENTE],
  ["TelaProfissional", TELA_PRINCIPAL],
]);

/**
 * Exibe a tela passando seu nome com argumento
 * O script busca o nome no {@linkcode MapaDeTelas} e exibe o conteúdo no console.
 */
function exibirTela(tela: NomeTela) {
  console.log(MapaDeTelas.get(tela)?.conteudo);
  MapaDeTelas.get(tela)?.executarFuncionalidade();
}

// Inicia o script
if (import.meta.main) {
  console.clear(); // Limpe a tela antes de tudo
  exibirTela("TelaPrincipal");
}
