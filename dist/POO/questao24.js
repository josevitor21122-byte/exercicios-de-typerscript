// 24. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.
export function executarQuestao24() {
    class Tarefa {
        constructor(descricao) {
            this.descricao = descricao;
            this.concluida = false;
        }
        getDescricao() {
            return this.descricao;
        }
        getConcluida() {
            return this.concluida;
        }
        marcarComoConcluida() {
            this.concluida = true;
        }
    }
    class TarefaAcademica extends Tarefa {
        constructor(descricao, disciplina) {
            super(descricao);
            this.disciplina = disciplina;
        }
        getTipo() {
            return "Acadêmica";
        }
        mostrarTarefa() {
            console.log(`Descrição: ${this.getDescricao()}`);
            console.log(`Disciplina: ${this.disciplina}`);
            if (this.getConcluida()) {
                console.log(`Status: `);
            }
            else {
                console.log(`Status: `);
            }
        }
    }
    class TarefaPessoal extends Tarefa {
        constructor(descricao, prioridade) {
            super(descricao);
            this.prioridade = prioridade;
        }
        getTipo() {
            return "Pessoal";
        }
        mostrarTarefa() {
            console.log(`Descrição: ${this.getDescricao()}`);
            console.log(`Prioridade: ${this.prioridade}`);
            if (this.getConcluida()) {
                console.log(`Status: Concluída`);
            }
            else {
                console.log(`Status: Pendente`);
            }
        }
    }
    let tarefas = [];
    let opcao = 0;
    while (opcao !== 5) {
        console.log(`1 - Adicionar tarefa acadêmica`);
        console.log(`2 - Adicionar tarefa pessoal`);
        console.log(`3 - Marcar tarefa como concluída`);
        console.log(`4 - Listar tarefas acadêmicas pendentes`);
        console.log(`5 - Sair`);
        opcao = Number(prompt(`Digite uma opção:`));
        if (opcao === 1) {
            let descricao = String(prompt(`Digite a descrição da tarefa: `));
            let disciplina = String(prompt(`Digite o nome da disciplina: `));
            let tarefa = new TarefaAcademica(descricao, disciplina);
            tarefas.push(tarefa);
            console.log(`Tarefa acadêmica cadastrada!`);
        }
        else if (opcao === 2) {
            let descricao = String(prompt(`Digite a descrição da tarefa: `));
            let prioridade = String(prompt(`Digite a prioridade: `));
            let tarefa = new TarefaPessoal(descricao, prioridade);
            tarefas.push(tarefa);
            console.log(`Tarefa pessoal cadastrada!`);
        }
        else if (opcao === 3) {
            if (tarefas.length === 0) {
                console.log(`Nenhuma tarefa cadastrada.`);
            }
            else {
                for (let i = 0; i < tarefas.length; i++) {
                    console.log(`Número: ${i}`);
                    console.log(`Tipo: ${tarefas[i].getTipo()}`);
                    console.log(`Descrição: ${tarefas[i].getDescricao()}`);
                    if (tarefas[i].getConcluida()) {
                        console.log(`Status: Concluída`);
                    }
                    else {
                        console.log(`Status: Pendente`);
                    }
                }
                let indice = Number(prompt(`Digite o número da tarefa que deseja concluir:`));
                if (indice >= 0 && indice < tarefas.length) {
                    tarefas[indice].marcarComoConcluida();
                    console.log(`Tarefa marcada como concluída!`);
                }
                else {
                    console.log(`Número de tarefa inválido.`);
                }
            }
        }
        else if (opcao === 4) {
            let encontrou = false;
            for (let i = 0; i < tarefas.length; i++) {
                if (tarefas[i].getTipo() === "Acadêmica" && tarefas[i].getConcluida() === false) {
                    tarefas[i].mostrarTarefa();
                    encontrou = true;
                }
            }
            if (encontrou === false) {
                console.log(`Nenhuma tarefa acadêmica pendente.`);
            }
        }
        else if (opcao === 5) {
            console.log(`Programa encerrado.`);
        }
        else {
            console.log(`Opção inválida.`);
        }
    }
}
