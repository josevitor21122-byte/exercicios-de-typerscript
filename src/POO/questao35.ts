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

export function executarQuestao35(): void {

    abstract class Paciente {
        private nome: string
        private cartaoSUS: string

        constructor(nome: string, cartaoSUS: string) {
            this.nome = nome
            this.cartaoSUS = cartaoSUS
        }

        getNome(): string {
            return this.nome
        }

        getCartaoSUS(): string {
            return this.cartaoSUS
        }

        exibirFicha(): void {
            console.log(`Nome: ${this.nome}`)
            console.log(`Cartão SUS: ${this.cartaoSUS}`)
        }
        abstract ehPrioritario(): boolean
    }

    class PacienteComum extends Paciente {

        constructor(nome: string, cartaoSUS: string) {
            super(nome, cartaoSUS)
        }
        ehPrioritario(): boolean {
            return false
        }
    }


    class PacientePrioritario extends Paciente {
        private tipoPrioridade: string

        constructor(nome: string, cartaoSUS: string, tipoPrioridade: string) {
            super(nome, cartaoSUS)
            this.tipoPrioridade = tipoPrioridade
        }
        getTipoPrioridade(): string {
            return this.tipoPrioridade
        }
        exibirFicha(): void {
            console.log(`Nome: ${this.getNome()}`)
            console.log(`Cartão SUS: ${this.getCartaoSUS()}`)
            console.log(`>>> ATENDIMENTO PRIORITÁRIO: ${this.tipoPrioridade} <<<`)
        }

        ehPrioritario(): boolean {
            return true
        }
    }

    let pacientes: Paciente[] = []

    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(
            prompt("1 - Cadastrar Paciente Comum" + "2 - Cadastrar Paciente Prioritário" + "3 - Exibir fichas e total de prioritários" + "0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {

            let nome = String(prompt("Informe o nome do paciente comum:"))

            while (nome === "") {
                console.log("O nome não pode ser vazio!")
                nome = String(prompt("Informe um nome válido:"))
            }

            let cartaoSUS = String(prompt("Informe o número do cartão do SUS:"))

            while (cartaoSUS === "") {
                console.log("O cartão do SUS não pode ser vazio!")
                cartaoSUS = String(prompt("Informe um cartão do SUS válido:"))
            }

            let paciente = new PacienteComum(nome, cartaoSUS)

            pacientes.push(paciente)

            console.log("Paciente Comum cadastrado com sucesso!")
        } else if (opcao === 2) {

            let nome = String(prompt("Informe o nome do paciente prioritário:"))

            while (nome === "") {
                console.log("O nome não pode ser vazio!")
                nome = String(prompt("Informe um nome válido:"))
            }

            let cartaoSUS = String(prompt("Informe o número do cartão do SUS:"))

            while (cartaoSUS === "") {
                console.log("O cartão do SUS não pode ser vazio!")
                cartaoSUS = String(prompt("Informe um cartão do SUS válido:"))
            }

            let tipoPrioridade = String(prompt("Informe o tipo de prioridade (ex: Idoso, Gestante):"))

            while (tipoPrioridade === "") {
                console.log("O tipo de prioridade não pode ser vazio!")
                tipoPrioridade = String(prompt("Informe um tipo de prioridade válido:"))
            }

            let paciente = new PacientePrioritario(nome, cartaoSUS, tipoPrioridade)

            pacientes.push(paciente)

            console.log("Paciente Prioritário cadastrado com sucesso!")
        } else if (opcao === 3) {

            if (pacientes.length === 0) {

                console.log("Nenhum paciente foi cadastrado!")

            } else {

                let totalPrioritarios = 0

                for (let i = 0; i < pacientes.length; i++) {
                    let paciente = pacientes[i]

                    paciente.exibirFicha()

                    if (paciente.ehPrioritario()) {
                        totalPrioritarios = totalPrioritarios + 1
                    }
                }

                console.log(`Quantidade total de pacientes prioritários atendidos: ${totalPrioritarios}`)
            }
        } else if (opcao === 0) {
            console.log("Programa encerrado!")
        } else {
            console.log("Opção inválida!")
        }
    }
}