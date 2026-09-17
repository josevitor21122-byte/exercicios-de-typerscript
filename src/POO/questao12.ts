// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function executarQuestao12(): void {
  class Carro {
    private modelo: string
    private diaria: number
    private dias: number

    constructor(modelo: string, diaria: number, dias: number) {
        this.modelo = modelo
        this.diaria = diaria
        this.dias = dias
    }

    calcularTotal(): number {
        return this.diaria * this.dias
    }

    exibirResumo(): void {
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Valor da diária: R$ ${this.diaria}`)
        console.log(`Quantidade de dias: ${this.dias}`)
        console.log(`Valor total: R$ ${this.calcularTotal()}`)
    }
}

let continuar = "sim"

while (continuar == "sim") {

    let modelo = String(prompt("Digite o modelo do carro: "))
    let diaria = Number(prompt("Digite o valor da diária: "))
    let dias = Number(prompt("Digite a quantidade de dias: "))

    let carro = new Carro(modelo, diaria, dias)

    carro.exibirResumo()

    continuar = String(prompt("Deseja fazer uma nova locação? (sim/não)"))
}
}
