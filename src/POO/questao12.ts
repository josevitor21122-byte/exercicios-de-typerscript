// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function executarQuestao12(): void {
  class Locacao {
    private modeloCarro: string
    private valorDiaria: number
    private quantidadeDias: number

    constructor(modeloCarro: string, valorDiaria: number, quantidadeDias: number) {
      this.modeloCarro = modeloCarro
      this.valorDiaria = valorDiaria
      this.quantidadeDias = quantidadeDias
    }

    public calcularEExibirTotal(): void {
      let total = this.valorDiaria * this.quantidadeDias
      console.log(`Carro: ${this.modeloCarro}`)
      console.log(`Diária: R$ ${this.valorDiaria.toFixed(2)} | Dias: ${this.quantidadeDias}`)
      console.log(`Total do Aluguel: R$ ${total}`)
    }
  }

  let listaLocacoes: Locacao[] = []

  listaLocacoes.push(new Locacao("Hyundai HB20", 120.00, 5))
  console.log("Deseja fazer uma nova locação? (s/n): s")

  listaLocacoes.push(new Locacao("Toyota Corolla", 250.00, 3))
  console.log("Deseja fazer uma nova locação? (s/n): n")

  for (let locacao of listaLocacoes) {
    locacao.calcularEExibirTotal()
  }
}
