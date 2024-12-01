// Atividade 02

/**
 * Exibe o nome e a cidade fornecidos como argumentos.
 * Se nenhum argumento for passado, exibe nome e cidade do autor.
 *
 * @param {string} nome - Nome da pessoa.
 * @param {string} cidade - Nome da cidade onde a pessoa mora.
 *
 * @author [Kacaii](https://github.com/Kacaii)
 */
function mostraCidade(nome = "Pedro", cidade = "Olinda") {
  console.log(`${nome} é de ${cidade}`);
}

mostraCidade();

// Passe argumentos aqui se não quiser usar os argumentos padrão
mostraCidade("Josias", "Recife");
