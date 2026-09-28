// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). O sistema deve interagir com o
// atendente para registrar as compras do dia, solicitando o tipo de cliente e o valor gasto. Tudo deve ser
// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.

export function executarQuestaoCashback(): void {

    abstract class Cliente {
        private nome: string
        private email: string
        private saldoCashback: number

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

        adicionarCashback(valor: number): void {
            this.saldoCashback += valor
        }

        abstract processarCompra(valor: number): void
        abstract getDescricaoTipo(): string
    }

    class ClientePadrao extends Cliente {
        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            let cashback = valor * 0.01
            this.adicionarCashback(cashback)
        }

        getDescricaoTipo(): string {
            return "Padrão"
        }
    }

    class ClienteVIP extends Cliente {
        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            let cashback = valor * 0.05
            this.adicionarCashback(cashback)
        }

        getDescricaoTipo(): string {
            return "VIP"
        }
    }

    let clientes: Cliente[] = []
    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(
            prompt("1 - Cadastrar Cliente Padrão e registrar compra" +"2 - Cadastrar Cliente VIP e registrar compra" +"3 - Registrar compra para cliente existente" +"4 - Exibir resumo de cashback" +"0 - Sair" +"Escolha uma opção:"))

        if (opcao === 1 || opcao === 2) {

            let nome = String(prompt("Informe o nome do cliente:"))

            while (nome === "") {
                console.log("O nome não pode ser vazio!")
                nome = String(prompt("Informe um nome válido:"))
            }

            let email = String(prompt("Informe o e-mail do cliente:"))

            while (email === "") {
                console.log("O e-mail não pode ser vazio!")
                email = String(prompt("Informe um e-mail válido:"))
            }

            let valorCompra = Number(prompt("Informe o valor da compra:"))

            while (valorCompra <= 0) {
                console.log("O valor da compra deve ser maior que zero!")
                valorCompra = Number(prompt("Informe um valor de compra válido:"))
            }

            let cliente: Cliente

            if (opcao === 1) {
                cliente = new ClientePadrao(nome, email)
                console.log("Cliente Padrão cadastrado com sucesso!")
            } else {
                cliente = new ClienteVIP(nome, email)
                console.log("Cliente VIP cadastrado com sucesso! Frete grátis garantido.")
            }

            cliente.processarCompra(valorCompra)
            clientes.push(cliente)

        } else if (opcao === 3) {
            if (clientes.length === 0) {
                console.log("Nenhum cliente cadastrado ainda!")
            } else {
                let emailBusca = String(prompt("Informe o e-mail do cliente para registrar a compra:"))
                let indiceEncontrado = -1

                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].getEmail() === emailBusca) {
                        indiceEncontrado = i
                    }
                }

                if (indiceEncontrado === -1) {
                    console.log("Cliente não encontrado com esse e-mail!")
                } else {
                    let valorCompra = Number(prompt("Informe o valor da nova compra:"))

                    while (valorCompra <= 0) {
                        console.log("O valor da compra deve ser maior que zero!")
                        valorCompra = Number(prompt("Informe um valor de compra válido:"))
                    }

                    clientes[indiceEncontrado].processarCompra(valorCompra)
                    console.log(`Compra registrada com sucesso para ${clientes[indiceEncontrado].getNome()}!`)
                }
            }

        } else if (opcao === 4) {
            if (clientes.length === 0) {
                console.log("Nenhum cliente foi cadastrado!")
            } else {
                let totalCashbackLoja = 0

                console.log("=== RESUMO DE CASHBACK DA PLATAFORMA ===")
                for (let i = 0; i < clientes.length; i++) {
                    let c = clientes[i]
                    let cashbackCliente = c.getSaldoCashback()
                    totalCashbackLoja += cashbackCliente

                    console.log(`Cliente: ${c.getNome()} | E-mail: ${c.getEmail()} | Tipo: ${c.getDescricaoTipo()}`)
                    console.log(`Saldo de Cashback Acumulado: R$ ${cashbackCliente}`)
                }

                console.log(`Valor total de cashback concedido pela loja: R$ ${totalCashbackLoja}`)
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}