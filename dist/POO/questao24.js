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
        marcarConcluida() {
            this.concluida = true;
        }
    }
    class TarefaAcademica extends Tarefa {
        constructor(descricao, disciplina) {
            super(descricao);
            this.disciplina = disciplina;
        }
        getDisciplina() {
            return this.disciplina;
        }
        obterTipo() {
            return "Acadêmica";
        }
    }
    class TarefaPessoal extends Tarefa {
        constructor(descricao, prioridade) {
            super(descricao);
            this.prioridade = prioridade;
        }
        obterTipo() {
            return "Pessoal";
        }
    }
    let tarefas = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Tipo de tarefa: | 1 - Acadêmica | 2 - Pessoal"));
        let descricao = String(prompt("Descrição: "));
        if (tipo === "1") {
            let disciplina = String(prompt("Disciplina: "));
            tarefas.push(new TarefaAcademica(descricao, disciplina));
        }
        else {
            let prioridade = String(prompt("Prioridade: "));
            tarefas.push(new TarefaPessoal(descricao, prioridade));
        }
        continuar = String(prompt("Cadastrar outra (sim/não): "));
    }
    if (tarefas.length > 0) {
        let concluirIndice = Number(prompt("Informe o número da tarefa (1 a " + tarefas.length + ") para marcar como concluída: "));
        let indiceReal = concluirIndice - 1;
        if (indiceReal >= 0 && indiceReal < tarefas.length) {
            tarefas[indiceReal].marcarConcluida();
            console.log("Tarefa marcada como concluída!");
        }
        let encontrou = false;
        for (let i = 0; i < tarefas.length; i++) {
            let t = tarefas[i];
            if (t.obterTipo() === "Acadêmica" && t.getConcluida()) {
                console.log(` ${t.getDescricao()}`);
                encontrou = true;
            }
        }
        if (encontrou) {
            console.log("Nenhuma tarefa acadêmica pendente.");
        }
    }
}
