// 5. Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

function gerenciar_tarefas(): void {

    let tarefas: string[] = []
    let Opcao = ""

    while (Opcao !== "4") {

        Opcao = prompt(
            "1 - Adicionar tarefa\n" +
            "2 - Concluir tarefa\n" +
            "3 - Exibir tarefas\n" +
            "4 - Sair"
        )

        if (Opcao === "1") {

            let tarefa = prompt("Digite a tarefa:")!

            if (tarefa.trim() !== "") {
                tarefas.push(tarefa)
                console.log("Tarefa adicionada!")
            } else {
                console.log("Tarefa inválida!")
            }

        }

        else if (Opcao === "2") {

            let tarefaRemover = prompt("Digite o nome da tarefa concluída:")!

            let tamanhoAntes = tarefas.length

            tarefas = tarefas.filter(t => t !== tarefaRemover)

            if (tarefas.length < tamanhoAntes) {
                console.log("Tarefa concluída e removida!")
            } else {
                console.log("Tarefa não encontrada!")
            }

        }

        // exibir tarefas
        else if (Opcao === "3") {

            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa pendente ")
            } else {
                console.log("Tarefas pendentes:")
                for (let i = 0; i < tarefas.length; i++) {
                    console.log((i + 1) + " - " + tarefas[i])
                }
            }

        }

    }

    console.log("Programa encerrado.")
}

gerenciar_tarefas()