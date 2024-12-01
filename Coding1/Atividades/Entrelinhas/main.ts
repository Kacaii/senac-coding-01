// Importando tipos e interfaces
import { TInterfaceDaTela, TNomeDaTela } from "./types/index.d.ts";

// Importando telas
import {
  TELA_PRINCIPAL,
  TELA_CLIENTE,
  TELA_COSTUREIRA,
} from "./telas/index.ts";

/** Usar essa constante no `stdout` ou `console.log()` resulta em um som de notificação. */
const TOCAR_SINO = "\u0007";

/**
 * Mapa contendo todas as telas do script
 * Use `MapaDeTelas.get()` passando o nome de uma {@linkcode TNomeDaTela} para acessar seus conteudo.
 */
const mapaDeTelas = new Map<TNomeDaTela, TInterfaceDaTela>([
  ["TelaPrincipal", TELA_PRINCIPAL],
  ["TelaDoCliente", TELA_CLIENTE],
  ["TelaDaCostureira", TELA_COSTUREIRA],
]);

/**
 * Exibe a tela e executa sua funcionalidade.
 */
export function exibirTela(tela: TNomeDaTela): void {
  console.clear();
  console.log(mapaDeTelas.get(tela)!.ASCII);

  // Subtítulo é opcional
  if (mapaDeTelas.get(tela)?.subtitulo) {
    console.log("  " + mapaDeTelas.get(tela)!.subtitulo + "\n");
  }

  // Opções são opcionais
  if (mapaDeTelas.get(tela)) {
    mapaDeTelas.get(tela)?.listaDeOpcoes?.forEach((value, index) => {
      console.log(`  ${index + 1} - ${value}`);
    });
  }

  console.log(mapaDeTelas.get(tela)!.rodape);
  mapaDeTelas.get(tela)!.executarFuncionalidade();
}

// Inicia o script
if (import.meta.main) {
  console.clear(); // Limpe a tela antes de tudo
  console.log(TOCAR_SINO); // 🔔
  exibirTela("TelaPrincipal");
}
