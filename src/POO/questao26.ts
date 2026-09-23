// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.

export function executarQuestao26(): void {
    abstract class Conta {
        protected nomeTitular: string
        protected saldo: number

        constructor(nomeTitular: string, saldo: number = 0) {
            this.nomeTitular = nomeTitular
            this.saldo = saldo
        }

        depositar(valor: number): number {
            if(valor > 0) {
                this.saldo += valor
            }
                return this.saldo
        }

        sacar(valor: number): number {
            if(valor > 0 && valor <= this.saldo) {
                this.saldo -= valor
            }
            return this.saldo
        }

        abstract exibirDados(): void 

    }

    class ContaCorrente extends Conta {
        constructor(nomeTitular: string, saldo: number = 0) {
            super(nomeTitular, saldo)
        }

        sacar(valor: number): number {
            let taxa = 2
            let valorTotal = valor + taxa
            if(valor > 0 && valorTotal <= this.saldo) {
                this.saldo -= valorTotal
            }

            return this.saldo
        }

        exibirDados(): void {
            console.log(`Nome Do Titular: ${this.nomeTitular}`)
            console.log(`Saldo atual da conta corrente: ${this.saldo}`)
        }
    }

    class ContaPoupanca extends Conta {
        constructor(nomeTitular: string, saldo: number = 0) {
            super(nomeTitular, saldo)        
        }

        rendimento(): number {
            let redimento = this.saldo * 0.01
            this.saldo += redimento 
            return this.saldo
        }

        exibirDados(): void {
            console.log(`Nome do Titular: ${this.nomeTitular}`)
            console.log(`Saldo atual da conta poupança: ${this.saldo}`)
        }
    }
    let opcao = -1

while (opcao !== 0) {
    opcao = Number(prompt("1 - Depositar" + "2 - Sacar" + "3 - Exibir dados" + "0 - Sair"))

    if(opcao === 1) {
        let valor = number(prompt(""))
    }
}


}