const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30, endereco: {
    rua: 'Rua dos Bobos',
    numero: 123
  }
};

//Atribuição via desestruturação
const { nome, sobrenome, endereco: { rua, numero }, endereco } = pessoa;
console.log(nome, sobrenome, rua, numero, endereco);