// Atividade 06

function calcularDesconto() {
  let valorOriginal = 200;
  let percentualDeDesconto = 0.1;

  const valorComDesconto = valorOriginal - valorOriginal * percentualDeDesconto;

  console.log(
    `O valor original é de $${valorOriginal} e o desconto é de ${percentualDeDesconto * 100}%.`,
  );
  console.log(`O valor com desconto é de $${valorComDesconto}`);
}

calcularDesconto();
