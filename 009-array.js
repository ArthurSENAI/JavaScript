/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/

// Usando colchetes []
let array1 = [1, 2, 3, 4, 5];

// Usando o construtor Array()
let array2 = new Array(1, 2, 3, 4, 5);

// Criando um array vazio []
let array3 = [];

// Array podem conter diferentes tipos de dados
let array4 = ["Hello", 42, true];

// Acessando indice do Array
let array = [10, 20, 30, 40, 50];
console.log(array[0])// Saida 10
console.log(array[2])// Saida 30

// Verificando o tamanho do array
let arraylength = [1,2,3]
console.log(arraylength.length); // Saida 3

// Inserindo um item no array
arraylength.push(4)
console.log(arraylength) // Saida [1, 2, 3, 4]

// Removendo um item no array
let removedElement = arraylength.pop();
console.log(removedElement)// Removendo o 4
console.log(arraylength)

// Removendo um item pelo index no array
let array5 = [1, 2, 3, 4, 5];
// array5.splice(index, deleteNumbers)
array5.splice(2, 1)
console.log(array5)// Saida: [1, 2, 4, 5]
console.log(arraylength)

