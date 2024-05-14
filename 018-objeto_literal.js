/*
Um objeto literal em JavaScript é uma coleção de pares de chave-valor, 
onde chaves são strings (ou símbolos a partir do ES6) que representam 
nomes de propriedades, e valores podem ser qualquer tipo de dado suportado
 por JavaScript (números, strings, booleanos, funções, outros objetos, etc.).
Os objetos literais são delimitados por chaves {} e podem conter zero ou mais
 pares de chave-valor.

*/

//A sintaxe básica para criar um objeto literal é colocar pares de 
//chave-valor dentro de chaves

const pessoa = {
    nome: "João",
    idade: 30,
    casado: true
};

//Acesso a Propriedades:
console.log(pessoa.nome); // Saída: João
console.log(pessoa['idade']); // Saída: 30

pessoa.nome = "rodrigo"
pessoa.idade = 42
pessoa.casado = false
console.log(pessoa.nome); 
console.log(pessoa['idade']); 

//DESCONTRUTORES - Adição e Remoção de Propriedades:
pessoa.profissao = "Programador"; // Adicionando nova propriedade
console.log("A profissão da pessoa e:", pessoa.profissao)
delete pessoa.casado; // Removendo propriedade existente

//Objetos Aninhados:
const empresa = {
    nome: "ABC Corp",
    funcionarios: [
      { nome: "Alice", cargo: "Engenheira" },
      { nome: "Bob", cargo: "Designer" }
    ],
    fundadaEm: new Date(2000, 0, 1)
  };

  console.log("Nome da empresa: ",empresa.nome); // Saída: ABC Corp
  console.log("Seus funcionarios sao:", empresa.funcionarios); // Saída: [ { nome: 'Alice', cargo: 'Engenheira' }, { nome: 'Bob', cargo: 'Designer' } ]
  console.log("foi fundada em :", empresa.fundadaEm); // Saída: Sat Jan 01 2000 00:00:00 GMT+0000 (Coordinated Universal Time)

//Métodos em Objetos Literais:  
const calculadora = {
    soma: function(a, b) {
      return a + b;
    },
    subtracao(a, b) {
      return a - b;
    }
  };
//Iteração sobre Propriedades:
for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave]);
  }
  