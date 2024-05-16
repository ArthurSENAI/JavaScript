/*
    1-Crie uma função construtora chamada Animal que define propriedades para nome 
        e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".
    2-Defina uma função construtora Produto que tem propriedades nome, preco, 
        e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e 
        quantidade "5".
    3-Crie uma função construtora Carro com propriedades marca, modelo, e ano.
        Crie um objeto carro1 com marca "Toyota", modelo "Corolla" e ano "2022".
    4-Defina uma função construtora Livro que tenha propriedades titulo, autor e 
        anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado 
        de Assis" e ano de publicação "1899".
    5-Crie uma função construtora ContaBancaria com propriedades titular, saldo e tipo. 
        Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".
    6-Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
        Crie um objeto cachorro1 com raça "Labrador", cor "Marrom" e idade "5".
    7-Crie uma função construtora Aluno com propriedades nome, matricula e curso.
        Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia Civil".
    8-Defina uma função construtora Restaurante com propriedades nome, endereco e 
        tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço "Rua das Pizzas, 123" e tipo de cozinha "Italiana".
    9-Crie uma função construtora Filme com propriedades titulo, diretor e 
        anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
        diretor "Francis Ford Coppola" e ano de lançamento "1972".
    10-Defina uma função construtora Funcionario com propriedades nome, cargo e 
        salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e 
        salário "7000".
*/

// Exercicio 1: Crie uma função construtora chamada Animal que define propriedades para nome 
//  e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".
function Animal() {
    this.nome;
    this.especie;
}
var animal1 = new Animal 
animal1.nome = 'Leão';
animal1.especie = "Felino"

console.log('nome:', animal1.nome, '| especie:', animal1.especie)

// Exercicio 2: Defina uma função construtora Produto que tem propriedades nome, preco, 
// e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e 
// quantidade "5".
function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
};

var produto1 = new Produto('Notebook', 2500, 5)

console.log('nome:', produto1.nome, '| preco:', produto1.preco, '| quantidade:', produto1.quantidade)

// Exercicio 3: Crie uma função construtora Carro com propriedades marca, modelo, e ano.
// Crie um objeto carro1 com marca "Toyota", modelo "Corolla" e ano "2022".
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
};

var carro1 = new Carro("Toyota", "Corolla", 2022)

console.log('nome:', carro1.marca, '| modelo:', carro1.modelo, '| ano:', carro1.ano)

// Exercicio 4: Defina uma função construtora Livro que tenha propriedades titulo, autor e 
// anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado 
// de Assis" e ano de publicação "1899".
function Livro(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
};

var livro1 = new Livro('Dom Casmurro', 'Machado de Assis', 1899)

console.log('titulo:', livro1.titulo, '| autor:', livro1.autor, '| anoPublicado:', livro1.anoPublicacao)

// Exercicio 5: Crie uma função construtora ContaBancaria com propriedades titular, saldo e tipo. 
// Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".
function ContaBancaria(titular, saldo, tipo) {
    this.titular = titular;
    this.saldo = saldo;
    this.tipo = tipo;
};

var conta1 = new ContaBancaria('João', 5000, 'Corrente')

console.log('titular:', conta1.titular, '| saldo:', conta1.saldo, '| tipo:', conta1.tipo)

// Exercicio 6: Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
// Crie um objeto cachorro1 com raça "Labrador", cor "Marrom" e idade "5".
function Cachorro(raca, cor, idade) {
    this.raco = raca
    this.cor = cor
    this.idade = idade
};

var cachorro1 = new Cachorro('Labrador', 'Marrom', 5)

console.log('raca:', cachorro1.raca, '| cor:', cachorro1.cor, '| idade:', cachorro1.idade)

// Exercicio 7: Crie uma função construtora Aluno com propriedades nome, matricula e curso.
// Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia Civil"
function Aluno(nome, matricula, curso){
    this.nome = nome
    this.matricula = matricula
    this.curso = curso
};

var aluno1 = new Aluno('Maria', '2021001', 'Engenharia Civil')

console.log('nome:', aluno1.nome, '| matricula:', aluno1.matricula, '| curso:', aluno1.curso)

// Exercicio 8: Defina uma função construtora Restaurante com propriedades nome, endereco e 
// tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço "Rua das Pizzas, 123" e tipo de cozinha "Italiana".
function Restaurante(nome, endereco, tipoCozinha) {
    this.nome = nome
    this.endereco = endereco
    this.tipoCozinha = tipoCozinha
};

var restaurante1 = new Restaurante('La Pizzeria', 'Rua das Pizzas, 123', 'Italiana')

console.log('nome:', restaurante1.nome, '| endereco:', restaurante1.endereco, '| tipoCozinha:', restaurante1.tipoCozinha)

// Exercicio 9: Crie uma função construtora Filme com propriedades titulo, diretor e 
// anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
// diretor "Francis Ford Coppola" e ano de lançamento "1972".
function Filme(titulo, diretor, anoLancamento) {
    this.titulo = titulo
    this.diretor = diretor
    this.anoLancamento = anoLancamento
};
var filme1 = new Filme('O Poderoso Chefão', 'Francis Ford Coppola', '1972')
console.log('titulo:', filme1.titulo, '| diretor:', filme1.diretor, '| anoLancamento:', filme1.ano)

// Exercicio 10: Defina uma função construtora Funcionario com propriedades nome, cargo e 
// salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e 
// salário "7000".
function Funcionario(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
    };
  
var funcionario1 = new Funcionario('Carlos', 'Gerente', '7000')

console.log('nome:', funcionario1.nome, '| cargo:', funcionario1.cargo, '| salario:', funcionario1.salario)