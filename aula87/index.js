function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Cai no erro");
      return;
    }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all - resolve todas
//  Promise.race - na primeira
// Promise.resolve - 
//  Promise.reject -

// function baixaPagina() {
//   const emCache = true;

//   if (emCache) {
//     return Promise.resolve("Página em cache");
//   } else {
//     return esperaAi("Baixei a página", 3000);
//   }
// }

// baixaPagina()
//   .then(dadosPagina => {
//     console.log(dadosPagina)
//   })
//   .catch(e => console.log(e))

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO", e));

// const promises = [
//   // "Primeiro valor",
//   esperaAi("Promise 1", 3000),
//   esperaAi("Promise 2", 500),
//   esperaAi("Promise 3", 1000),
//   // esperaAi(1000, 1000),
//   // "Outro valor",
// ];

// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });
