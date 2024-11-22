import { parseArgs } from "@std/cli";
import { LocadoraDeCarros } from "./controllers/LocadoraDeCarros.js";

const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
const args = parseArgs(Deno.args, { alias: { help: "h", data: "d" } });

console.clear(); // Limpando a tela.

if (args.help) {
  minhaLocadora.help();
  Deno.exit();
}

if (args.data) {
  await minhaLocadora.carregarLista(args.data);
} else {
  minhaLocadora.help();
  throw new Deno.errors.InvalidData("Nenhum arquivo de dados fornecido.");
}

minhaLocadora.iniciarRemocaoDeCarros(); // Iniciando
minhaLocadora.iniciarAdicaoDeCarros();
minhaLocadora.exibirLista();

console.log("\n%c -- == Script finalizado! == --\n", "color:yellow;");
