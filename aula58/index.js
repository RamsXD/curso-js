// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)
// começa com letra maiúscula

function Pessoa(nome, sobrenome) {
  const ID = 123; // disponível somente dentro da função

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");
p2.metodo();
