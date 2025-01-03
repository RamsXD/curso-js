// return
// Retorna um valor
// Termina a função
function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

soma2(5, 2);

/////

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome}
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);