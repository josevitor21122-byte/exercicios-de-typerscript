// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function executarQuestao15(): void {
    class Funcionario {
        private nome: string

        constructor(nome: string) {
            this.nome = nome
        }

        getNome(): string {
            return this.nome
        }

        setNome(nome: string): void {
            this.nome = nome
        }
    }

    class FuncionarioHorista extends Funcionario {
        private horasTrabalhadas: number
        private valorHora: number

        constructor(nome: string, horasTrabalhadas: number, valorHora: number) {
            super(nome)
            this.horasTrabalhadas = horasTrabalhadas
            this.valorHora = valorHora
        }

        getHorasTrabalhadas(): number {
            return this.horasTrabalhadas
        }

        setHorasTrabalhadas(horasTrabalhadas: number): void {
            this.horasTrabalhadas = horasTrabalhadas
        }

        getValorHoras(): number {
            return this.valorHora
        }

        setValorHora(valorHora: number): void {
            this.valorHora = valorHora
        }

        calcularSalario(): number {
            return this.horasTrabalhadas * this.valorHora
        }

        exibirDados(): void {
            console.log(`Funcionário: ${this.getNome()}`)
            console.log(`Horas trabalhadas: ${this.getHorasTrabalhadas}`)
            console.log(`Valor da hora: ${this.getValorHoras}`)
            console.log(`Salário: ${this.calcularSalario}`)
        }
    }

    class FuncionarioAssalariado extends Funcionario {
        private salarioMensal: number

        constructor(nome: string, salarioMensal: number) {
            super(nome)
            this.salarioMensal = salarioMensal
        }

        getSalarioMensal(): number {
            return this.salarioMensal
        }

        setSalarioMensal(salarioMensal: number): void {
            this.salarioMensal = salarioMensal
        }

        calcularSalario(): number {
            return this.salarioMensal
        }

        exibirDados(): void {
            console.log(`Funcionário: ${this.getNome()}`)
            console.log(`Salário mensal: ${this.getSalarioMensal()}`)
            console.log(`Salário: ${this.calcularSalario()}`)
        }
    }
let tipo = String(prompt("Digite o tipo de funcionário (H - Horista / A - Assalariado): "))

  if (tipo === "H") {
    let nome = String(prompt("Nome do Horista: "))
    let horas = Number(prompt("Horas trabalhadas: "))
    let valorHora = Number(prompt("Valor da hora: "))

    let fHorista = new FuncionarioHorista(nome, horas, valorHora)
    fHorista.exibirDados()

  } else if (tipo === "A") {
    let nome = String(prompt("Nome do Assalariado: "))
    let salario = Number(prompt("Salário mensal: "))

    let fAssalariado = new FuncionarioAssalariado(nome, salario)
    fAssalariado.exibirDados()
  } else {
    console.log("Tipo de funcionário inválido!")
  }
}