// Atividade 08
const listaDeMoedas = {
  USD: { nome: "dólares", valor: 5.24 },
  EUR: { nome: "euros", valor: 5.61 },
};

function converteMoedas(valorEmReais, moedaEscolhida) {
  return valorEmReais * moedaEscolhida;
}

// Use o objeto para escolher a moeda
let resultado = converteMoedas(5, listaDeMoedas.EUR.valor).toFixed(2);
console.log(`Um total de $${resultado}`);
