// Atividade 01

/**
 * Exibe o nome e a idade fornecidos como argumentos.
 * Se nenhum argumento for passado, exibe nome e idade do autor.
 *
 * @param {string} nome - Nome da pessoa.
 * @param {string} idade - Nome da idade onde a pessoa mora.
 *
 * @author [Kacaii](https://github.com/Kacaii)
 */
function mostraIdade(nome = "Pedro", idade = "22") {
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

mostraIdade();

// Passe argumentos aqui se não quiser usar os argumentos padrão
mostraIdade("Maria", "28");
