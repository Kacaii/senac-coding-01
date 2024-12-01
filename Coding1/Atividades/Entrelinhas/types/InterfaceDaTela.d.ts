import { TNomeDaTela } from "./index.d.ts";

export type TInterfaceDaTela = {
  readonly nome: TNomeDaTela;
  readonly ASCII: string;
  readonly subtitulo?: string;
  readonly listaDeOpcoes?: string[];
  readonly rodape: string;
  /** Realiza a funcionalidade principal da tela selecionada. */
  readonly executarFuncionalidade: () => unknown;
};
