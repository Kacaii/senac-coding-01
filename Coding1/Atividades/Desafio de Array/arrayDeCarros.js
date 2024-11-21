import { parseArgs } from "@std/cli";
import { LocadoraDeCarros } from "./exports/LocadoraDeCarros.js";

const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
const args = parseArgs(Deno.args, { alias: { help: "h", data: "d" } });

console.clear(); // Limpando a tela.

if (args.help) {
  minhaLocadora.help();
  Deno.exit();
}

await minhaLocadora.carregarLista("./data/data_1.json"); // Importando o arquivo de dados.
minhaLocadora.iniciarRemocaoDeCarros(); // Iniciando
minhaLocadora.iniciarAdicaoDeCarros();
minhaLocadora.exibirLista();

console.log("\n%c -- == Script finalizado! == --\n", "color:yellow;");
