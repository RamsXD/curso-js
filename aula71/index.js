// definePropriety - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar ou nao
    configurable: false // nao configuravel
  });
}

// const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 50000
// delete p1.estoque
// console.log(p1);

//define Proprieties

function Produto(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: false, // pode alterar ou nao
      configurable: false,
    }, // nao configuravel
    preco: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: false, // pode alterar ou nao
      configurable: false,
    }, // nao configuravel
    estoque: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: false, // pode alterar ou nao
      configurable: false,
    }, // nao configuravel
  });
}
