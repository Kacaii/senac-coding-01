import { TCategoria } from "./index.d.ts";

export type TServico = {
  id: number;
  categoria: TCategoria;
  usuario: string;
  descricao: string;
  localizacao: { estado: string; cidade: string };
};
