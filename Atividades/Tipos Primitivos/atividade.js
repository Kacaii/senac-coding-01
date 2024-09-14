let nome = "Pedro"; // Variável em escopo global

function Idade() {
  let idade = "22";
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

function Cidade() {
  let cidade = "Olinda";

  console.log(`${nome} é de ${cidade}`);
}

Idade();
Cidade();
