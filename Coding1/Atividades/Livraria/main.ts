import { green, red } from "@std/fmt/colors";

type Usuario = "Cliente" | "Funcionario";
type Resultado<T> = { ok: true; value: T } | { ok: false; error: string };

const TOCAR_SINO = "\u0007";

/**
 * Essa função lê o arquivo `./api/livros.json` e retorna uma lista de livros.
 *
 */
async function importarLivros(): Promise<Resultado<string[]>> {
  try {
    const data = await Deno.readTextFile("./api/livros.json");
    const livros = JSON.parse(data);
    return { ok: true, value: livros };
  } catch (error) {
    // Tratamento de erro
    if (error instanceof Deno.errors.NotFound) {
      return { ok: false, error: "Arquivo não encontrado." };
    } else if (error instanceof Error) {
      return { ok: false, error: error.message };
    } else {
      return { ok: false, error: "Ocorreu um erro inesperado." };
    }
  }
}

/**
 * Realiza o atendimento do usuário.
 *
 * @example Realizando o atendimento
 * ```ts ignore
 * atendimento("Cliente");
 * // Realiza o atendimento do usuário como cliente.
 *
 * atendimento("Funcionário");
 * // Realiza o atendimento do usuário como funcionário.
 * ```
 *
 * @param usr - O tipo de usuário, deve ser "Cliente" ou "Funcionário".
 * @returns Não retorna nada, apenas realiza o atendimento.
 */
async function realizarAtendimento(usr: Usuario): Promise<void> {
  const resultado: Resultado<string[]> = await importarLivros();

  switch (usr) {
    case "Cliente": {
      console.clear();
      console.log(TOCAR_SINO + "Olá, Cliente!" + "\n=============\n"); // 󰂞

      let livros = [];
      const carrinhoDeCompras: string[] = [];
      await exibirListaDeLivros();

      // await exibirListaDeLivros();

      if (resultado.ok) {
        // Recebendo o ID do livro que o usuário deseja comprar.
        const livroSelecionado =
          prompt("\nInsira o ID do livro que você deseja comprar:") || null;

        if (livroSelecionado) {
          livros = [...resultado.value];

          if (
            isNaN(parseInt(livroSelecionado)) ||
            parseInt(livroSelecionado) < 0 ||
            parseInt(livroSelecionado) > livros.length
          ) {
            console.error(red("Livro inválido ou não encontrado"));
          } else {
            // Tratamento de errors
            try {
              const [livroRemovido] = livros.splice(
                parseInt(livroSelecionado),
                1,
              );

              carrinhoDeCompras.push(livroRemovido);
            } catch (erro) {
              if (erro instanceof Error) {
                console.error(erro);
                prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.
              }
            }

            console.clear();
            console.log(TOCAR_SINO + "Olá, Cliente!" + "\n=============\n"); // 󰂞

            await exibirListaDeLivros(livros);
            console.log(
              "\n" + "Carrinho de compras: " + green(carrinhoDeCompras[0]),
            );
          }

          prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.
        }

        main(); // Recomeçando o programa.
      } else {
        console.error(resultado.error);
      }
      break;
    }
    case "Funcionario": {
      console.clear();
      console.log(TOCAR_SINO + "Olá, Funcionário!" + "\n=================\n"); // 󰂞

      let livros: string[] = [];
      await exibirListaDeLivros(); // Exibindo a lista de livros.

      if (resultado.ok) {
        // Recebendo o nome do livro e a posição do livro.
        const livroNovo = prompt("\nInsira um novo livro:") || null;

        if (livroNovo) {
          const posicao: number = parseInt(
            prompt("Insira a posição do livro:") || "0", // Insere na primeira posição por padrão
          );

          livros = [...resultado.value]; // Convertendo o resultado em um array.
          livros.splice(posicao, 0, livroNovo); // Adicionando o novo livro na posição desejada.

          console.clear();

          console.log(
            TOCAR_SINO + "Olá, Funcionário!" + "\n=================\n", // 󰂞
          );

          await exibirListaDeLivros(livros);
          prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.
        }

        main(); // Recomeçando o programa.
      } else {
        console.error(resultado.error);
      }
      break;
    }
  }
}

async function exibirListaDeLivros(lista?: string[]): Promise<void> {
  const resultado: Resultado<string[]> = await importarLivros();

  // Verifica se o arquivo foi importado com sucesso.
  if (resultado.ok) {
    const livros = lista || resultado.value;
    console.log("Livros disponíveis:\n");

    // Imprime os livros na tela.
    livros.forEach((livro, index) => {
      console.log(`${index}. ${livro}`);
    });
  } else {
    console.error(resultado.error);
    Deno.exit(1);
  }
}

/**
 * ```plaintext
 * ██╗     ██╗██╗   ██╗██████╗  █████╗ ██████╗ ██╗ █████╗
 * ██║     ██║██║   ██║██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗
 * ██║     ██║██║   ██║██████╔╝███████║██████╔╝██║███████║
 * ██║     ██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗██║██╔══██║
 * ███████╗██║ ╚████╔╝ ██║  ██║██║  ██║██║  ██║██║██║  ██║
 * ╚══════╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
 *
 * =======================================================
 *           Bem vindo(a) à Livraria Livarinha.
 *          Voce é um cliente um funcionário?
 *
 *           1 - Funcionário.
 *          2 - Cliente.
 *         3 - Sair                ©️ Pedro Ayres, 2024
 * =======================================================
 * ```
 */
function main() {
  console.clear();
  const atendimentoUsuario = prompt(`
██╗     ██╗██╗   ██╗██████╗  █████╗ ██████╗ ██╗ █████╗ 
██║     ██║██║   ██║██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗
██║     ██║██║   ██║██████╔╝███████║██████╔╝██║███████║
██║     ██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗██║██╔══██║
███████╗██║ ╚████╔╝ ██║  ██║██║  ██║██║  ██║██║██║  ██║
╚══════╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

=======================================================
           Bem vindo(a) à Livraria Livarinha.
           Voce é um cliente um funcionário?

           1 - Funcionário.
           2 - Cliente.
           3 - Sair                ©️ Pedro Ayres, 2024
=======================================================
`);

  switch (atendimentoUsuario) {
    case "1":
      console.clear();
      realizarAtendimento("Funcionario");
      break;
    case "2":
      console.clear();
      realizarAtendimento("Cliente");
      break;
    case "3":
      console.clear();
      Deno.exit(0);
    /* falls through */
    default:
      console.clear();
      Deno.exit(0);
  }
}

// Funciona apenas se o script for executado diretamente.
if (import.meta.main) {
  console.clear();
  main();
}
