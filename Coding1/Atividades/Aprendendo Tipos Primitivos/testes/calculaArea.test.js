import calculaAreaDoTriangulo from "../calculaArea.js";
import { assertEquals } from "@std/assert";

Deno.test("Testando fn calculaAreaDoTriangulo(9, 18)", () => {
  assertEquals(calculaAreaDoTriangulo(9, 18), 81);
});
