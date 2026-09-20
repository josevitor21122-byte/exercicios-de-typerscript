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

    public marcarConcluida(): void {
        this.concluida = true
    }

    public abstract mostrarTarefa(): void
}

class TarefaAcademica extends Tarefa {
    private disciplina: string

    constructor(descricao: string, disciplina: string) {
        super(descricao)
        this.disciplina = disciplina
    }

    public getDisciplina(): string {
        return this.disciplina
    }

    public mostrarTarefa(): void {
        console.log(
            `Descrição: ${this.getDescricao()} ` +
            `Disciplina: ${this.disciplina} ` +
            `Concluída: ${this.getConcluida()}`)
    }
}

class TarefaPessoal extends Tarefa {
    private prioridade: number

    constructor(descricao: string, prioridade: number) {
        super(descricao)
        this.prioridade = prioridade
    }

    public getPrioridade(): number {
        return this.prioridade
    }

    public mostrarTarefa(): void {
        console.log(
            `Descrição: ${this.getDescricao()} ` +
            `Prioridade: ${this.prioridade} ` +
            `Concluída: ${this.getConcluida()}`)
    }
}

    const tarefas: Tarefa[] = []

    let opcao: number

    do {

        opcao = Number(
            prompt(
                "1 - Adicionar tarefa acadêmica" +
                "2 - Adicionar tarefa pessoal" +
                "3 - Marcar tarefa como concluída" +
                "4 - Listar tarefas acadêmicas pendentes" +
                "5 - Listar todas as tarefas" +
                "0 - Sair" +
                "Digite uma opção:")
        )


        switch (opcao) {

            case 1: {

                let descricao = String(prompt("Digite a descrição da tarefa: "))

                let disciplina = String(prompt("Digite o nome da disciplina: "))

                const tarefa = new TarefaAcademica(descricao, disciplina)

                tarefas.push(tarefa)

                console.log("Tarefa acadêmica cadastrada.")

                break
            }


            case 2: {

                const descricao = prompt(
                    "Digite a descrição da tarefa:"
                ) ?? "";

                const prioridade = Number(
                    prompt("Digite o nível de prioridade:")
                );

                const tarefa = new TarefaPessoal(
                    descricao,
                    prioridade
                );

                tarefas.push(tarefa);

                console.log("Tarefa pessoal cadastrada.");

                break;
            }


            case 3: {

                if (tarefas.length === 0) {
                    console.log("Nenhuma tarefa cadastrada.");
                    break;
                }

                console.log("\nTAREFAS CADASTRADAS:");

                for (let i = 0; i < tarefas.length; i++) {

                    console.log(
                        `${i} - ${tarefas[i].getDescricao()} | ` +
                        `Concluída: ${tarefas[i].getConcluida()}`
                    );
                }

                const indice = Number(
                    prompt(
                        "Digite o número da tarefa que deseja concluir:"
                    ))

                if (indice >= 0 && indice < tarefas.length) {

                    tarefas[indice].marcarConcluida()

                    console.log("Tarefa marcada como concluída.")

                } else {

                    console.log("Tarefa não encontrada.")
                }

                break
            }


            case 4: {
                let encontrou = false

                for (let tarefa of tarefas) {

                    if (
                        tarefa instanceof TarefaAcademica &&
                        tarefa.getConcluida() === false
                    ) {

                        tarefa.mostrarTarefa()

                        encontrou = true
                    }
                }

                if (encontrou) {

                    console.log("Nenhuma tarefa acadêmica pendente.")
                }

                break;
            }


            case 5: {

                if (tarefas.length === 0) {

                    console.log("Nenhuma tarefa cadastrada.")

                    break
                }

                for (let tarefa of tarefas) {

                    tarefa.mostrarTarefa()
                }

                break
            }


            case 0:

                console.log("Programa encerrado.")

                break


            default:

                console.log("Opção inválida.")
        }

    } while (opcao !== 0)
}