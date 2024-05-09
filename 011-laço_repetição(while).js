/*
    O while é utilizado quando
    queremos executar um bloco de código
    repetidamente enquanto uma condição específica
    for verdadeira. Ele é especialmente útil quando o
    número de iterações não é conhecido antecipadamente ou 
    quando precisamos repetir uma ação até que uma condição 
    específica seja atendida.
*/

/*
    O while é utilizado quando
    queremos executar um bloco de código
    repetidamente enquanto uma condição específica
    for verdadeira. Ele é especialmente útil quando o
    número de iterações não é conhecido antecipadamente ou 
    quando precisamos repetir uma ação até que uma condição 
    específica seja atendida.
*/

//contagem regressiva usando while
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}
//Gerar números aleatórios até atingir um limite
let numero;
do {
  numero = parseInt(prompt("Digite um número maior que 10:"));
} while (numero <= 10);

console.log("Número válido: " + numero);

let numeroAleatorio;
while (true) {
  numeroAleatorio = Math.random(); // Gera um número aleatório entre 0 e 1
  console.log(numeroAleatorio);
  if (numeroAleatorio > 0.8) {
    break; // Sai do loop se o número gerado for maior que 0.8
  }
}
//Exemplo 2: Contagem de tentativas de login
let senhaCorreta = "senha123";
let tentativas = 3;

while (tentativas > 0) {
  let senhaUsuario = prompt("Digite sua senha:");
  if (senhaUsuario === senhaCorreta) {
    console.log("Login bem-sucedido!");
    break; // Sai do loop se a senha estiver correta
  } else {
    tentativas--;
    console.log("Senha incorreta. Tentativas restantes: " + tentativas);
  }
}

if (tentativas === 0) {
  console.log("Você excedeu o número de tentativas permitidas. Contate o suporte.");
}
