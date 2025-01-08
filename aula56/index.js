//factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,  // < this
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' '),
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ')
      console.log(valor);
    },

    fala(assunto = 'Falando sobre nada') {
      return `${this.nome} está ${assunto}.`;
    },
    altura,
    peso,
    get imc() { // Getter > passa a fingir ser um método da classe
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Ótavio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)
console.log(p1.fala());
// console.log(p1.imc);
