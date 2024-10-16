console.clear();
const listaDeComidas = ["Banana", "Laranja", "Beterraba"]; // Apresentadas em uma tabela

console.table(listaDeComidas);
const inputFruta = prompt("\nInsira o nome da fruta escolhida: \n \n>");

const verificaInput = (inputFruta) => {
  if (inputFruta === null || inputFruta.trim() === "") {
    return [null, new Error("Input vazio!  ")];
  } else {
    return [inputFruta.toLowerCase(), null];
  }
};

console.clear();
const [frutaDesejada, error] = verificaInput(inputFruta);

if (error) {
  console.error(error.message);
} else {
  console.log("\n");
  switch (frutaDesejada) {
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
      console.info("%cFaz bem pra circulação!", "color: red");
      break;

    default:
      console.clear();
      console.warn("Precisa ser um item da lista!  ");
      break;
  }
}
