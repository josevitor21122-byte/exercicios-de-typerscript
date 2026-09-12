// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.
export function executarQuestao15() {
    class Funcionario {
        constructor(nome) {
            this.nome = nome;
        }
    }
    class FuncionarioHorista extends Funcionario {
        constructor(nome, horasTrabalhadas, valorHora) {
            super(nome);
            this.horasTrabalhadas = horasTrabalhadas;
            this.valorHora = valorHora;
        }
        calcularSalario() {
            return this.horasTrabalhadas * this.valorHora;
        }
        exibirDados() {
            console.log(`Funcionari: ${this.nome}`);
            console.log(`Salário: R$ ${this.calcularSalario()}`);
        }
    }
    class FuncionarioAssalariado extends Funcionario {
        constructor(nome, salarioMensal) {
            super(nome);
            this.salarioMensal = salarioMensal;
        }
        calcularSalario() {
            return this.salarioMensal;
        }
        exibirDados() {
            console.log(`Funcionário: ${this.nome}`);
            console.log(`Salário: ${this.calcularSalario()}`);
        }
    }
    let tipo = prompt("Digite o tipo de funcionário (H - horista / A assalariado): ");
    if (tipo === "H") {
        let nome = String(prompt("Nome: "));
        let horas = Number(prompt("Horas trabalhadas: "));
        let valorHora = Number(prompt("Valor da hora: "));
        let funcionario = new FuncionarioHorista(nome, horas, valorHora);
        funcionario.exibirDados();
    }
    else if (tipo === "A") {
        let nome = String(prompt("Nome: "));
        let salario = Number(prompt("Salário mensal: "));
        let funcionario = new FuncionarioAssalariado(nome, salario);
        funcionario.exibirDados();
    }
    else {
        console.log("Tipo de funcionário inválido!");
    }
}
