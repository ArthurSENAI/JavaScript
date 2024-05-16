/*
    1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
    soma deles.

    2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
    não tem nenhum parâmetro nem retorno.

    3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
    e retorna verdadeiro se o número for par e falso caso contrário.

    4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
     como parâmetro e retorna a área do círculo.

    5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
    e retorna a data atual.

    6-Escreva uma função chamada calcularMedia que recebe um array de números 
    como parâmetro e retorna a média desses números.

    7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
     e retorna esse número adicionado a 2.

    8-Defina uma função chamada concatenarStrings que recebe duas strings como
     parâmetros e retorna uma nova string que é a concatenação das duas strings 
     fornecidas.

    9-Escreva uma função chamada verificarNegativo que recebe um número como
     parâmetro e retorna verdadeiro se o número for negativo e falso caso
     contrário.

    10-Crie uma função chamada removerEspacos que recebe uma string como 
    parâmetro e retorna a mesma string sem espaços em branco.

*/

//Exercicio 1: Crie uma função chamada soma que aceita dois parâmetros e retorna a soma deles.
function soma(a,b){
    return a+b;
};

console.log('A soma é: ' + soma(2,3));
console.log('')

//Exercicio 2: Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e não tem nenhum parâmetro nem retorno.
function saudacao(){
    console.log('Olá, mundo!');
};

saudacao();

//Exercicio 3: Escreva uma função chamada verificarPar que recebe um número como parâmetro e retorna verdadeiro se o número
//for par e falso caso contrário.
function verificarPar(numero){
    if(numero%2==0){
        return true;
    } else {
        return false;
    }
};

console.log(verificarPar(2));
console.log(verificarPar(3));
console.log('')

//Exercicio 4: Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo como parâmetro e retorna a área do círculo.
function calcularAreaCirculo(raio){
    return Math.PI*raio*raio;
};

console.log('A área do círculo é: ' + calcularAreaCirculo(2));
console.log('')

//Exercicio 5: Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro e retorna a data atual.
function retornarDataAtual(){
    return new Date();
};

console.log(retornarDataAtual());
console.log('');

//Exercicio 6: Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.
function calcularMedia(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    };
    return soma/array.length;
};

console.log('A média é: ' + calcularMedia([5,5,6,6,4]));
console.log('')

//Exercicio 7: Crie uma função chamada adicionarDois que aceita um número como parâmetro e retorna esse número adicionado a 2.
function adicionarDois(numero){
    return numero + 2;
};

console.log(adicionarDois(2));
console.log('')

//Exercicio 8: Defina uma função chamada concatenarStrings que recebe duas strings como parâmetros e retorna uma nova string 
//que é a concatenação das duas strings fornecidas.
function concatenarPalavras(palavra1, palavra2){
    return palavra1 + ' ' + palavra2;
};

console.log(concatenarPalavras('Olá', 'Mundo'));
console.log('');

//Exercicio 9: Escreva uma função chamada verificarNegativo que recebe um número como parâmetro e retorna verdadeiro se 
//o número for negativo e falso caso contrário.
function verificarNegativo(numero){
    return numero < 0;
};

console.log(verificarNegativo(-1));
console.log('');

//Exercicio 10: Crie uma função chamada removerEspacos que recebe uma string como parâmetro e retorna a mesma string sem espaços em branco.
function removerEspacos(palavra){
    return palavra.replace(' ', '');
};

console.log(removerEspacos("Olá Mundo!"));
console.log('');