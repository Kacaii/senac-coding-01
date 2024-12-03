// Importando tipos e interfaces
import { Tela, TNomeDaTela, TExibirTelaOPTS } from "./types/index.d.ts";

// Importando telas
import {
  TELA_PRINCIPAL,
  TELA_CLIENTE,
  TELA_COSTUREIRA,
  TELA_MENSAGENS_CLIENTE,
  TELA_MENSAGENS_PROFISSIONAL,
  TELA_BUSCAR_SERVICOS,
} from "./telas/index.ts";

/** Usar essa constante no `stdout` ou `console.log()` resulta em um som de notificação. */
const TOCAR_SINO = "\u0007";

/**
 * Mapa contendo todas as telas do script
 * Use `mapaDeTelas.get()` passando o nome de uma {@linkcode TNomeDaTela} para acessar seus conteudo.
 */
const mapaDeTelas = new Map<TNomeDaTela, Tela>([
  ["TelaPrincipal", TELA_PRINCIPAL],
  ["TelaDoCliente", TELA_CLIENTE],
  ["TelaMensagensCliente", TELA_MENSAGENS_CLIENTE],
  ["TelaDaCostureira", TELA_COSTUREIRA],
  ["TelaMensagensProfissional", TELA_MENSAGENS_PROFISSIONAL],
  ["TelaBuscarServicos", TELA_BUSCAR_SERVICOS],
]);

/**
 * Exibe a tela e executa sua funcionalidade.
 *
 * @param tela Nome da tela a ser exibida {@linkcode mapaDeTelas}
 * @param opts O funcionamento dessa função pode ser personalizado.
 */
export function exibirTela(tela: TNomeDaTela, opts?: TExibirTelaOPTS): void {
  // Customizando o funcionamento
  if (opts?.limparTela != false) {
    console.clear();
  }

  console.log(mapaDeTelas.get(tela)!.ASCII);

  // Subtítulo é opcional
  if (mapaDeTelas.get(tela)?.subtitulo) {
    console.log("  " + mapaDeTelas.get(tela)?.subtitulo + "\n");
  }

  // Conteudo é opcional
  if (mapaDeTelas.get(tela)?.conteudo) {
    console.log(mapaDeTelas.get(tela)?.conteudo);
  }

  // Opções são opcionais
  if (mapaDeTelas.get(tela)) {
    mapaDeTelas.get(tela)?.listaDeOpcoes?.forEach((value, index) => {
      console.log(`  ${index + 1} - ${value}`);
    });
  }

  console.log(mapaDeTelas.get(tela)!.rodape);
  mapaDeTelas.get(tela)!.main();
}

// Inicia o script
if (import.meta.main) {
  console.clear(); // Limpe a tela antes de tudo
  console.log(TOCAR_SINO); // 🔔
  exibirTela("TelaPrincipal");
}
