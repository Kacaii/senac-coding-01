// Fiquei tanto tempo no exercicio anterior que fiquei sem energia pra esse. (╥﹏╥)

console.clear();

const listaDeComidas = ["Banana", "Laranja", "Beterraba"];

console.table(listaDeComidas);
const frutaDesejada = prompt("Escolha uma das opções: \n \n>");

if (!frutaDesejada) throw new Error("Você esqueceu de digitar a fruta.");

switch (frutaDesejada.toLowerCase()) {
  case "banana":
    console.clear();
    console.info("Rica em potássio!");
    break;

  case "laranja":
    console.clear();
    console.info("Rica em vitamina C!");
    break;

  case "beterraba":
    console.clear();
    console.info("Faz bem pra circulação!");
    break;

  default:
    console.warn("Precisa ser um item da lista!");
    break;
}
