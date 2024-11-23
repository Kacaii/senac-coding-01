import { parseArgs } from "@std/cli";
import { Spinner } from "@std/cli/unstable-spinner";
import { LocadoraDeCarros } from "./controllers/LocadoraDeCarros.js";

const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
const args = parseArgs(Deno.args, { alias: { help: "h", data: "d" } });
const spinner = new Spinner({
  message: "Carregando lista de carros...",
  color: "yellow",
});

console.clear(); // Limpando a tela.

if (args.help) {
  minhaLocadora.help();
  Deno.exit();
}

if (args.data) {
  await minhaLocadora.carregarLista(args.data);
  spinner.start(); // Apenas por questões de estética.
} else {
  minhaLocadora.help();
  throw new Deno.errors.InvalidData("Nenhum arquivo de dados fornecido.");
}

setTimeout(() => {
  spinner.stop();

  minhaLocadora.iniciarRemocaoDeCarros(); // Iniciando
  minhaLocadora.iniciarAdicaoDeCarros();
  minhaLocadora.exibirLista();

  console.log("\n%c -- == Script finalizado! == --\n", "color:yellow;");
  // Fim!
}, 1000);
