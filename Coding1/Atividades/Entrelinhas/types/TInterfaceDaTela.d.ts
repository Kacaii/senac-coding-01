import { TNomeDaTela } from "./index.d.ts";

export type TInterfaceDaTela = {
  readonly nome: TNomeDaTela;
  /** "ENTRELINHAS" escrito bem grandão */
  readonly ASCII: string;
  readonly subtitulo?: string;
  readonly conteudo?: string;
  readonly listaDeOpcoes?: string[];
  readonly rodape: string;
  /** Função principal da tela */
  readonly main: () => unknown;
};
