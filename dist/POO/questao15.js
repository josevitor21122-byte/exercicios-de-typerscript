// 15. Herança Polimorfismo Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.
export function executarQuestao15() {
    class Funcionario {
        constructor(nome) {
            this.nome = nome;
        }
        mostrarNome() {
            return this.nome;
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
    }
    class FuncionarioAssalariado extends Funcionario {
        constructor(nome, salarioMensal) {
            super(nome);
            this.salarioMensal = salarioMensal;
        }
        calcularSalario() {
            return this.salarioMensal;
        }
    }
    let nomeHorista = String(prompt("Digite o nome do funcionário horista"));
    let horas = Number(prompt("Digite a quantidade de horas trabalhadas"));
    let valorHora = Number(prompt("Digite o valor da hora trabalhada"));
    let nomeAssalariado = String(prompt("Digite o nome do funcionário assalariado"));
    let salarioMensal = Number(prompt("Digite o salário mensal"));
    let horista = new FuncionarioHorista(nomeHorista, horas, valorHora);
    let assalariado = new FuncionarioAssalariado(nomeAssalariado, salarioMensal);
    let funcionarios = [horista, assalariado];
    for (let funcionario of funcionarios) {
        console.log(`Funcionário: ${funcionario.mostrarNome()}`);
        console.log(`Salário: R$ ${funcionario.calcularSalario()}`);
    }
}
