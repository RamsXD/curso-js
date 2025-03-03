class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

const p1 = new Pessoa("Luiz", "Miranda");
console.log(p1);
p1.falar();

 //  ===

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
}

const p2 = new Pessoa2("Luiz", "Miranda");
console.log(p2);
p2.falar();
