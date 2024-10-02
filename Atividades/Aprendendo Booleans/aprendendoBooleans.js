const portaAberta = true;
const verificaPorta = () => (portaAberta ? "aberta! " : "fechada! ");

console.log(`A porta esta ${verificaPorta()}`);

const podeEntrar = prompt("Eu posso entrar?");

function verificaEntrada() {
  return podeEntrar === "pode" && portaAberta;
}

function tentaEntrar() {
  return verificaEntrada() ? "Entrei! 󰩈" : "Nao pude entrar ";
}

console.log(tentaEntrar());
