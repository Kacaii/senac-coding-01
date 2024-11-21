import { parseArgs } from "@std/cli";
import { LocadoraDeCarros } from "./exports/LocadoraDeCarros.js";

const args = parseArgs(Deno.args, { alias: { help: "h", data: "d" } });

console.clear(); // Limpando a tela.

if (args.help) {
  LocadoraDeCarros.help();
  Deno.exit();
}

await LocadoraDeCarros.carregarLista("./data/data_1.json"); // Importando o arquivo de dados.
LocadoraDeCarros.iniciarRemocaoDeCarros(); // Iniciando
LocadoraDeCarros.iniciarAdicaoDeCarros();
LocadoraDeCarros.exibirLista();

console.log("\n%c -- == Script finalizado! == --\n", "color:yellow;");
