//Definição de uma Função Construtora:
function Pessoa() {
    this.nome
    this.idade;
    this.estado_civil;
}
let pessoa1 = new Pessoa();

pessoa1.nome = "Rodrigo"
pessoa1.idade = 30
pessoa1.estado_civil = "Solteiro"

// Acessando propriedades dos objetos
console.log(pessoa1.nome);
console.log(pessoa1.idade); 
console.log(pessoa1.estado_civil); 

//Definição de uma Função Construtora:
function Pessoa1(nome, idade, estado_civil) {
    this.nome = nome;
    this.idade = idade;
    this.estado_civil = estado_civil;
}


let pessoa2 = new Pessoa1("Rodrigo, 38, solteiro");



// Acessando propriedades dos objetos
console.log(pessoa2);
