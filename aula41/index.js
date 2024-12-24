// Escreva uma função que recebe 2 números e retorne o maior deles


// const max = 1000;
// const min = 1;

// function random(min, max) {
//   const r1 = Math.random() * (max - min) + min;
//   const r2 = Math.random() * (max - min) + min;
//   console.log(Math.floor(r1), Math.floor(r2));
//   if (r1 > r2) return Math.floor(r1);
//   return Math.floor(r2);

// };

// console.log(random(min, max));


//correção
// function max(x, y) {
//   return x > y ? x : y;
// }
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));

