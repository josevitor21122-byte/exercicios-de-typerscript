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
        private kwhConsumidos: number

        constructor(numeroConta: string, kwhConsumidos: number) {
            this.numeroConta = numeroConta
            this.kwhConsumidos = kwhConsumidos
        }

        getNumeroConta(): string {
            return this.numeroConta
        }

        getKwhConsumidos(): number {
            return this.kwhConsumidos
        }

        abstract calcularFatura(): number
    }

    class ConsumidorResidencial extends Consumidor {

        constructor(numeroConta: string, kwhConsumidos: number) {
            super(numeroConta, kwhConsumidos)
        }

        calcularFatura(): number {
            return this.getKwhConsumidos() * 0.75
        }
    }

    class ConsumidorComercial extends Consumidor {

        constructor(numeroConta: string, kwhConsumidos: number) {
            super(numeroConta, kwhConsumidos)
        }

        calcularFatura(): number {
            let kwh = this.getKwhConsumidos()
            if (kwh <= 1000) {
                return kwh * 0.60
            } else {
                let excedente = kwh - 1000
                return (1000 * 0.60) + (excedente * 0.50)
            }
        }
    }

    let consumidores: Consumidor[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de consumidor: | 1 - Residencial | 2 - Comercial"))
        let numeroConta = String(prompt("Informe o número da conta: "))
        let kwhConsumidos = Number(prompt("Informe a quantidade de kWh consumidos no mês: "))

        let consumidor: Consumidor

        if (tipo === "1") {
            consumidor = new ConsumidorResidencial(numeroConta, kwhConsumidos)
        } else {
            consumidor = new ConsumidorComercial(numeroConta, kwhConsumidos)
        }

        consumidores.push(consumidor)

        continuar = String(prompt("Deseja cadastrar outro consumidor? (sim/não): "))
    }

    if (consumidores.length === 0) {
        console.log("Nenhum consumidor foi cadastrado")
    } else {

        let somaKwh = 0

        for (let i = 0; i < consumidores.length; i++) {
            let c = consumidores[i]
            let valorFatura = c.calcularFatura()
            somaKwh += c.getKwhConsumidos()

            console.log(`Conta: ${c.getNumeroConta()} | kWh: ${c.getKwhConsumidos()} | Valor da Fatura: ${valorFatura}`)
        }

        let mediaKwh = somaKwh / consumidores.length
        console.log(`Média de consumo em kWh de todos os cadastrados: ${mediaKwh}`)
    }
}