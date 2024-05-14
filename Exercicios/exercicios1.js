/*
Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.

Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.

Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
*/

//1.
class Pessoa {
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }

}

const Arthur = new Pessoa('Arthur', 29)
console.log(Arthur.apresentar())

//2.
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
        }
    get area(){
        return this.largura * this.altura
    }
    get perimetro(){
        return (this.largura + this.altura) * 2
    }
}