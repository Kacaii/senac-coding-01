const paciente = {
  nome: null,
  idade: null,
  apenasAcompanhado: false,
  possuiAcompanhante: false,
  servicoDesejado: null,
};

console.clear();

console.log("Bem vindo(a) ao %cSistema Virtual de Saúde! \n", "color: green");
paciente.nome = prompt("Qual o nome do beneficiário? \n \n>");

if (!paciente.nome) throw new Error("O nome não pode ficar vazio!");

console.clear();

paciente.idade = prompt(
  `Prazer em te conhecer, ${paciente.nome}! Qual seria a sua idade? \n \n>`,
);

if (!paciente.idade || isNaN(paciente.idade))
  throw new Error("Idade inválida! Vamos tentar de novo?");

console.clear();

if (paciente.idade < 18) {
  paciente.apenasAcompanhado = true;
  paciente.possuiAcompanhante = confirm(
    `${paciente.nome}, vi que você tem apenas ${paciente.idade} anos, você possui algum(a) acompanhante para ir com você? \n \n`,
  );
}

if (paciente.apenasAcompanhado && !paciente.possuiAcompanhante)
  throw new Error("Infelizmente você precisa de um acompanhante.");

console.clear();

paciente.servicoDesejado = prompt(
  "Qual profissional de saúde você procura? \n \n>",
);

if (!paciente.servicoDesejado)
  throw new Error("Este campo não pode ficar vazio!");

console.clear();

console.info(
  `${paciente.servicoDesejado} encontrado(a)! Mandamos os detalhes para o seu email <3`,
);
