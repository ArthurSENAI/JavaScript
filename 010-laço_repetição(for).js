/*O que é o Laço for em JavaScript?
O laço for é uma estrutura de controle 
que permite executar repetidamente um bloco 
de código um número específico de vezes.
 É uma maneira conveniente de iterar sobre 
 elementos em uma coleção, como um array,
  ou executar uma ação repetida com base em uma 
  condição. */

// Este é um loop for que será executado 6 vezes, com a variável i assumindo os valores de 0 a 5
for (let i = 0; i <= 5; i++) {
    // Este irá registrar o valor atual de i no console
    console.log(i)
}

// Este é um array de strings representando diferentes tipos de frutas
const frutas = ['maça', 'banana', 'laranja', 'pera', 'melancia'];

// Este é um loop for que será executado uma vez para cada elemento no array de frutas
for (let i = 0; i <= frutas.length; i++) {
    // Este irá registrar uma mensagem no console indicando que você gosta da fruta atual
    // A fruta atual é acessada usando a notação de colchetes com a variável i como índice
    console.log('Eu gosto de ' + frutas[i]+'\n')
}

// Este é um objeto com três propriedades: firstName, lastName e age
const person = {
    firstName: 'Seu',
    lastName: 'Ze',
    age: 20
};

// Este é um loop for...in que irá iterar sobre cada propriedade no objeto person
for (let key in person) {
    // Este irá registrar o nome da propriedade atual e seu valor no console
    console.log(key + ': ' + person[key])
};

// Este é um loop for que será executado 10 vezes, com a variável i assumindo os valores de 0 a 9
for (let i = 0; i < 10; i++) {
    // Este irá verificar se o valor atual de i é igual a 5
    if (i === 5) {
        // Se for, este irá interromper o loop e impedir que ele continue executando
        break;
    }
    // Se o valor atual de i não for igual a 5, este irá registrar o valor atual de i no console
    console.log(i);
}

// Este é um loop for que será executado 6 vezes, com a variável i assumindo os valores de 0 a 5
for (let i = 0; i <= 5; i++) {
    // Este irá registrar o valor atual de i no console
    console.log(i)
}
