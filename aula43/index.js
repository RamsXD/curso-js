// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz (n) {
  if (isNaN(n)) {
    return n;
  }else if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  }else if (n % 3 === 0) {
    return 'Fizz';
  }else if (n % 5 === 0) {
    return 'Buzz';
  }else if (n % 3 !== 0 && n % 5 !== 0){
    return n;
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}