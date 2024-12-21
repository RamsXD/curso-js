//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
  
  }

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p')
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  }else{
    p.classList.add('bad')
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
  
}






// function escopo() {

//   function clicou(evento) {
//     evento.preventDefault();
//     const peso = document.querySelector("#peso");
//     const altura = document.querySelector("#altura");
//     const resultado = document.querySelector("#res");
//     const total = Number(peso.value) / (Number(altura.value) * Number(altura.value));
//     console.log(peso.value, altura.value);
 
//     if ((total < 18.5)){
//       resultado.innerHTML = `<span>Seu IMC é ${total} (Abaixo do peso)</span>`;
//     } else if (total >= 18.5 && total <= 24.9) {
//       resultado.innerHTML = `<span>Seu IMC é ${total} (Peso normal)</span>`;
//     } else if (total >= 25 && total <= 29.9) {
//       resultado.innerHTML = `<span>Seu IMC é ${total} (Sobrepeso)</span>`;
//     } else if (total >= 30 && total <= 34.9) {
//       resultado.innerHTML = `<span>Seu IMC é ${total} (Obesidade grau 1)</span>`;
//     } else if (total >= 35 && total <= 39.9) {
//       resultado.innerHTML = `<span>Seu IMC é ${total} (Obesidade grau 2)</span>`;
//     } else if (total > 40) {
//       resultado.innerHTML = `<span>Seu IMC é ${total} (Obesidade grau 3)</span>`;
//     } else if (peso.value <= 0 || isNaN(peso.value) || falsy(peso.value)) {
//       resultado.innerHTML = `<span>Digite um peso válido!</span>`;
//     } else if (altura.value <=0 || isNaN(altura.value) || falsy(altura.value)) {
//       resultado.innerHTML = `<span>Digite uma altura válida!</span>`;
//     } else if (isNaN(total)){
//       resultado.innerHTML = `<span>Digite valores válidos!</span>`;
//     }
//   }
//   document.addEventListener("submit", clicou);
// }
// escopo();
