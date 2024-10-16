// Defina o estado da porta aqui
const portaAberta = true;
const respostasPossiveis = new Set(["sim", "pode", "entre", "venha, "chegue"]);
const verificaPorta = () => (portaAberta ? "aberta! " : "fechada! ");

console.clear();
console.log(`\n A porta esta ${verificaPorta()}`);

const pedePraEntrar = prompt("Eu posso entrar? \n\n>").toLocaleLowerCase();

function verificaEntrada() {
  return respostasPossiveis.has(pedePraEntrar) && portaAberta;
}

verificaEntrada()
  ? console.log("%cEntrei! 󰩈", "color:green")
  : console.log("%cNão consegui entrar ", "color:red");
