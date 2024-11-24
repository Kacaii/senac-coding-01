import { green } from "@std/fmt/colors";
import { parseArgs } from "@std/cli";
import { Spinner } from "@std/cli/unstable-spinner";
import { LocadoraDeCarros } from "./controllers/LocadoraDeCarros.js";

const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.
const args = parseArgs(Deno.args, { alias: { help: "h", data: "d" } });
const spinner = new Spinner({
  message: `Carregando lista... `,
  color: "yellow",
});

console.clear(); // Limpando a tela.

if (args.help) {
  minhaLocadora.help();
  Deno.exit();
}

// if (!args.data) {
//   minhaLocadora.help();
//   throw new Deno.errors.InvalidData("Nenhum arquivo de dados fornecido.");
// }

await minhaLocadora.carregarListaJSON(args.data);
console.log(
  `Lista de carros encontrada! ${green(args.data)}\nCarregando um total de ${green(minhaLocadora.listaParaInteragir.length.toString())} carros..\n`,
);
spinner.start(); // Apenas por questões de estética.

setTimeout(() => {
  spinner.stop();

  minhaLocadora.iniciarRemocaoDeCarros(); // Iniciando
  minhaLocadora.iniciarAdicaoDeCarros();
  minhaLocadora.exibirLista();

  console.log("\n%c -- == Script finalizado! == --\n", "color:yellow;");
  Deno.exit();
}, 2500);
