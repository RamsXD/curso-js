// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

// Retorne as pessoas quie tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome terminas com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande)
const pessoasVelhas = pessoas.filter((obj) => obj.idade > 50);
// console.log(pessoasVelhas)
const nomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(nomeTerminaComA);
