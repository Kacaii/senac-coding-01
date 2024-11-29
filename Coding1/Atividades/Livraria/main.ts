import { z } from "https://deno.land/x/zod/mod.ts";
import { green, red } from "@std/fmt/colors";

const UsuarioSchema = z.enum(["Cliente", "Funcionario"]);
type Usuario = z.infer<typeof UsuarioSchema>;

const LivroSchema = z.object({
  titulo: z.string().min(1, "Titulo inválido"),
  autor: z.string().min(1, "Autor inválido"),
  categoria: z.string().min(1, "Categoria inválida"),
});

const LivrosSchema = z.array(LivroSchema).nonempty("Livros inválidos");

type Livro = z.infer<typeof LivroSchema>;
type Resultado<T> = { ok: true; value: T } | { ok: false; error: string };

/** Usar essa constante no `stdout` ou `console.log()` resulta em um som de notificação. */
const TOCAR_SINO = "\u0007";

/** Essa função lê o arquivo `./api/livros.json` e retorna uma lista de livros. */
async function importarLivros(): Promise<Resultado<Livro[]>> {
  try {
    const data = await Deno.readTextFile("./api/livros.json");
    const livros = LivrosSchema.parse(JSON.parse(data)); // Validando com Zod.
    return { ok: true, value: livros };
  } catch (exception) {
    // Tratamento de erro
    if (exception instanceof z.ZodError) {
      return { ok: false, error: "Dados inválidos no arquivo JSON." };
    } else if (exception instanceof Deno.errors.NotFound) {
      return { ok: false, error: "Arquivo não encontrado." };
    } else {
      return {
        ok: false,
        error:
          exception instanceof Error
            ? exception.message
            : "Ocorreu um erro inesperado.",
      };
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
  // Importando
  const resultado: Resultado<Livro[]> = await importarLivros();

  if (!resultado.ok) {
    console.error(resultado.error);
    return;
  }

  let livros: Livro[] = resultado.value;

  switch (usr) {
    case "Cliente": {
      console.clear();
      console.log(TOCAR_SINO + "Olá, Cliente!" + "\n=============\n"); // 󰂞

      const carrinhoDeCompras: Livro[] = [];
      await exibirListaDeLivros();

      // Recebendo o ID do livro que o usuário deseja comprar.
      const livroSelecionado: string | null =
        prompt("\nInsira o ID do livro que você deseja comprar:") || null;

      if (livroSelecionado) {
        livros = [...resultado.value];
        const id: number = parseInt(livroSelecionado);

        if (isNaN(id) || id < 0 || id > livros.length) {
          console.error(red("\nLivro inválido ou não encontrado ❌"));
          prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.
        } else {
          const [livroComprado] = livros.splice(id, 1);
          carrinhoDeCompras.push(livroComprado);
        }

        console.clear();
        console.log("Olá, Cliente!" + "\n=============\n");

        await exibirListaDeLivros(livros);
        console.log(
          "\n" +
            "Carrinho de compras: " +
            green(carrinhoDeCompras[0]?.titulo || "Nenhum livro selecionado."),
        );
      }
      prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.
      main(); // Recomeçando o programa.
      break;
    }

    case "Funcionario": {
      console.clear();
      console.log(TOCAR_SINO + "Olá, Funcionário!" + "\n=================\n"); // 󰂞
      await exibirListaDeLivros(); // Exibindo a lista de livros.

      // Recebendo o nome do livro e a posição do livro.
      const livroNovo: Livro = {
        titulo: prompt("\nInsira um novo livro:") || "",
        autor: prompt("Insira o nome do autor:") || "",
        categoria: prompt("Insira a categoria:") || "",
      };

      try {
        const livroValido = LivroSchema.parse(livroNovo);
        const posicao: number = parseInt(
          prompt("\nInsira a posição do livro:") || "0", // Insere na primeira posição por padrão
        );

        livros.splice(posicao, 0, livroValido); // Adicionando o novo livro na posição desejada.
        console.clear();
      } catch (exception) {
        if (exception instanceof z.ZodError) {
          console.error(red("Dados inválidos para o livro ❌"));
          prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.
          main();
          break;
        }
      }

      console.clear();
      console.log("Olá, Funcionário!" + "\n=================\n");
      await exibirListaDeLivros(livros);
      prompt("\nPressione ENTER para continuar..."); // Aguardando a pressão de ENTER.

      main(); // Recomeçando o programa.
      break;
    }
  }
}

async function exibirListaDeLivros(lista?: Livro[]): Promise<void> {
  const resultado: Resultado<Livro[]> = await importarLivros();

  // Verifica se o arquivo foi importado com sucesso.
  if (resultado.ok) {
    const livros: Livro[] = lista || resultado.value;
    console.log("Livros disponíveis:\n");

    // Imprime os livros na tela.
    livros.forEach((livro, index) => {
      console.log(
        `${index}. ${livro.titulo}, por ${livro.autor} - ${livro.categoria}`,
      );
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
 *            Bem vindo(a) à Livraria Livarinha.
 *            Voce é um cliente ou um funcionário?
 *
 *            1 - Funcionário.
 *            2 - Cliente.
 *            3 - Sair                ©️ Pedro Ayres, 2024
 * =======================================================
 * ```
 */
function main(): void {
  console.clear();
  const usuarioSelecionado: string | null = prompt(`
██╗     ██╗██╗   ██╗██████╗  █████╗ ██████╗ ██╗ █████╗ 
██║     ██║██║   ██║██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗
██║     ██║██║   ██║██████╔╝███████║██████╔╝██║███████║
██║     ██║╚██╗ ██╔╝██╔══██╗██╔══██║██╔══██╗██║██╔══██║
███████╗██║ ╚████╔╝ ██║  ██║██║  ██║██║  ██║██║██║  ██║
╚══════╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝

=======================================================
           Bem vindo(a) à Livraria Livarinha.
           Voce é um cliente ou um funcionário?

           1 - Funcionário.
           2 - Cliente.
           3 - Sair                ©️ Pedro Ayres, 2024
=======================================================
`);

  console.clear();
  switch (usuarioSelecionado) {
    case "1":
      realizarAtendimento("Funcionario");
      break;
    case "2":
      realizarAtendimento("Cliente");
      break;
    default:
      Deno.exit(0);
  }
}

// Funciona apenas se o script for executado diretamente.
if (import.meta.main) {
  console.clear();
  main();
}
