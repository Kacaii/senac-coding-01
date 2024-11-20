import { assertEquals } from "@std/assert";
import { LocadoraDeCarros } from "../arrayDeCarros.js";

// Impedindo logs inesperados.
console.log = () => {}; // Travando console.log
console.table = () => {}; // Travando console.table
console.clear = () => {}; // Travando console.clear

Deno.test("Validando se a lista inicia vazia", () => {
  assertEquals(LocadoraDeCarros.listaParaInteragir, [], "Lista não vazia!");
});

Deno.test("Validando o método adicionarCarro()", async (t) => {
  await t.step("Adicionando com input vazio", () => {
    LocadoraDeCarros.listaParaInteragir = [];
    LocadoraDeCarros.adicionarCarro("");
    assertEquals(LocadoraDeCarros.listaParaInteragir, [], "Lista não vazia!");
  });

  await t.step("Adicionando o Carro 1", () => {
    LocadoraDeCarros.listaParaInteragir = [];
    LocadoraDeCarros.adicionarCarro("Carro 1");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 1"],
      "Carro não adicionado!",
    );
  });

  await t.step("Adicionando o Carro 2", () => {
    LocadoraDeCarros.adicionarCarro("Carro 2");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 1", "Carro 2"],
      "Carro não adicionado!",
    );
  });

  await t.step("Adicionando o Carro 3", () => {
    LocadoraDeCarros.adicionarCarro("Carro 3");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 1", "Carro 2", "Carro 3"],
      "Carro não adicionado!",
    );
  });
});

Deno.test("Validando o método removerCarro()", async (t) => {
  await t.step("Removendo com input vazio", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 1", "Carro 2", "Carro 3"],
      "Algo mudou na lista!",
    );
  });

  await t.step("Removendo index 0", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("0");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 2", "Carro 3"],
      "Carro não removido!",
    );
  });

  await t.step("Removendo index 1", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("1");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 1", "Carro 3"],
      "Carro não removido!",
    );
  });

  await t.step("Removendo index 2", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("2");
    assertEquals(
      LocadoraDeCarros.listaParaInteragir,
      ["Carro 1", "Carro 2"],
      "Carro não removido!",
    );
  });
});
