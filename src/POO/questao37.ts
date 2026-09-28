// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.

export function executarQuestao37(): void {

    abstract class Consumidor {
        private numeroConta: string
        private quantidadeKWh: number

        constructor(numeroConta: string, quantidadeKWh: number) {
            this.numeroConta = numeroConta
            this.quantidadeKWh = quantidadeKWh
        }

        getNumeroConta(): string {
            return this.numeroConta
        }

        getQuantidadeKWh(): number {
            return this.quantidadeKWh
        }

        abstract calcularValor(): number
        abstract getDescricaoTipo(): string
    }

    class ConsumidorResidencial extends Consumidor {
        constructor(numeroConta: string, quantidadeKWh: number) {
            super(numeroConta, quantidadeKWh)
        }

        calcularValor(): number {
            return this.getQuantidadeKWh() * 0.75
        }

        getDescricaoTipo(): string {
            return "Residencial"
        }
    }

    class ConsumidorComercial extends Consumidor {
        constructor(numeroConta: string, quantidadeKWh: number) {
            super(numeroConta, quantidadeKWh)
        }

        calcularValor(): number {
            let kwh = this.getQuantidadeKWh()
            if (kwh <= 1000) {
                return kwh * 0.60
            } else {
                let excedente = kwh - 1000
                return (1000 * 0.60) + (excedente * 0.50)
            }
        }

        getDescricaoTipo(): string {
            return "Comercial"
        }
    }

    let consumidores: Consumidor[] = []
    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(prompt("1 - Cadastrar Consumidor Residencial" +"2 - Cadastrar Consumidor Comercial" +"3 - Exibir faturas e média de consumo" +"0 - Sair" +"Escolha uma opção:"))

        if (opcao === 1) {

            let numeroConta = String(prompt("Informe o número da conta:"))

            while (numeroConta === "") {
                console.log("O número da conta não pode ser vazio!")
                numeroConta = String(prompt("Informe um número de conta válido:"))
            }

            let kwh = Number(prompt("Informe a quantidade de kWh consumidos no mês:"))

            while (kwh < 0) {
                console.log("Quantidade de kWh inválida!")
                kwh = Number(prompt("Informe uma quantidade de kWh válida:"))
            }

            let consumidor = new ConsumidorResidencial(numeroConta, kwh)
            consumidores.push(consumidor)
            console.log("Consumidor Residencial cadastrado com sucesso!")

        } else if (opcao === 2) {

            let numeroConta = String(prompt("Informe o número da conta:"))

            while (numeroConta === "") {
                console.log("O número da conta não pode ser vazio!")
                numeroConta = String(prompt("Informe um número de conta válido:"))
            }

            let kwh = Number(prompt("Informe a quantidade de kWh consumidos no mês:"))

            while (kwh < 0) {
                console.log("Quantidade de kWh inválida!")
                kwh = Number(prompt("Informe uma quantidade de kWh válida:"))
            }

            let consumidor = new ConsumidorComercial(numeroConta, kwh)
            consumidores.push(consumidor)
            console.log("Consumidor Comercial cadastrado com sucesso!")

        } else if (opcao === 3) {
            if (consumidores.length === 0) {
                console.log("Nenhum consumidor foi cadastrado!")
            } else {
                let somaKWh = 0

                for (let i = 0; i < consumidores.length; i++) {
                    let c = consumidores[i]
                    let valorFatura = c.calcularValor()
                    somaKWh += c.getQuantidadeKWh()

                    let tipo = c.getDescricaoTipo()

                    console.log(`Conta: ${c.getNumeroConta()} | Tipo: ${tipo}`)
                    console.log(`Consumo: ${c.getQuantidadeKWh()} kWh | Fatura: R$ ${valorFatura}`)
                }

                let mediaKWh = somaKWh / consumidores.length
                console.log(`Média de consumo em kWh de todos os cadastrados: ${mediaKWh}`)
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}