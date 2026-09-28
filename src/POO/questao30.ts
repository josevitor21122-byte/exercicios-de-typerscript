// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

export function executarQuestao30(): void {

    abstract class Passagem {
        private nomePassageiro: string
        private cpf: string
        protected valorBase: number

        constructor(nomePassageiro: string, cpf: string, valorBase: number) {
            this.nomePassageiro = nomePassageiro
            this.cpf = cpf
            this.valorBase = valorBase
        }

        getNomePassageiro(): string {
            return this.nomePassageiro
        }

        getCpf(): string {
            return this.cpf
        }

        getValorBase(): number {
            return this.valorBase
        }

        abstract calcularValorFinal(): number
    }

    class PassagemComum extends Passagem {

        constructor(nomePassageiro: string, cpf: string, valorBase: number) {
            super(nomePassageiro, cpf, valorBase)
        }

        calcularValorFinal(): number {
            return this.valorBase
        }
    }

    class PassagemEstudantil extends Passagem {

        constructor(nomePassageiro: string, cpf: string, valorBase: number) {
            super(nomePassageiro, cpf, valorBase)
        }

        calcularValorFinal(): number {
            return this.valorBase * 0.50
        }
    }

    let passagens: Passagem[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de passagem: | 1 - Passagem Comum | 2 - Passagem Estudantil)"))
        let nomePassageiro = String(prompt("Informe o nome do passageiro: "))
        let cpf = String(prompt("Informe o CPF do passageiro: "))
        let valorBase = Number(prompt("Informe o valor base da corrida: "))

        let passagem: Passagem

        if (tipo === "1") {
            passagem = new PassagemComum(nomePassageiro, cpf, valorBase)
        } else {
            passagem = new PassagemEstudantil(nomePassageiro, cpf, valorBase)
        }

        passagens.push(passagem)

        continuar = String(prompt("Deseja cadastrar outra passagem (sim/não): "))
    }

    if (passagens.length === 0) {
        console.log("Nenhuma passagem foi cadastrada")
    } else {

        let faturamentoTotal = 0

        for (let i = 0; i < passagens.length; i++) {
            let p = passagens[i]
            let valorFinal = p.calcularValorFinal()
            faturamentoTotal += valorFinal

            console.log(`Passageiro: ${p.getNomePassageiro()} | CPF: ${p.getCpf()} | Valor Final: R$ ${valorFinal}`)
        }
        console.log(`Faturamento Total do Dia: R$ ${faturamentoTotal}`)
    }
}