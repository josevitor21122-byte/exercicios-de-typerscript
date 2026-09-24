// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.

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
            if (valor > 0) {
                this.saldo += valor
                console.log(`Depósito de R$ ${valor} realizado com sucesso!`)
            } else {
                console.log("Valor de depósito inválido!")
            }
            return this.saldo
        }

        sacar(valor: number): number {
            if (valor > 0 && valor <= this.saldo) {
                this.saldo -= valor
                console.log(`Saque de R$ ${valor} realizado com sucesso!`)
            } else {
                console.log("Saldo insuficiente ou valor inválido!")
            }
            return this.saldo
        }

        exibirSaldo(): void {
            console.log(`Saldo atual: R$ ${this.saldo}`)
        }

        abstract rendimento(): void
        abstract exibirDados(): void
    }

    class ContaCorrente extends Conta {

        sacar(valor: number): number {
            let taxa = 2
            let valorTotal = valor + taxa

            if (valor > 0 && valorTotal <= this.saldo) {
                this.saldo -= valorTotal

                console.log(`Saque: R$ ${valor}`)
                console.log(`Taxa do saque: R$ ${taxa}`)
                console.log(`Valor total descontado: ${valorTotal}`)
            } else {
                console.log("Saldo insuficiente ou valor inválido!")
            }
            return this.saldo
        }

        rendimento(): void {
            console.log("A Conta Corrente não possui rendimento.")
        }

        exibirDados(): void {
            console.log("CONTA CORRENTE")
            console.log(`Titular: ${this.nomeTitular}`)
            console.log(`Saldo: R$ ${this.saldo}`)
        }
    }


    class ContaPoupanca extends Conta {

        rendimento(): void {
            let rendimento = this.saldo * 0.01
            this.saldo += rendimento
            console.log(`Rendimento de 1%: ${rendimento}`)
        }

        exibirDados(): void {
            console.log("CONTA POUPANÇA")
            console.log(`Titular: ${this.nomeTitular}`)
            console.log(`Saldo: R$ ${this.saldo}`)
        }
    }


    let nome = String(
        prompt("Informe o nome do titular:"))

    let tipoConta = 0

    while (tipoConta !== 1 && tipoConta !== 2) {

        tipoConta = Number(prompt("Escolha o tipo de conta:" + "1 - Conta Corrente" + "2 - Conta Poupança"))

        if (tipoConta !== 1 && tipoConta !== 2) {
            console.log("Opção inválida!")
        }
    }

    let conta: Conta

    if (tipoConta === 1) {
        conta = new ContaCorrente(nome)
    } else {
        conta = new ContaPoupanca(nome)
    }

    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(prompt("1 - Depositar" + "2 - Sacar" + "3 - Exibir dados" + "4 - Rendimento" +"0 - Sair"))

        if (opcao === 1) {

            let valor = Number(prompt("Informe o valor para depósito:"))
            conta.depositar(valor)
            conta.exibirSaldo()

        }

        else if (opcao === 2) {

            let valor = Number(prompt("Informe o valor para saque:"))

            conta.sacar(valor)
            conta.exibirSaldo()

        } else if (opcao === 3) {
            conta.exibirDados()

        } else if (opcao === 4) {
            conta.rendimento()
            conta.exibirSaldo()

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}
