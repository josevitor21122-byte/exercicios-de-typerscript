// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.
// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja &quot;DE&quot;, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.
export function executarQuestao18() {
    class Colaborador {
        constructor(nome, matricula, salarioBase, tipo) {
            this._nome = nome;
            this._matricula = matricula;
            this._salarioBase = salarioBase;
            this.tipo = tipo;
        }
        getNome() {
            return this._nome;
        }
        getMatricula() {
            return this._matricula;
        }
        getSalarioBase() {
            return this._salarioBase;
        }
        getTipo() {
            return this.tipo;
        }
        setNome(nome) {
            this._nome = nome;
        }
        setMatricula(matricula) {
            this._matricula = matricula;
        }
        setSalarioBase(salarioBase) {
            this._salarioBase = salarioBase;
        }
        calcularSalario() {
            return this._salarioBase;
        }
    }
    class Professor extends Colaborador {
        constructor(nome, matricula, salarioBase, regimeTrabalho) {
            super(nome, matricula, salarioBase, "P");
            this.regimeTrabalho = regimeTrabalho;
        }
        calcularSalario() {
            if (this.regimeTrabalho.toUpperCase() === "DE") {
                return this.getSalarioBase() * 1.20;
            }
            return this.getSalarioBase();
        }
    }
    class TecnicoAdministrativo extends Colaborador {
        constructor(nome, matricula, salarioBase) {
            super(nome, matricula, salarioBase, "T");
            this.auxilioAlimentacao = 1000.00;
        }
        calcularSalario() {
            return this.getSalarioBase() + this.auxilioAlimentacao;
        }
    }
    class Diretor extends Colaborador {
        constructor(nome, matricula, salarioBase, departamento, gratificacaoFuncao) {
            super(nome, matricula, salarioBase, "D");
            this.departamento = departamento;
            this.gratificacaoFuncao = gratificacaoFuncao;
        }
        calcularSalario() {
            return this.getSalarioBase() + this.gratificacaoFuncao;
        }
    }
    let continuarCadastro = true;
    let custoTotalProfessores = 0;
    let custoTotalTecnicos = 0;
    let custoTotalDiretores = 0;
    while (continuarCadastro) {
        let opcao = (prompt("Folha de Pagamento IFS Digite: P - Cadastrar Professor T - Cadastrar Técnico D - Cadastrar Diretor F - Encerrar Programa Opção: "));
        if (opcao === "F") {
            continuarCadastro = false;
        }
        else if (opcao === "P" || opcao === "T" || opcao === "D") {
            let nome = String(prompt("Nome do colaborador: "));
            let matricula = String(prompt("Matrícula: "));
            let salarioBase = Number(prompt("Salário Base: "));
            if (opcao === "P") {
                let regime = String(prompt("Regime de Trabalho (Digite DE para Dedicação Exclusiva): "));
                let prof = new Professor(nome, matricula, salarioBase, regime);
                custoTotalProfessores += prof.calcularSalario();
                console.log(`Salário Calculado: R$ ${prof.calcularSalario()}`);
            }
            else if (opcao === "T") {
                let tec = new TecnicoAdministrativo(nome, matricula, salarioBase);
                custoTotalTecnicos += tec.calcularSalario();
                console.log(`Técnico cadastrado! Salário Calculado: R$ ${tec.calcularSalario()}`);
            }
            else if (opcao === "D") {
                let depto = String(prompt("Departamento do Diretor: "));
                let gratificacao = Number(prompt("Valor da Gratificação de Função: "));
                let dir = new Diretor(nome, matricula, salarioBase, depto, gratificacao);
                custoTotalDiretores += dir.calcularSalario();
                console.log(`Salário Calculado: R$ ${dir.calcularSalario()}`);
            }
        }
        else {
            console.log("Opção inválida! Tente novamente.");
        }
    }
    let custoTotalGeral = custoTotalProfessores + custoTotalTecnicos + custoTotalDiretores;
    console.log(`Custo Total com Professores: ${custoTotalProfessores}`);
    console.log(`Custo Total com Técnicos: ${custoTotalTecnicos}`);
    console.log(`Custo Total com Diretores: ${custoTotalDiretores}`);
    console.log(`Custo total geral do mês: ${custoTotalGeral}`);
}
