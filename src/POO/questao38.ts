// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). O sistema deve interagir com o
// atendente para registrar as compras do dia, solicitando o tipo de cliente e o valor gasto. Tudo deve ser
// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.

export function executarQuestao38(): void {

    abstract class Cliente {
        private nome: string
        private email: string
        protected saldoCashback: number

        constructor(nome: string, email: string) {
            this.nome = nome
            this.email = email
            this.saldoCashback = 0
        }

        getNome(): string {
            return this.nome
        }

        getEmail(): string {
            return this.email
        }

        getSaldoCashback(): number {
            return this.saldoCashback
        }

        abstract processarCompra(valor: number): void
    }

    class ClientePadrao extends Cliente {

        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            let cashback = valor * 0.01
            this.saldoCashback += cashback
            console.log(`Cashback acumulado: ${cashback}`)
        }
    }

    class ClienteVIP extends Cliente {

        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            let cashback = valor * 0.05
            this.saldoCashback += cashback
            console.log(`Cashback acumulado: ${cashback}`)
        }
    }


    let clientes: Cliente[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de cliente: | 1 - Cliente Padrão | 2 - Cliente VIP"))
        let nome = String(prompt("Informe o nome do cliente: "))
        let email = String(prompt("Informe o e-mail do cliente: "))
        let valorCompra = Number(prompt("Informe o valor da compra: "))

        let cliente: Cliente

        if (tipo === "1") {
            cliente = new ClientePadrao(nome, email)
        } else {
            cliente = new ClienteVIP(nome, email)
        }

        cliente.processarCompra(valorCompra)
        clientes.push(cliente)

        continuar = String(prompt("Deseja registrar outra compra (sim/não): "))
    }

    let totalGeralCashback = 0

    for (let i = 0; i < clientes.length; i++) {
        let c = clientes[i]
        console.log(`Cliente: ${c.getNome()} | E-mail: ${c.getEmail()} | Saldo de Cashback: R$ ${c.getSaldoCashback()}`)
        totalGeralCashback += c.getSaldoCashback()
    }
    console.log(`Valor total de cashback concedido pela loja: R$ ${totalGeralCashback}`)
}