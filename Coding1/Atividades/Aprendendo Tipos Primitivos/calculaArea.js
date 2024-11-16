// Atividade 04

import { parseArgs } from "@std/cli";
import { Spinner } from "@std/cli/unstable-spinner";

console.clear();

const args = parseArgs(Deno.args, {
  alias: {
    base: "b",
    altura: "a",
    help: "h",
  },
});

if (args.help) {
  console.log(`
  Como utilizar: calculaAreaDoTriangulo --base <base> --altura <altura>

  -h, --help     Exibe Ajuda              (Opcional)
  -b, --base     Base do triângulo        (Opcional)
  -a, --altura   Altura do triângulo      (Opcional)
`);
  Deno.exit();
}

const spinner = new Spinner({ message: "Calculando..", color: "green" });

/**
 * Calcula a área de um triângulo utilizando os argumentos passados.
 *
 * @param {number} base -  Base do triângulo
 * @param {number} altura -  Altura do triângulo
 * @returns {number} Retorna a área do triângulo
 */
function calculaAreaDoTriangulo(base, altura) {
  return (base * altura) / 2;
}

spinner.start();

setTimeout(() => {
  spinner.stop();

  /** @type {number} */
  const area = calculaAreaDoTriangulo(args.base, args.altura);

  console.log(`A área do triãngulo é de ${area}`);
}, 1_000);
