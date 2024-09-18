// Atividade 05

function calcularMedia() {
  let nota1 = 7;
  let nota2 = 9;
  let nota3 = 6;

  let notas = [nota1, nota2, nota3];

  const resultado = (
    notas.reduce((acc, valorAtual) => acc + valorAtual, 0) / notas.length
  ).toFixed(1);

  console.log(resultado);
}

calcularMedia();
