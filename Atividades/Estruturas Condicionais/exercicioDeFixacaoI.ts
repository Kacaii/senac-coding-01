import { toPascalCase } from "@std/text/to-pascal-case";

type Result<T> = [T, null] | [null, Error];

const paciente: {
  nome: string | null;
  idade: number | null;
  servico: string | null;
} = {
  nome: null,
  idade: null,
  servico: null,
};

console.clear();
const inputNome = prompt(
  "\nBem vindo ao Sistema de Saúde!  \nQual o seu nome? \n\n>",
);

function validaInput(input: string | number | null): Result<string | number> {
  // Limpando o Console
  console.clear();
  if (input === null || input === "") {
    return [null, new Error("Input vazio!")];
  } else {
    return [input, null];
  }
}

const [nome, erroNome] = validaInput(inputNome);

if (erroNome) {
  console.error(erroNome);
} else {
  typeof nome === "string"
    ? (paciente.nome = toPascalCase(nome))
    : console.error("\nNome Inválido");
}

const inputIdade = prompt(
  `\nOi ${paciente.nome}! Seja bem vindo(a) <3 \nQual a sua idade? \n\n>`,
);

const [idade, erroIdade] = validaInput(inputIdade);

if (erroIdade) {
  console.error(erroIdade);
} else {
  const parsedIdade = Number(idade);
  typeof parsedIdade === "number" && !isNaN(parsedIdade)
    ? (paciente.idade = parsedIdade)
    : console.error("Idade Inválida");
}

const inputServico = prompt("\nEntendido, como posso lhe ajudar? \n\n>");

const [servico, erroServico] = validaInput(inputServico);

if (erroServico) {
  console.error(erroServico);
} else {
  typeof servico === "string"
    ? (paciente.servico = servico)
    : console.error("\nServiço Inválido!");
}

console.clear();
console.log("\n");

Object.entries(paciente).forEach(([key, value]) => {
  value === null
    ? console.error("Faltaram algumas informações")
    : console.log(`%c${toPascalCase(key)} verificado(a)! `, "color:green");
});

console.log("\n"); // Apenas adicionando um espaço 󰯖
console.info(paciente, "\n");
