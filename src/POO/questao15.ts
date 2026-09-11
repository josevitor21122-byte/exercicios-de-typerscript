// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function executarQuestao15(): void {
abstract class Funcionario {
    private nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    public getNome(): string {
        return this.nome
    }

    public abstract calcularSalario(): number
}

class FuncionarioAssalariado extends Funcionario {
    private salarioMensal: number

    constructor(nome: string, salarioMensal: number) {
        super(nome)
        this.salarioMensal = salarioMensal
    }

    public calcularSalario(): number {
        return this.salarioMensal
    }
}

class FuncionarioHorista extends Funcionario {
    private valorHora: number
    private horasTrabalhadas: number

    constructor(nome: string, valorHora: number, horasTrabalhadas: number) {
        super(nome)
        this.valorHora = valorHora
        this.horasTrabalhadas = horasTrabalhadas
    }

    public calcularSalario(): number {
        return this.valorHora * this.horasTrabalhadas
    }
}

    const nomeAssalariado = String(prompt("Nome: "))
    const salarioFixo = Number(prompt("Salário Fixo Mensal: R$ "))

    const assalariado: Funcionario = new FuncionarioAssalariado(nomeAssalariado, salarioFixo)

    let nomeHorista = String(prompt("Nome: "))
    let valorHora = Number(prompt("valor por hora: "))
    let horasTrabalhadas = Number(prompt("Horas Trabalhadas: "))

    let horista: Funcionario = new FuncionarioHorista(nomeHorista, valorHora, horasTrabalhadas)

    console.log(`Funcionário: ${assalariado.getNome()} | Salário: R$ ${assalariado.calcularSalario()}`)
    console.log(`Funcionário: ${horista.getNome()} | Salário: R$ ${horista.calcularSalario()}`)
}