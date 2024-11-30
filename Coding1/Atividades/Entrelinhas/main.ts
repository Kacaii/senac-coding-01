import { TELA_PRINCIPAL, TELA_CLIENTE } from "./Telas/TELA_PRINCIPAL.ts";

// type Usuario = "Cliente" | "Profissional"; // Vou usar isso depois
type NomeTela = "TelaPrincipal" | "TelaCliente" | "TelaProfissional";

export type Tela = {
  nome: NomeTela;
  conteudo: string;
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
 * O script busca o nome no {@linkcode MapaDeTelas} e exibe o conteudo no console.
 */
function exibirTela(tela: NomeTela) {
  console.log(MapaDeTelas.get(tela)!.conteudo);
}

// TODO: Implementar funcionalidade principal  '
function main() {
  exibirTela("TelaPrincipal");
  prompt("> ");
}

if (import.meta.main) {
  console.clear(); // Limpe a tela antes de tudo
  main();
}
