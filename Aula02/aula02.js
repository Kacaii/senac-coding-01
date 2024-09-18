var prompt = require("prompt-sync")();

let listaItensDisponiveis = new Set(["garrafa", "coxinha", "tapioca"]);
console.table(listaItensDisponiveis, [1]);

let itemEscolhido = prompt("O que você gostaria de comprar? ");

let verificaCompra = () => {
  if (itemEscolhido == null) return; // Adicionando guard clauses
  return listaItensDisponiveis.has(itemEscolhido.toLowerCase()) ? true : false;
};

function comprarItem() {
  if (verificaCompra()) {
    listaItensDisponiveis.delete(itemEscolhido);

    console.log(`${itemEscolhido} foi adicionado ao seu inventário!`);
    return;
  }

  console.error(`${itemEscolhido} não está disponível! ❌`);
}

comprarItem();
