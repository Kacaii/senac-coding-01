import { assertEquals } from "@std/assert";
import { LocadoraDeCarros } from "../arrayDeCarros.js";

// Impedindo logs inesperados.
console.log = () => {}; // Travando console.log
console.table = () => {}; // Travando console.table
console.clear = () => {}; // Travando console.clear

Deno.test("Validando o método adicionaCarro", () => {
  LocadoraDeCarros.adicionaCarro("Carro 1");
  assertEquals(
    LocadoraDeCarros.listaParaInteragir,
    ["Carro 1"],
    "Carro não adicionado!",
  );
});

Deno.test("Validando o método removerCarro", async (t) => {
  await t.step("Removendo o carro 1", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("0");
    assertEquals(LocadoraDeCarros.listaParaInteragir, ["Carro 2", "Carro 3"]);
  });

  await t.step("Removendo o carro 2", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("1");
    assertEquals(LocadoraDeCarros.listaParaInteragir, ["Carro 1", "Carro 3"]);
  });

  await t.step("Removendo o carro 3", () => {
    LocadoraDeCarros.listaParaInteragir = ["Carro 1", "Carro 2", "Carro 3"];
    LocadoraDeCarros.removerCarro("2");
    assertEquals(LocadoraDeCarros.listaParaInteragir, ["Carro 1", "Carro 2"]);
  });
});
