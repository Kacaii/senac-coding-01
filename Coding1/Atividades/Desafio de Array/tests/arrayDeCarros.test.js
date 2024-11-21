import { assertEquals, assertThrows } from "@std/assert";
import { LocadoraDeCarros } from "../controllers/LocadoraDeCarros.js";
const minhaLocadora = new LocadoraDeCarros(); // Instanciando nova locadora.

// Impedindo logs inesperados.
console.log = () => {}; // Travando console.log()
console.table = () => {}; // Travando console.table()
console.clear = () => {}; // Travando console.clear()

Deno.test("Validando se a lista inicia vazia", () => {
  assertEquals(
    minhaLocadora.listaParaInteragir.length,
    0,
    "Lista não iniciou vazia!",
  );
});

Deno.test("Validando o método limparLista()", async (t) => {
  await t.step("Limpando lista para interagir", () => {
    minhaLocadora.limparLista();
    assertEquals(
      minhaLocadora.listaParaInteragir.length,
      0,
      "Lista não foi esvaziada!!",
    );
  });
});

Deno.test({
  name: "Validando o método carregarLista()",
  permissions: {
    read: true,
  },
  fn: async (t) => {
    await t.step("Importando arquivo JSON", async () => {
      minhaLocadora.limparLista();

      // Importanto lista
      await minhaLocadora.carregarLista("./api/carros_1.json");
      assertEquals(minhaLocadora.listaParaInteragir, [
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
      ]);
    });
  },
});

Deno.test("Validando o método adicionarCarro()", async (t) => {
  await t.step("Input vazio não adiciona nada", () => {
    minhaLocadora.limparLista();
    minhaLocadora.adicionarCarro("");
    assertEquals(minhaLocadora.listaParaInteragir, [], "Lista não vazia!");
  });

  await t.step("Adicionando o Carro 1", () => {
    minhaLocadora.limparLista();
    minhaLocadora.adicionarCarro("Carro 1");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1"],
      "Carro não adicionado!",
    );
  });

  await t.step("Adicionando o Carro 2", () => {
    minhaLocadora.adicionarCarro("Carro 2");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2"],
      "Carro não adicionado!",
    );
  });

  await t.step("Adicionando o Carro 3", () => {
    minhaLocadora.adicionarCarro("Carro 3");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2", "Carro 3"],
      "Carro não adicionado!",
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
  await t.step("Input vazio não remove nada", () => {
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    minhaLocadora.removerCarro("");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2", "Carro 3"],
      "Algo mudou na lista!",
    );
  });

  await t.step("Lançando erro ao iniciar remoção com lista vazia", () => {
    minhaLocadora.limparLista();
    assertThrows(() => {
      minhaLocadora.iniciarRemocaoDeCarros();
    }, Deno.errors.InvalidData);
  });

  await t.step("Removendo index 0", () => {
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    minhaLocadora.removerCarro("0");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 2", "Carro 3"],
      "Carro não removido!",
    );
  });

  await t.step("Removendo index 1", () => {
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    minhaLocadora.removerCarro("1");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 3"],
      "Carro não removido!",
    );
  });

  await t.step("Removendo index 2", () => {
    minhaLocadora.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    minhaLocadora.removerCarro("2");
    assertEquals(
      minhaLocadora.listaParaInteragir,
      ["Carro 1", "Carro 2"],
      "Carro não removido!",
    );
  });
});
