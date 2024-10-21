type Result<T> = [T, null] | [null, Error]; // Devolve uma array de tamanho fixo

console.clear();
const listaDeComidas: string[] = ["Banana", "Laranja", "Beterraba"]; // Apresentadas em uma tabela

console.table(listaDeComidas);
const inputFruta: string | null = prompt(
  "\nInsira o nome da fruta escolhida: \n \n>",
);

const verificaInput = (inputFruta: string | null): Result<string> => {
  if (inputFruta === null || inputFruta.trim() === "") {
    return [null, new Error("Input vazio!  ")];
  } else {
    return [inputFruta.toLowerCase(), null];
  }
};

console.clear();
const [frutaDesejada, error]: Result<string> = verificaInput(inputFruta);

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
