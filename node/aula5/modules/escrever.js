const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  return fs.writeFile(
    caminho,
    dados,   /*"Frase 1\n"  /n quebra linha */
    { flag: "w" } // o a apaga o conteudo e depois escreve em cima, a adiciona
  );
}

