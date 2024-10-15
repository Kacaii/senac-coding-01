console.clear();

const listaDeComidas: string[] = ["Banana", "Laranja", "Beterraba"];

console.table(listaDeComidas);
const frutaDesejada: string | null = prompt("Escolha uma das opções: \n \n>");

if (frutaDesejada === null)
  throw new Error("Você esqueceu de digitar a fruta.");

switch (frutaDesejada.toLowerCase()) {
  case "banana":
    console.clear();
    console.info("%cRica em potássio!", "color: yellow");
    break;

  case "laranja":
    console.clear();
    console.info("%cRica em vitamina C!", "color: orange");
    break;

  case "beterraba":
    console.clear();
    console.info("%cFaz bem pra circulação!", "color: purple");
    break;

  default:
    console.warn("Precisa ser um item da lista!");
    break;
}
