/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = { nome: "Caneca", preco: 1.8 };
// Object.freeze(produto);
// produto.nome = 'outro nome' // nao vai funcionar por conta do freeze
// const outraCoisa = produto;
// console.log(Object.keys(produto));
// // outraCoisa.nome = 'Rams'

// const produto = { nome: "Caneca", preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//   writable:false,
//   configurable:false,
//   value: 'qualque outra coisa'
// })
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

const produto = { nome: "Caneca", preco: 1.8, materia: "porcelana" };

// value // retorna o valor
// keys // retorna as chaves
// entries // retorna ambos

for (let entry of Object.entries(produto)) {
  console.log(entry);
}
