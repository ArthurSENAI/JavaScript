/*
    O método forEach() em JavaScript é uma forma conveniente e
    eficaz de iterar sobre os elementos de um array, 
    executando uma função de callback para cada elemento do array. Aqui está um resumo do forEach():

    Iteração sobre os elementos do array: O método forEach() 
    é usado para percorrer cada elemento de um array sem a 
    necessidade de usar um loop for tradicional.

    Uso da função de callback: O forEach() recebe uma 
    função de callback como argumento. Essa função é chamada para cada elemento do array e pode receber até três argumentos: o valor do elemento atual, o índice do elemento atual e o próprio array.

    Execução síncrona: A função de callback é executada 
    de forma síncrona para cada elemento do array.
    Isso significa que as iterações ocorrem sequencialmente e uma nova iteração só começará após a conclusão da iteração anterior.

    Não retorna um novo array: Ao contrário de 
    alguns métodos de array, como map() ou filter(), o 
    forEach() não retorna um novo array. Ele simplesmente 
    executa uma operação em cada elemento do array original.
*/
const frutas = ['maçã', 'banana', 'laranja'];

// Usando console.log dentro de uma função de callback 
//personalizada
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// Saída:
// maçã
// banana
// laranja

const numeros2 = [1, 2, 3, 4, 5];

numeros2.forEach(function(numero, indice, array) {
    array[indice] = numero * 2;
});

const numeros1 = [1, 2, 3, 4, 5];

numeros1.forEach(function(numero, indice, array) {
    array[indice] = numero * 2;
});

console.log('Números dobrados:', numeros1);
// Saída: Números dobrados: [2, 4, 6, 8, 10]

const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Ana', idade: 35 }
];

pessoas.forEach(function(pessoa) {
    console.log('Nome:', pessoa.nome, '| Idade:', pessoa.idade);
});

// Saída:
// Nome: João | Idade: 30
// Nome: Maria | Idade: 25
// Nome: Ana | Idade: 35

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];