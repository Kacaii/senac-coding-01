// Atividade 02

/**
 * Mostra o nome e a cidade que foram passados como argumentos.
 * @param {string} - Nome da pessoa.
 * @param {string} - Nome da cidade onde a pessoa mora.
 */
function mostraCidade(nome = "Pedro", cidade = "Olinda") {
  console.log(`${nome} é de ${cidade}`);
}

mostraCidade();

// Passe argumentos aqui se não quiser usar os argumentos padrão
mostraCidade("Josias", "Recife");
