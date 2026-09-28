// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.
export function executarQuestao35() {
    class Paciente {
        constructor(nome, cartaoSUS) {
            this.nome = nome;
            this.cartaoSUS = cartaoSUS;
        }
        getNome() {
            return this.nome;
        }
        getCartaoSUS() {
            return this.cartaoSUS;
        }
        exibirFicha() {
            console.log(`Nome: ${this.nome} | Cartão SUS: ${this.cartaoSUS}`);
        }
    }
    class PacienteComum extends Paciente {
        constructor(nome, cartaoSUS) {
            super(nome, cartaoSUS);
        }
        ehPrioritario() {
            return false;
        }
    }
    class PacientePrioritario extends Paciente {
        constructor(nome, cartaoSUS, tipoPrioridade) {
            super(nome, cartaoSUS);
            this.tipoPrioridade = tipoPrioridade;
        }
        exibirFicha() {
            console.log(`Nome: ${this.getNome()} | Cartão SUS: ${this.getCartaoSUS()}`);
            console.log(`Atendimento prioritario: ${this.tipoPrioridade}`);
        }
        ehPrioritario() {
            return true;
        }
    }
    let pacientes = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de paciente: | 1 - Paciente Comum | 2 - Paciente Prioritário"));
        let nome = String(prompt("Informe o nome do paciente: "));
        let cartaoSUS = String(prompt("Informe o número do cartão do SUS: "));
        let paciente;
        if (tipo === "1") {
            paciente = new PacienteComum(nome, cartaoSUS);
        }
        else {
            let tipoPrioridade = String(prompt("Informe o tipo de prioridade: "));
            paciente = new PacientePrioritario(nome, cartaoSUS, tipoPrioridade);
        }
        pacientes.push(paciente);
        continuar = String(prompt("Deseja cadastrar outro paciente (sim/não): "));
    }
    if (pacientes.length === 0) {
        console.log("Nenhum paciente foi cadastrado!");
    }
    else {
        let totalPrioritarios = 0;
        for (let i = 0; i < pacientes.length; i++) {
            let p = pacientes[i];
            p.exibirFicha();
            if (p.ehPrioritario()) {
                totalPrioritarios++;
            }
        }
        console.log(`Quantidade total de pacientes prioritários atendidos: ${totalPrioritarios}`);
    }
}
