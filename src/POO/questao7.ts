// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

export function executarQuestao7(): void {
  class Funcionario {
    private nome: string
    private cargo: string
    private salario: number

    constructor(nome: string, cargo: string, salario: number) {
      this.nome = nome
      this.cargo = cargo
      this.salario = salario
    }

    public aplicarAumento(percentual: number): void {
      if (percentual > 0) {
        const aumento = this.salario * (percentual / 100)
        this.salario += aumento
        console.log(`Funcionário: ${this.nome}`)
        console.log(`Novo Salário: R$ ${this.salario}`)
      } else {
        console.log("O percentual de aumento deve ser maior que zero.")
      }
    }

    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`)
      console.log(`Cargo: ${this.cargo}`)
      console.log(`Salário Atual: R$ ${this.salario}`)
    }
  }

  let funcionario1 = new Funcionario("Ana Costa", "Desenvolvedora Frontend", 5000.00)
  funcionario1.exibirInformacoes()
  funcionario1.aplicarAumento(15)
}
