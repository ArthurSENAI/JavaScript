/*
Claro! As estruturas condicionais em JavaScript, como if, else, e else if, 
são fundamentais para controlar o fluxo de execução do código com base em 
condições específicas. Essas estruturas permitem que um programa tome decisões
 dinâmicas, executando diferentes blocos de código dependendo se certas condições
  são atendidas ou não.

if: O if é a estrutura básica de uma condição. Ele verifica se uma 
expressão é verdadeira e, se for, executa um bloco de código associado.

else: O else é usado em conjunto com o if para fornecer um bloco de código 
alternativo a ser executado quando a condição do if for falsa.

else if: O else if é usado quando há múltiplas condições a serem verificadas. 
Se a condição do if for falsa, o else if permite que outra condição seja verificada. Isso pode ser repetido várias vezes para abordar diferentes cenários.

*/
//if
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
//if else
let idade1 = 16;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
// if else if e else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}