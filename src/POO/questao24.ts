// 24. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.

export function executarQuestao24(): void {
abstract class Tarefa {

    private descricao: string
    private concluida: boolean

    constructor(descricao: string) {
        this.descricao = descricao
        this.concluida = false
    }

    public getDescricao(): string {
        return this.descricao
    }

    public getConcluida(): boolean {
        return this.concluida
    }

    public marcarComoConcluida(): void {
        this.concluida = true
    }

    public abstract mostrarTarefa(): void
    public abstract getTipo(): string
}


class TarefaAcademica extends Tarefa {

    private disciplina: string

    constructor(descricao: string, disciplina: string) {
        super(descricao)
        this.disciplina = disciplina
    }

    public getTipo(): string {
        return "Acadêmica"
    }

    public mostrarTarefa(): void {

        console.log(`Descrição: ${this.getDescricao()}`)
        console.log(`Disciplina: ${this.disciplina}`)

        if (this.getConcluida()) {
            console.log(`Status: `)
        } else {
            console.log(`Status: `)
        }
    }
}


class TarefaPessoal extends Tarefa {

    private prioridade: string

    constructor(descricao: string, prioridade: string) {
        super(descricao)
        this.prioridade = prioridade
    }

    public getTipo(): string {
        return "Pessoal"
    }

    public mostrarTarefa(): void {

        console.log(`Descrição: ${this.getDescricao()}`)
        console.log(`Prioridade: ${this.prioridade}`)

        if (this.getConcluida()) {
            console.log(`Status: Concluída`)
        } else {
            console.log(`Status: Pendente`)
        }
    }
}

    let tarefas: Tarefa[] = []
    let opcao: number = 0

    while (opcao !== 5) {
        console.log(`1 - Adicionar tarefa acadêmica`)
        console.log(`2 - Adicionar tarefa pessoal`)
        console.log(`3 - Marcar tarefa como concluída`)
        console.log(`4 - Listar tarefas acadêmicas pendentes`)
        console.log(`5 - Sair`)

        opcao = Number(prompt(`Digite uma opção: `))

        if (opcao === 1) {

            let descricao: string = String(prompt(`Digite a descrição da tarefa: `))
            let disciplina: string = String(prompt(`Digite o nome da disciplina: `))

            let tarefa: TarefaAcademica = new TarefaAcademica(descricao, disciplina)

            tarefas.push(tarefa)

            console.log(`Tarefa acadêmica cadastrada!`)

        } else if (opcao === 2) {

            let descricao: string = String(prompt(`Digite a descrição da tarefa: `))
            let prioridade: string = String(prompt(`Digite a prioridade: `))

            let tarefa: TarefaPessoal = new TarefaPessoal(descricao, prioridade)

            tarefas.push(tarefa)
            console.log(`Tarefa pessoal cadastrada!`)

        } else if (opcao === 3) {

            if (tarefas.length === 0) {
                console.log(`Nenhuma tarefa cadastrada.`)

            } else {

                for (let i = 0; i < tarefas.length; i++) {

                    console.log(`Número: ${i}`)
                    console.log(`Tipo: ${tarefas[i].getTipo()}`)
                    console.log(`Descrição: ${tarefas[i].getDescricao()}`)

                    if (tarefas[i].getConcluida()) {
                        console.log(`Status: Concluída`)
                    } else {
                        console.log(`Status: Pendente`)
                    }
                }

                let indice: number = Number(prompt(`Digite o número da tarefa que deseja concluir:`))

                if (indice >= 0 && indice < tarefas.length) {

                    tarefas[indice].marcarComoConcluida()
                    console.log(`Tarefa marcada como concluída!`)

                } else {
                    console.log(`Número de tarefa inválido.`)
                }
            }


        } else if (opcao === 4) {
            let encontrou: boolean = false

            for (let i = 0; i < tarefas.length; i++) {

                if (tarefas[i].getTipo() === "Acadêmica" && tarefas[i].getConcluida() === false) {
                    tarefas[i].mostrarTarefa()

                    encontrou = true
                }
            }

            if (encontrou === false) {
                console.log(`Nenhuma tarefa acadêmica pendente.`)
            }

        } else if (opcao === 5) {
            console.log(`Programa encerrado.`)

        } else {
            console.log(`Opção inválida.`)
        }
    }
}