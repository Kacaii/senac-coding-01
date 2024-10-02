const portaAberta = true;
const verificaPorta = () => (portaAberta ? "aberta! " : "fechada! ");

const respostasPossiveis = new Set(["sim", "pode", "entre", "venha"]);

console.log(` A porta esta ${verificaPorta()}`);

const pedePraEntrar = prompt("Eu posso entrar?").toLocaleLowerCase();

function verificaEntrada() {
  return respostasPossiveis.has(pedePraEntrar) && portaAberta;
}

function tentaEntrar() {
  return verificaEntrada() ? "Entrei! 󰩈" : "Não consegui entrar ";
}

console.log(tentaEntrar());
