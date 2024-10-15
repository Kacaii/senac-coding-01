type Result<T> = [T, null] | [null, Error];

console.clear();
const listaDeComidas: string[] = ["Banana", "Laranja", "Beterraba"];

console.table(listaDeComidas);
const inputFruta: string | null = prompt("Escolha uma das opções: \n \n>");

const verificaInput = (inputFruta: string | null): Result<string> => {
  if (inputFruta === null || inputFruta.trim() === "") {
    return [null, new Error("Input vazio!  ")];
  } else {
    return [inputFruta.toLowerCase(), null];
  }
};

console.clear();
const [frutaDesejada, erro]: Result<string> = verificaInput(inputFruta);

if (erro) {
  console.error(erro);
} else {
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
      console.info("%cFaz bem pra circulação!", "color: purple");
      break;

    default:
      console.warn("Precisa ser um item da lista!  ");
      break;
  }
}
