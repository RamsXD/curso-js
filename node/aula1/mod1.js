// const nome = "Luiz";
// const sobrenome = "Miranda";

// const falaNome = () => nome + " " + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Luiz";
const sobrenome = "Miranda";

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.Pessoa = Pessoa;
