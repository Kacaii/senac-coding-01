type Result<T> = [T, null] | [null, Error];

const paciente: { nome: string } = { nome: "" };

console.clear();
const inputNome = prompt(
  "\nBem vindo ao Sistema de Saúde!  \nQual o seu nome? \n\n>",
);

function validaInput(input: string | number | null): Result<string | number> {
  // Limpando o Console
  console.clear();
  if (input === null || input === "") {
    return [null, new Error("Input invalido!")];
  } else {
    return [input, null];
  }
}

const [nome, erroNome] = validaInput(inputNome);

if (erroNome) {
  console.error(erroNome);
} else {
  paciente.nome = nome.toString();
}
