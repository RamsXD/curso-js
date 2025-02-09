// definePropriety - Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: false, // nao configuravel
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor != "number") {
        throw new TypeError("error");
      }

      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa', '')
      nome = valor;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 'sdasd';
// console.log(p1.estoque);
const p2 = criaProduto("Camiseta");
p2.nome = "qualquer coisa";
console.log(p2.nome);
