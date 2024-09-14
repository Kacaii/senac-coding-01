let nome = "Pedro"; // Variável de escopo global

function ProgramaIdade() {
  let idade = "22";
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

function ProgramaCidade() {
  let cidade = "Olinda";

  console.log(`${nome} é de ${cidade}`);
}

ProgramaIdade();
ProgramaCidade();
