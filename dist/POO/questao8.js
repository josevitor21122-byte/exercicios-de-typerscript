// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.
export function executarQuestao8() {
    class Funcionario {
        constructor(nome, cargo, salario) {
            this.nome = nome;
            this.cargo = cargo;
            this.salario = salario;
        }
        exibirResumo() {
            console.log(`• Nome: ${this.nome} | Cargo: ${this.cargo} | Salário: R$ ${this.salario.toFixed(2)}`);
        }
    }
    let listaFuncionarios = [];
    listaFuncionarios.push(new Funcionario("Carlos Souza", "Analista de Dados", 4500.00));
    listaFuncionarios.push(new Funcionario("Mariana Lima", "Gerente de Projetos", 8200.50));
    listaFuncionarios.push(new Funcionario("Roberto Dias", "Designer UX/UI", 3800.00));
    for (let funcionario of listaFuncionarios) {
        funcionario.exibirResumo();
    }
    console.log(`Total de funcionários cadastrados: ${listaFuncionarios.length}`);
}
