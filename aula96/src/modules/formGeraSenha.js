import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const chkSenha = document.querySelector(".chk-senha");

export default () => {
  geraSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || 'Nada selecionado.'
}
