const numero = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
    texto.innerHTML = `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong>.</p>`
    texto.innerHTML += `<p>${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`;
    texto.innerHTML += `<p>É NaN? <strong>${isNaN(numero)}</strong></p>`;
    texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;
    texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;