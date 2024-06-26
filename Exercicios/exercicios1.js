/*
1.Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.

2.Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

3.Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.

4.Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

5.Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

6.Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

7.Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

8.Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

9.Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

10.Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
*/

//1.Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.
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
Arthur.apresentar()
console.log("")

//2.Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo
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
const retangulo = new Retangulo(10, 5)
console.log(`A área do retângulo é ${retangulo.area} e o perímetro é ${retangulo.perimetro}`)
console.log("")

//3.Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.
class ContaBancaria {
    constructor(agencia, numero, saldo) {
        this.agencia = agencia
        this.numero = numero
        this._saldo = saldo
        }
        get saldo() {
            return this._saldo
        }
        set saldo(valor) {
            if (valor < 0) {
                throw new Error('Valor inválido')
                }
            this._saldo = valor
        }
        depositar(valor) {
            if (valor < 0) {
                throw new Error('Valor inválido')
            }
            this._saldo += valor
        }
        sacar(valor) {
            if (valor < 0) {
                throw new Error('Valor inválido')
            }
            this._saldo -= valor
        }
}
const ContaArthur = new ContaBancaria ('1360-0','10.842', 10000)
console.log('O seu saldo atual é: ' + ContaArthur.saldo)
ContaArthur.depositar(2000)
console.log('O seu saldo atual é: ' + ContaArthur.saldo)
ContaArthur.sacar(1500)
console.log('O seu saldo atual é: ' + ContaArthur.saldo)
console.log("")

//4.Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        }
        get total(){
            return this.preco * this.quantidade
        }
}
const Celular = new Produto('Samsung S20', 1320.00, 1)
console.log(`O total do produto ${Celular.nome} é ${Celular.total}`)
console.log("")

//5.Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        }
    
    exibir(){
        console.log(`O carro ${this.marca} ${this.modelo} foi fabricado em ${this.ano}`)
    }
}
const Carro1 = new Carro('Fiat', 'Uno', 2010)
Carro1.exibir()
console.log("")

//6.Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.
class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }
    calcularMedia() {
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }
        return soma / this.notas.length
    }
}
const Aluno1 = new Aluno('Arthur', 123456, [10, 10, 8, 8])
console.log(`A média do aluno ${Aluno1.nome} é ${Aluno1.calcularMedia()}`)
console.log("")

//7.Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.
class Animal {
    constructor(nome, tipo) {
        this.nome = nome
        this.tipo = tipo
    }
    exibir() {
        console.log(`O animal ${this.nome} é do tipo ${this.tipo}`)
    }
}
const Animal1 = new Animal('Cachorro', 'Mamífero')
Animal1.exibir()
console.log("")

//8.Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.
class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    calcularArea(){
        let p = (this.lado1 + this.lado2 + this.lado3) / 2 
        return Math.sqrt(p * (p - this.lado1) * (p - this.lado2) * (p - this.lado3))
    }

    calcularPerimetro(){
        return this.lado1 + this.lado2 + this.lado3
    }               
}
const Triangulo1 = new Triangulo(5, 6, 7)
console.log(`A área do triângulo é ${Triangulo1.calcularArea()}`)
console.log(`O perímetro do triângulo é ${Triangulo1.calcularPerimetro()}`)
console.log("")

//9.Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }
    
    exibir(){
        console.log(`O livro ${this.titulo} do autor ${this.autor} foi publicado em ${this.ano}`)
    }
}
const Livro1 = new Carro('Eragon', 'Christopher Paolini', 2003)
Livro1.exibir()
console.log("")

//10.Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
class Circulo {
    constructor(raio) {
        this.raio = raio
    }
    calcularArea(){
        return Math.PI * this.raio * this.raio
    }

    calcularPerimetro(){
        return 2 * Math.PI * this.raio
    }               
}

const Circulo1 = new Circulo(20)
console.log(`A área do círculo é ${Circulo1.calcularArea()}`)
console.log(`O perímetro do círculo é ${Circulo1.calcularPerimetro()}`)
console.log("")