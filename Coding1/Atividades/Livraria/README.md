# Atividade 27/11/2024

> Como exercicio de casa, elabore um algoritmo que reproduza acoes do seu projeto
> integrador com pelo menos 3 funcoes.

- Codigo original:

```javascript
//Começamos declarando o array

const livros = [
  "Assim que acaba ",
  "A hipótese do amor ",
  "A seleção ",
  "Trono de Vidro ",
  "It a coisa ",
  "Manual de assassinato para boas garotas ",
];

// Criamos o prompt de abertura que vai receber os dados de escolha.

const atendimento = prompt(
  "Bem vindo(a) à Livraria pensar. Digite 1, se é funcionário. Digite 2, se é cliente.",
);

// Criamos a função funcionário e cliente, que vai executar as ações determinadas
// para cada grupo.

function funcionario(atendimento) {
  var inserir = prompt("Insira um novo livro: ");
  var posicao = parseInt(
    prompt("você deseja adicionar esse livro em qual posição"),
  );
  const atualizandoLivros = livros.splice(posicao, 0, inserir);
  return `O livro foi adicionado com sucesso. Atualmente estamos com os livros: ${livros}`;
}

// Crie aqui a função de cliente, seguindo a mesma sintaxe de contrução de função
// Aqui criamos a condição que vai decidir

if (atendimento === "1") {
  console.log(funcionario(atendimento));
} else if (atendimento === "2") {
  console.log(cliente(atendimento));
}
```
