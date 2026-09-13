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

export function executarQuestao18(): void {
    abstract class Funcionario {

        private nome: string
        private matricula: number
        private salarioBase: number

        constructor( nome: string, matricula: number, salarioBase: number) {
            this.nome = nome
            this.matricula = matricula
            this.salarioBase = salarioBase
        }
        getNome(): string {
            return this.nome
        }

        setNome(nome: string): void {
            this.nome = nome
        }

        getMatricula(): number {
            return this.matricula
        }

        setMatricula(matricula: number): void {
            this.matricula = matricula
        }

        getSalarioBase(): number {
            return this.salarioBase
        }

        setSalarioBase(salarioBase: number): void {
            this.salarioBase = salarioBase
        }

        abstract calcularSalario(): number
    }

    class Professor extends Funcionario {

        private regimeTrabalho: string

        constructor( nome: string, matricula: number, salarioBase: number, regimeTrabalho: string) {
            super(nome, matricula, salarioBase)
            this.regimeTrabalho = regimeTrabalho
        }

        getRegimeTrabalho(): string {
            return this.regimeTrabalho
        }

        setRegimeTrabalho(regimeTrabalho: string): void {
            this.regimeTrabalho = regimeTrabalho
        }

        calcularSalario(): number {
            let fatorBonificacaoDE = 1.20

            if (this.regimeTrabalho === "DE") {
                return this.getSalarioBase() * fatorBonificacaoDE
            }

            return this.getSalarioBase()
        }
    }

    class TecnicoAdministrativo extends Funcionario {

        private auxilioAlimentacao: number

        constructor( nome: string, matricula: number, salarioBase: number) {
            super(nome, matricula, salarioBase)
            this.auxilioAlimentacao = 1000
        }
        getAuxilioAlimentacao(): number {
            return this.auxilioAlimentacao
        }

        setAuxilioAlimentacao(auxilioAlimentacao: number): void {
            this.auxilioAlimentacao = auxilioAlimentacao
        }

        calcularSalario(): number {
            return this.getSalarioBase() + this.auxilioAlimentacao
        }
    }

    class Diretor extends Funcionario {

        private departamento: string
        private gratificacao: number

        constructor( nome: string, matricula: number, salarioBase: number, departamento: string, gratificacao: number) {
            super(nome, matricula, salarioBase)
            this.departamento = departamento
            this.gratificacao = gratificacao
        }

        getDepartamento(): string {
            return this.departamento
        }

        setDepartamento(departamento: string): void {
            this.departamento = departamento
        }

        getGratificacao(): number {
            return this.gratificacao
        }

        setGratificacao(gratificacao: number): void {
            this.gratificacao = gratificacao
        }

        calcularSalario(): number {
            return this.getSalarioBase() + this.gratificacao
        }
    }

    let totalProfessores = 0
    let totalTecnicos = 0
    let totalDiretores = 0

    while (true) {
        console.log("1 - Professor")
        console.log("2 - Técnico Administrativo")
        console.log("3 - Diretor")
        console.log("0 - Encerrar")

        let opcao = String(prompt("Digite uma opção: "))

        if (opcao === "0") {
            break
        }

        if (opcao === "1") {
            let nome = String(prompt("Nome: "))
            let matricula = Number(prompt("Matrícula: "))
            let salarioBase = Number(prompt("Salário base: "))
            let regime = String(prompt("Regime de trabalho (DE ou outro): "))

            let professor = new Professor(nome, matricula, salarioBase, regime)
            let salario = professor.calcularSalario()

            totalProfessores += salario

            console.log("Professor cadastrado!")
            console.log(`Nome: ${professor.getNome()}`)
            console.log(`Matrícula: ${professor.getMatricula()}`)
            console.log(`Salário: R$ ${salario}`)
        } else if (opcao === "2") {
            let nome = String(prompt("Nome: "))
            let matricula = Number(prompt("Matrícula: "))
            let salarioBase = Number(prompt("Salário base: "))

            let tecnico = new TecnicoAdministrativo(nome, matricula, salarioBase)
            let salario = tecnico.calcularSalario()

            totalTecnicos += salario

            console.log("Técnico administrativo cadastrado!")
            console.log(`Nome: ${tecnico.getNome()}`)
            console.log(`Matrícula: ${tecnico.getMatricula()}`)
            console.log(`Salário: R$ ${salario}`)

        } else if (opcao === "3") {

            let nome = String(prompt("Nome: "))
            let matricula = Number(prompt("Matrícula: "))
            let salarioBase = Number(prompt("Salário base: "))
            let departamento = String(prompt("Departamento: "))
            let gratificacao = Number(prompt("Valor da gratificação: "))

            let diretor = new Diretor(nome, matricula, salarioBase, departamento, gratificacao)
            let salario = diretor.calcularSalario()

            totalDiretores += salario

            console.log("Diretor cadastrado!")
            console.log(`Nome: ${diretor.getNome()}`)
            console.log(`Matrícula: ${diretor.getMatricula()}`)
            console.log(`Salário: R$ ${salario}`)
        } else {
            console.log("Opção inválida!")
        }
    }

    let totalGeral = totalProfessores + totalTecnicos + totalDiretores

    console.log(`Custo total com professores: ${totalProfessores}`)
    console.log(`Custo total com técnicos administrativos: ${totalTecnicos}`)
    console.log(`Custo total com diretores: ${totalDiretores}`)
    console.log(`Custo total geral: ${totalGeral}`)

}