// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.
export function executarQuestao6() {
    class ContaCorrente {
        constructor(numConta, nomeCorrentista, saldo = 0) {
            this.numConta = numConta;
            this.nomeCorrentista = nomeCorrentista;
            this.saldo = saldo;
        }
        alterarNome(novoNome) {
            this.nomeCorrentista = novoNome;
            console.log(`Nome alterado com sucesso para: ${this.nomeCorrentista}`);
        }
        deposito(valor) {
            if (valor > 0) {
                this.saldo += valor;
                console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
            }
            else {
                console.log("O valor do depósito deve ser maior que zero.");
            }
        }
        saque(valor) {
            if (valor > 0 && valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo}`);
            }
            else if (valor > this.saldo) {
                console.log("Saldo insuficiente para realizar o saque.");
            }
            else {
                console.log("O valor do saque deve ser maior que zero.");
            }
        }
        exibirExtrato() {
            console.log(`Conta: ${this.numConta}`);
            console.log(`Titular: ${this.nomeCorrentista}`);
            console.log(`Saldo: R$ ${this.saldo}`);
        }
    }
    const minhaConta = new ContaCorrente(12345, "João");
    minhaConta.exibirExtrato();
    minhaConta.deposito(500);
    minhaConta.saque(200);
    minhaConta.alterarNome("José");
    minhaConta.saque(400);
    minhaConta.exibirExtrato();
}
