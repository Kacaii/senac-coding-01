import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const TipoUsuarioSchema = z.enum(["Costureira", "Cliente"]);
type TipoUsuario = z.infer<typeof TipoUsuarioSchema>;

const NomeTelaEnum = z.enum([
  "TELA_PRINCIPAL",
  "TELA_CLIENTE",
  "TELA_PROFISSIONAL",
]);
type NomeTela = z.infer<typeof NomeTelaEnum>;

const TelaSchema = z.object({
  nomeTela: NomeTelaEnum,
  conteudoTela: z.string(),
});

type Tela = z.infer<typeof TelaSchema>;

const interfaceTelaPrincipal: Tela = {
  nomeTela: "TELA_PRINCIPAL",
  conteudoTela: `
███████╗███╗   ██╗████████╗██████╗ ███████╗██╗     ██╗███╗   ██╗██╗  ██╗ █████╗ ███████╗
██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝██║     ██║████╗  ██║██║  ██║██╔══██╗██╔════╝
█████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  ██║     ██║██╔██╗ ██║███████║███████║███████╗
██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  ██║     ██║██║╚██╗██║██╔══██║██╔══██║╚════██║
███████╗██║ ╚████║   ██║   ██║  ██║███████╗███████╗██║██║ ╚████║██║  ██║██║  ██║███████║
╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

========================================================================================
                      Voce é um cliente ou profissional de costura?

                      1 - Profissional.
                      2 - Cliente.
                      3 - Sair                                        ©️ Pedro Ayres, 2024
=========================================================================================
`,
};

function exibirInterface(tela: Tela): void {
  console.log(tela.conteudoTela);
}

function main(): void {
  exibirInterface(interfaceTelaPrincipal);
}

if (import.meta.main) {
  main();
}
