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

        protected nomePassageiro: string
        protected cpf: string
        protected valorBase: number

        constructor(nomePassageiro: string, cpf: string, valorBase: number) {
            this.nomePassageiro = nomePassageiro
            this.cpf = cpf
            this.valorBase = valorBase
        }

        abstract calcularValorFinal(): number

        exibirDetalhes(): void {
            console.log(`Passageiro: ${this.nomePassageiro}`)
            console.log(`CPF: ${this.cpf}`)
            console.log(`Valor Final: ${this.calcularValorFinal()}`)
        }
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
    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(
            prompt(
                "SISTEMA DE BILHETAGEM - TRANSPORTE\n\n" +
                "1 - Cadastrar Passagem Comum\n" +
                "2 - Cadastrar Passagem Estudantil\n" +
                "3 - Exibir relatório e faturamento total\n" +
                "0 - Sair\n\n" +
                "Escolha uma opção:"
            )
        )

        if (opcao === 1) {

            let nomePassageiro = String(
                prompt("Informe o nome do passageiro:")
            )

            while (nomePassageiro === "") {
                console.log("O nome não pode ser vazio!")
                nomePassageiro = String(
                    prompt("Informe um nome válido:")
                )
            }


            let cpf = String(
                prompt("Informe o CPF do passageiro:")
            )

            while (cpf === "") {
                console.log("O CPF não pode ser vazio!")
                cpf = String(
                    prompt("Informe um CPF válido:")
                )
            }


            let valorBase = Number(
                prompt("Informe o valor base da corrida:")
            )

            while (valorBase <= 0) {
                console.log("Valor base inválido!")
                valorBase = Number(
                    prompt("Informe um valor base válido:")
                )
            }


            let passagem = new PassagemComum(nomePassageiro, cpf, valorBase)

            passagens.push(passagem)

            console.log("Passagem Comum cadastrada com sucesso!")
        }


        else if (opcao === 2) {

            let nomePassageiro = String(
                prompt("Informe o nome do passageiro:")
            )

            while (nomePassageiro === "") {
                console.log("O nome não pode ser vazio!")
                nomePassageiro = String(
                    prompt("Informe um nome válido:")
                )
            }


            let cpf = String(
                prompt("Informe o CPF do passageiro:")
            )

            while (cpf === "") {
                console.log("O CPF não pode ser vazio!")
                cpf = String(
                    prompt("Informe um CPF válido:")
                )
            }


            let valorBase = Number(
                prompt("Informe o valor base da corrida:")
            )

            while (valorBase <= 0) {
                console.log("Valor base inválido!")
                valorBase = Number(
                    prompt("Informe um valor base válido:")
                )
            }


            let passagem = new PassagemEstudantil(nomePassageiro, cpf, valorBase)

            passagens.push(passagem)

            console.log("Passagem Estudantil cadastrada com sucesso!")
        }


        else if (opcao === 3) {

            if (passagens.length === 0) {

                console.log("Nenhuma passagem foi cadastrada!")

            } else {

                console.log("===== RELATÓRIO DE PASSAGENS VENDIDAS =====")

                let faturamentoTotal = 0

                for (let i = 0; i < passagens.length; i++) {
                    let passagem = passagens[i]

                    passagem.exibirDetalhes()
                    console.log("-----------------------------")

                    faturamentoTotal = faturamentoTotal + passagem.calcularValorFinal()
                }

                console.log(`Faturamento Total do Dia: R$ ${faturamentoTotal.toFixed(2)}`)
            }
        }


        else if (opcao === 0) {

            console.log("Programa encerrado!")

        }


        else {

            console.log("Opção inválida!")
        }
    }
}