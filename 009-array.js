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
let array2 = new Array(1,2,3,4,5);

// Criando um array vazio []
let array3 = [];

// Acessando indece do Array
let array4 = ["Hello", 42, true];

// Verificando o tamanho do array
let array = [10, 20, 30, 40, 50];
console.log(array[0])// Saida 10
console.log(array[2])// Saida 30

// 
let arraylength = [1,2,3]
console.log(arraylength.length); // Saida 3

// Inserindo um item no array
arraylength.push(4)
console.log(arraylength) // Saida [1, 2, 3, 4]

// Removendo
let removedElement = arraylength.pop();
console.log(removedElement)// Removendo o 4
console.log(arraylength)


