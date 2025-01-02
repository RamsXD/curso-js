// Declaração de função (Function hoisting)
falaOI();

function falaOI() {
  console.log('Oi');
}

// falaOI();

// Function expression

const souUmDado = function() {
  console.log('Eu sou um dado!');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log('Eu sou uma função arrow!');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Eu estou falando!');
  }
};
obj.falar();

