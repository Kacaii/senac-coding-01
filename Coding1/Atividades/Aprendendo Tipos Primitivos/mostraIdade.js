// Atividade 01

console.clear();

import { parseArgs } from "@std/cli";
import { Spinner } from "@std/cli/unstable-spinner";

const args = parseArgs(Deno.args, {
  alias: {
    nome: "n",
    idade: "i",
    help: "h",
  },
});

if (args.help) {
  console.log(`
  Como utilizar: mostraIdade --nome <nome> --idade <idade>

  -h, --help    Exibe Ajuda  (Opcional)
  -n, --nome    Seu Nome     (Opcional)
  -i, --idade   Seua idade   (Opcional)
`);
  Deno.exit();
}

const spinner = new Spinner({ message: "Carregando..", color: "green" });

/**
 * Exibe o nome e a idade fornecidos como argumentos.
 *
 * @param {string} nome - Nome da pessoa.
 * @param {number} idade - Nome da idade onde a pessoa mora.
 */
function mostraIdade(nome, idade) {
  if (nome && idade) {
    console.log(`Olá! meu nome é ${nome} e eu tenho ${idade} anos!`);
  } else if (nome && !idade) {
    console.log(`Olá! meu nome é ${nome}!`);
  } else if (!nome && idade) {
    console.log(`Olá! Eu tenho ${idade} anos!`);
  } else {
    console.log("Olá! Eu não tenho nem nome nem idade.");
  }
}

spinner.start();

setTimeout(() => {
  spinner.stop();

  mostraIdade(args.nome, args.idade);
}, 1_000);
