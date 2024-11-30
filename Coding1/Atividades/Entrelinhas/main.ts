// Importando tipos e interfaces
import { TInterfaceDaTela, TNomeDaTela } from "./types/index.ts";

// Importando telas
import {
  MENU_PRINCIPAL,
  TELA_CLIENTE,
  TELA_COSTUREIRA,
} from "./telas/index.ts";

/** Usar essa constante no `stdout` ou `console.log()` resulta em um som de notificação. */
const TOCAR_SINO = "\u0007";

/**
 * Mapa contendo todas as telas do script
 * Use `MapaDeTelas.get()` passando o nome de uma {@linkcode TNomeDaTela} para acessar seus conteudo.
 */
const MapaDeTelas = new Map<TNomeDaTela, TInterfaceDaTela>([
  ["MenuPrincipal", MENU_PRINCIPAL],
  ["TelaDoCliente", TELA_CLIENTE],
  ["TelaDaCostureira", TELA_COSTUREIRA],
]);

/**
 * Exibe a tela e executa sua funcionalidade.
 */
export function exibirTela(tela: TNomeDaTela): void {
  console.clear();
  console.log(MapaDeTelas.get(tela)!.ASCII);

  // Subtítulo é opcional
  if (MapaDeTelas.get(tela)?.subtitulo) {
    console.log("  " + MapaDeTelas.get(tela)!.subtitulo + "\n");
  }

  // Opções são opcionais
  if (MapaDeTelas.get(tela)) {
    MapaDeTelas.get(tela)?.listaDeOpcoes?.forEach((value, index) => {
      console.log(`  ${index + 1} - ${value}`);
    });
  }

  console.log(MapaDeTelas.get(tela)!.rodape);
  MapaDeTelas.get(tela)!.executarFuncionalidade();
}

// Inicia o script
if (import.meta.main) {
  console.clear(); // Limpe a tela antes de tudo
  console.log(TOCAR_SINO); // 🔔
  exibirTela("MenuPrincipal");
}
