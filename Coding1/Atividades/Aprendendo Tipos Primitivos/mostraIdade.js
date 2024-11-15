// Atividade 01

console.clear();

import { parseArgs } from "@std/cli";
import { Spinner } from "@std/cli/unstable-spinner";

/**
 * Exibe o nome e a idade fornecidos como argumentos.
 * Se nenhum argumento for passado, exibe nome e idade do autor.
 *
 * @param {string} nome - Nome da pessoa.
 * @param {string} idade - Nome da idade onde a pessoa mora.
 *
 * @author [Kacaii](https://github.com/Kacaii)
 */
function mostraIdade(nome = "Pedro", idade = "22") {
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

const spinner = new Spinner({ message: "Carregando..", color: "green" });
spinner.start();

const args = parseArgs(Deno.args, {
  alias: {
    nome: "n",
    idade: "i",
  },
});

setTimeout(() => {
  spinner.stop();

  mostraIdade(args.nome, args.idade);
}, 2000);
