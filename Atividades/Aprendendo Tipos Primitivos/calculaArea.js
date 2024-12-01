// Atividade 04

console.clear();

import { parseArgs } from "@std/cli";
import { Spinner } from "@std/cli/unstable-spinner";

const args = parseArgs(Deno.args, {
  alias: {
    base: "b",
    altura: "a",
    help: "h",
  },
});

/** Exibe uma mensagem de ajuda no terminal. */
function exibeAjuda() {
  console.log(`
┌───────────────────────────────────────────────────────────────────────┐
│ Como utilizar: calculaAreaDoTriangulo --base <base> --altura <altura> │
│                                                                       │
│ Opções:                                                               │
│ -h, --help     Exibe Ajuda          (Opcional)                        │
│ -b, --base     Base do triângulo                                      │
│ -a, --altura   Altura do triângulo                                    │
└───────────────────────────────────────────────────────────────────────┘
`);
  Deno.exit();
}

if (args.help) {
  exibeAjuda();
}

const spinner = new Spinner({ message: "Calculando..", color: "green" });

/**
 * Calcula a área de um triângulo.
 *
 * @param {number} base -  Base do triângulo
 * @param {number} altura -  Altura do triângulo
 * @returns {number | undefined} A área do triângulo
 */
function calculaAreaDoTriangulo(base, altura) {
  return (base * altura) / 2;
}

spinner.start();

setTimeout(() => {
  spinner.stop();

  if (args.base && args.altura) {
    /** @type {number | undefined} */
    const area = calculaAreaDoTriangulo(args.base, args.altura);
    console.log(`A área do triãngulo é de ${area}`);
  } else {
    exibeAjuda();
  }
}, 1_000);
