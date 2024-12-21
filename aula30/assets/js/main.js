// const data = new Date();
// const resultado = document.querySelector('.container h1');

// function getDiaSemanaTexto(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = 'Domingo';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'Segunda-feira';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'Terça-feira';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'Quarta-feira';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = 'Quinta-feira';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'Sexta-feira';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'Sábado';
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = '';
//   } 
// }

// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo' , 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getMesTexto(mes) {
//   let mesTexto;

//   switch (mes) {
//     case 0:
//       mesTexto = 'Janeiro';
//       return mesTexto;
//     case 1:
//       mesTexto = 'Fevereiro';
//       return mesTexto;
//     case 2:
//       mesTexto = 'Março';
//       return mesTexto;
//     case 3:
//       mesTexto = 'Abril';
//       return mesTexto;
//     case 4:
//       mesTexto = 'Maio';
//       return mesTexto;
//     case 5:
//       mesTexto = 'Junho';
//       return mesTexto;
//     case 6:
//       mesTexto = 'Julho';
//       return mesTexto;
//     case 7:
//       mesTexto = 'Agosto';
//       return mesTexto;
//     case 8:
//       mesTexto = 'Setembro';
//       return mesTexto;
//     case 9:
//       mesTexto = 'Outubro';
//       return mesTexto;
//     case 10:
//       mesTexto = 'Novembro';
//       return mesTexto;
//     case 11:
//       mesTexto = 'Dezembro';
//       return mesTexto;

//   }
// }

// function getMesTexto(mesTexto) {
//   const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//   return meses[mesTexto];
// }

// function zeroAEsquerda (num) {
//   return num >= 10 ? num : `0${num}`
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const mes = data.getMonth();

//   const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//   const mesTexto = getMesTexto(mes);

//   return(
//     `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto}` +
//     ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
//   )
// }

// resultado.innerHTML = criaData(data);



// const resultado = document.querySelector('.container h1');
// const data = new Date();
// resultado.innerHTML = data.toLocaleString('pt-BR', { 
//   dateStyle: 'full', 
//   timeStyle: 'short' 
// });

