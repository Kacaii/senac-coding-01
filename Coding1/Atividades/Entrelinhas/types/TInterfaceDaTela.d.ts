import { TNomeDaTela } from "./index.d.ts";

export type Tela = {
  readonly nome: TNomeDaTela;
  /** "ENTRELINHAS" escrito bem grandão */
  readonly ASCII: string;
  readonly subtitulo?: string;
  conteudo?: string;
  readonly listaDeOpcoes?: string[];
  readonly rodape: string;
  /** Função principal da tela */
  readonly main: () => unknown;
};
