// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i in frutas) {
//   console.log(frutas[i]);
// }

const pessoa = {
  nome: 'Ramiro',
  sobrenome: 'Ximenes',
  idade: 23
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}