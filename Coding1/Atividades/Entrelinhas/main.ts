type Usuario = "Cliente" | "Profissional"; // Vou usar isso depois
type NomeTela = "TelaPrincipal" | "TelaCliente" | "TelaProfissional";
type Tela = {
  nome: NomeTela;
  conteudo: string;
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

  1 - Profissional
  2 - Cliente
  3 - Sair
                                                                       Pedro Ayres, 2024
========================================================================================
`,
};

/**
 * Mapa contendo todas as telas do script
 * Use `MapaDeTelas.get()` passando o nome de uma {@linkcode NomeTela} para acessar seus conteudo.
 */
const MapaDeTelas = new Map<NomeTela, Tela>([
  ["TelaPrincipal", TELA_PRINCIPAL],
]);

/**
 * Exibe a tela passando seu nome com argumento
 * O script busca o nome no {@linkcode MapaDeTelas} e exibe o conteudo no console.
 */
function exibirTela(tela: NomeTela) {
  console.log(MapaDeTelas.get(tela)?.conteudo);
}

function main() {
  console.clear();
  exibirTela("TelaPrincipal");
  prompt("> ");
}

if (import.meta.main) {
  main();
}
