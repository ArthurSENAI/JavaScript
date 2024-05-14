/*
   Polimorfismo é um conceito fundamental na programação orientada a
   objetos (POO) que se refere à capacidade de objetos de diferentes classes
   responderem ao mesmo método, cada um de acordo com sua própria 
   implementação específica. Isso significa que métodos com o mesmo nome
   podem ter comportamentos diferentes 
   dependendo do objeto que os invoca.
*/

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("O animal faz um som.");
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }

    fazerSom() {
        console.log("Au Au!");
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome);
    }

    fazerSom() {
        console.log("Miau!");
    }
}

// Função que interage com diferentes animais
function interagirComAnimal(animal) {
    animal.fazerSom();
}

// Exemplo de uso
const rex = new Cachorro("Rex");
const garfield = new Gato("Garfield");

// Chama a função interagirComAnimal() para diferentes animais
interagirComAnimal(rex); // Saída: Au Au!
interagirComAnimal(garfield); // Saída: Miau!


class Forma {
    renderizar() {
      console.log("Renderizando forma genérica...");
    }
  }
  
  class Circulo extends Forma {
    renderizar() {
      console.log("Renderizando círculo...");
    }
  }
  
  class Retangulo extends Forma {
    renderizar() {
      console.log("Renderizando retângulo...");
    }
  }
  
  function renderizarForma(forma) {
    forma.renderizar();
  }
  
  // Exemplo de uso
  const circulo = new Circulo();
  const retangulo = new Retangulo();
  
  renderizarForma(circulo); // Saída: Renderizando círculo...
  renderizarForma(retangulo); // Saída: Renderizando retângulo...
  