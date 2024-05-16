/*
    Este relatório aborda o conceito de função em JavaScript, uma das
    características    mais fundamentais e poderosas da linguagem de programação. 
    Funções em JavaScript     são blocos de código que podem ser nomeados e 
    reutilizados para executar uma     tarefa específica. Elas desempenham
    um papel crucial no desenvolvimento de    aplicativos da web modernos, 
     permitindo modularidade, reutilização 
    de código e abstração.

    Uma função em JavaScript é definida usando a palavra-chave function, seguida 
    por um nome opcional para a função e uma lista de parâmetros entre parênteses. 
    O corpo da função é então colocado entre chaves {}. Aqui está um exemplo 
    simples de uma função em JavaScript que retorna a soma de dois números:

*/

//Funções Nomeadas: São funções que têm um nome definido explicitamente. Exemplo:
function soma(a, b) {
    return a + b;
}

//Funções Nomeadas: São funções que têm um nome definido explicitamente. Exemplo:
function multiplicacao(x, y) {
    return x * y;
}

//Expressões de Função: São funções definidas dentro de uma expressão. (Função Anonima) Exemplo:
let dividir = function(x, y) {
    return x / y;
};

let dividir1 = function(x, y) {
    return x / y;
};

let resultadoDivisao = dividir1(10, 2);
console.log(resultadoDivisao); // Saída: 5

//Arrow Functions: São uma forma mais concisa de escrever funções em JavaScript.
//Exemplo:
let quadrado = (x) => {
    return x * x;
};

let potencia = quadrado(2)
console.log(potencia); // Saída: 5

//Funções sem Retorno e sem Parâmetros
let quadrado1 = (x, y) => {
    return x * y;
};

// Chamada da função quadrado
let resultadoMultiplicacao = quadrado(5, 3);
console.log(resultadoMultiplicacao); // Saída: 15


function saudacao() {
    console.log("Olá, mundo!");
}

saudacao(); // Chamada da função


//Funções com Retorno e sem Parâmetros

function saudacao1() {
    
    return "Ola mundo!- 1";
}

let texto = saudacao1();
console.log(texto);

function soma(a, b) {
    return a + b;
}

let resultado = soma(3, 5); // Chamada da função e atribuição do resultado a uma variável
console.log(resultado); // Saída: 8

//Funções com Retorno e com Parâmetros

function soma(a, b) {
    return a + b;
}

let resultado1 = soma(3, 5); // Chamada da função e atribuição do resultado a uma variável
console.log("(1)A soma de a mais b e:",resultado1); // Saída: 8

//Funções com Retorno e com Parâmetros

function somar(a, b) {
    console.log("(2)A soma de a mais b e:", a+b);
}

somar(3, 5); // Chamada da função e atribuição do resultado a uma variável

