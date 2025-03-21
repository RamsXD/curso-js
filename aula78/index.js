// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`
  );
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(50);
console.log(conta1);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructior = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);

function ContaPolpanca(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaPolpanca.prototype = Object.create(Conta.prototype);
ContaPolpanca.prototype.constructior = ContaPolpanca;

const cp = new ContaPolpanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
