// Atividade 08

function celsiusPraFahrenheit(celsius) {
  return (celsius + 9 / 5 + 32).toFixed(2);
}

// Atualize os graus aqui
const resultado = celsiusPraFahrenheit(28);
console.log("Temperatura em fahrenheit: " + resultado);
