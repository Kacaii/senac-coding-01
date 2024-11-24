import { assertEquals, assertRejects, assertThrows } from "@std/assert";
import { LocadoraDeCarros } from "../controllers/LocadoraDeCarros.js";
const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.

// Impedindo logs inesperados.
console.log = () => {}; // Travando console.log()
console.table = () => {}; // Travando console.table()
console.clear = () => {}; // Travando console.clear()
console.error = () => {}; // Travando console.error()

Deno.test("Validando se a lista inicia vazia", () => {
  assertEquals(
    minhaLocadora.listaParaInteragir.length,
    0,
    "Lista não iniciou vazia!",
  );
});

Deno.test("Validando o método limparLista()", async (t) => {
  await t.step("Limpando lista para interagir", () => {
    // Limpando lista para interagir
    minhaLocadora.limparLista();

    assertEquals(
      minhaLocadora.listaParaInteragir.length,
      0,
      "Lista não foi esvaziada!!",
    );
  });
});

Deno.test("Validando metodo carregarListaJSON()", async (t) => {
  await t.step("Importando arquivo JSON válido", async () => {
    // Limpando lista para interagir
    minhaLocadora.limparLista();

    // Importanto lista
    await minhaLocadora.carregarListaJSON("./api/carros_1.json");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      [
        "Toyota Corolla",
        "Ford Mustang",
        "Tesla Model S",
        "Honda Civic",
        "Chevrolet Silverado",
        "BMW X5",
        "Audi A4",
        "Jeep Wrangler",
        "Mercedes-Benz E-Class",
        "Volkswagen Golf",
        "Nissan Altima",
        "Hyundai Elantra",
        "Kia Soul",
        "Subaru Outback",
        "Mazda CX-5",
        "Lexus RX",
        "Dodge Charger",
        "Porsche 911",
        "Volvo XC90",
        "Ferrari 488",
        "Lamborghini Huracan",
        "Rolls-Royce Phantom",
        "Bugatti Chiron",
        "McLaren 720S",
        "Toyota Land Cruiser",
      ],
      "Lista diferente do esperado!",
    );
  });

  await t.step("Importando arquivo inválido causa um SyntaxError", () => {
    // Limpando lista para interagir
    minhaLocadora.limparLista();

    assertRejects(
      async () => {
        await minhaLocadora.carregarListaJSON("./README.md");
      },
      SyntaxError,
      "",
      "SyntaxError não lançado!",
    );
  });

  await t.step(
    "Importando um arquivo não existente causa um Deno.errors.NotFound",
    () => {
      // Limpando lista para interagir
      minhaLocadora.limparLista();

      assertRejects(
        async () => {
          await minhaLocadora.carregarListaJSON(
            "./api/carros_4_The_movie.json",
          );
        },
        Deno.errors.NotFound,
        "",
        "Deno.errors.NotFound não lançado!",
      );
    },
  );
});

Deno.test("Validando o método adicionarCarro()", async (t) => {
  await t.step("Input vazio não adiciona nada", () => {
    // Limpando lista para interagir
    minhaLocadora.limparLista();

    minhaLocadora.adicionarCarro("");
    assertEquals(minhaLocadora.listaParaInteragir, [], "Lista não vazia!");
  });

  await t.step("Adicionando o Carro 1", () => {
    // Limpando lista para interagir
    minhaLocadora.limparLista();

    assertEquals(
      minhaLocadora.adicionarCarro("Carro 1"),
      "Carro 1",
      "Função adicionarCarro() retornou diferente do esperado!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1"],
      "Carro 1 não adicionado!",
    );
  });

  await t.step("Adicionando o Carro 2", () => {
    // Adicionando mais um
    assertEquals(
      minhaLocadora.adicionarCarro("Carro 2"),
      "Carro 2",
      "Função adicionarCarro() retornou diferente do esperado!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2"],
      "Carro 2 não adicionado!",
    );
  });

  await t.step("Adicionando o Carro 3", () => {
    // Adicionando mais um
    assertEquals(
      minhaLocadora.adicionarCarro("Carro 3"),
      "Carro 3",
      "Função adicionarCarro() retornou diferente do esperado!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2", "Carro 3"],
      "Carro 3 não adicionado!",
    );
  });

  await t.step("Validando se a lista foi atualizada corretamente", () => {
    assertEquals(
      minhaLocadora.listaParaInteragir.length,
      3,
      "Número de carros diferente do esperado!",
    );
    assertEquals(
      minhaLocadora.listaParaInteragir[0],
      "Carro 1",
      "Primeiro carro diferente!",
    );
    assertEquals(
      minhaLocadora.listaParaInteragir[1],
      "Carro 2",
      "Segundo carro diferente!",
    );
    assertEquals(
      minhaLocadora.listaParaInteragir[2],
      "Carro 3",
      "Terceiro carro diferente!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir[3],
      undefined,
      "Index 3 possui valor!",
    );
  });
});

Deno.test("Validando o método removerCarro()", async (t) => {
  await t.step(
    "Lançando Deno.errors.InvalidData ao iniciar remoção com lista vazia",
    () => {
      // Limpando lista para interagir
      minhaLocadora.limparLista();

      assertThrows(
        () => {
          minhaLocadora.iniciarRemocaoDeCarros();
        },
        Deno.errors.InvalidData,
        "",
        "Erro não lançado!",
      );
    },
  );

  await t.step("Removendo index 0", () => {
    // Adicionando carros na lista
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];

    assertEquals(
      minhaLocadora.removerCarro(0),
      "Carro 1",
      "Função removerCarro() retornou diferente do esperado!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 2", "Carro 3"],
      "Carro 1 não removido!",
    );
  });

  await t.step("Removendo index 1", () => {
    // Adicionando carros na lista
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];

    assertEquals(
      minhaLocadora.removerCarro(1),
      "Carro 2",
      "Função removerCarro() retornou diferente do esperado!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 3"],
      "Carro 2 não removido!",
    );
  });

  await t.step("Removendo index 2", () => {
    // Adicionando carros na lista
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];

    assertEquals(
      minhaLocadora.removerCarro(2),
      "Carro 3",
      "Função removerCarro() retornou diferente do esperado!",
    );

    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2"],
      "Carro 3 não removido!",
    );
  });
});
