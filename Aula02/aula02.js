var prompt = require('prompt-sync')();

// FIXME

let opcoesDisponiveis = new Set(["água", "coxinha", "tapioca"])
console.table(opcoesDisponiveis, ["IdDoItem", "ItensDisponiveis"])

let opcaoEscolhida = prompt("O que você gostaria de comprar? ").toLowerCase()

function verificaCompra() {
    return opcoesDisponiveis.has(opcaoEscolhida)
}

function Comprar () {
    if (verificaCompra) {

        opcoesDisponiveis.delete(opcaoEscolhida)
        console.log(`${opcaoEscolhida} comprada!`)
        return
    } else {

    console.error("Item indisponível! Por favor, escolha outro.")
    Comprar()
    return
}
}

Comprar()







