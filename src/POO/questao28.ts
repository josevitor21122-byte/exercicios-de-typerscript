// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function executarQuestao28(): void {

    abstract class Acomodacao {

        protected numeroQuarto: number
        protected precoBaseDiaria: number

        constructor(numeroQuarto: number, precoBaseDiaria: number) {
            this.numeroQuarto = numeroQuarto
            this.precoBaseDiaria = precoBaseDiaria
        }

        abstract calcularFaturamento(dias: number): number

        getNumeroQuarto(): number {
            return this.numeroQuarto
        }
    }


    class QuartoBasico extends Acomodacao {

        constructor(numeroQuarto: number, precoBaseDiaria: number) {
            super(numeroQuarto, precoBaseDiaria)
        }

        calcularFaturamento(dias: number): number {
            return this.precoBaseDiaria * dias
        }
    }


    class SuiteMaster extends Acomodacao {

        private valorAdicionalHidro: number

        constructor(numeroQuarto: number,precoBaseDiaria: number,valorAdicionalHidro: number) {
            super(numeroQuarto, precoBaseDiaria)
            this.valorAdicionalHidro = valorAdicionalHidro
        }

        calcularFaturamento(dias: number): number {
            let totalDiarias = this.precoBaseDiaria * dias
            return totalDiarias + this.valorAdicionalHidro
        }
    }


    let acomodacoes: Acomodacao[] = []
    let diasHospedagem: number[] = []

    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(
            prompt("1 - Cadastrar Quarto Básico" + "2 - Cadastrar Suíte Master" + "3 - Exibir quartos com faturamento > R$ 1.000,00" + "0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {
            let numeroQuarto = Number(prompt("Informe o número do quarto:"))

            while (numeroQuarto <= 0 || numeroQuarto % 1 !== 0) {
                console.log("Número do quarto inválido!")
                numeroQuarto = Number(prompt("Informe um número de quarto válido:"))
            }

            let precoBaseDiaria = Number(prompt("Informe o preço base da diária:"))

            while (precoBaseDiaria <= 0) {
                console.log("Preço base inválido!")
                precoBaseDiaria = Number(prompt("Informe um preço base válido:"))
            }

            let dias = Number(prompt("Informe quantos dias o hóspede ficou alojado:"))

            while (dias <= 0 || dias % 1 !== 0) {
                console.log("Quantidade de dias inválida!")
                dias = Number(prompt("Informe uma quantidade de dias válida:"))
            }

            let quarto = new QuartoBasico(numeroQuarto, precoBaseDiaria)

            acomodacoes.push(quarto)
            diasHospedagem.push(dias)
            console.log("Quarto Básico cadastrado com sucesso!")
        }


        else if (opcao === 2) {

            let numeroQuarto = Number(prompt("Informe o número da suíte:"))

            while (numeroQuarto <= 0 || numeroQuarto % 1 !== 0) {
                console.log("Número da suíte inválido!")
                numeroQuarto = Number(prompt("Informe um número de suíte válido:"))
            }

            let precoBaseDiaria = Number(prompt("Informe o preço base da diária:"))

            while (precoBaseDiaria <= 0) {
                console.log("Preço base inválido!")
                precoBaseDiaria = Number(prompt("Informe um preço base válido:"))
            }

            let valorAdicionalHidro = Number(
                prompt("Informe o valor adicional fixo da hidromassagem:")
            )

            while (valorAdicionalHidro < 0) {
                console.log("Valor adicional inválido!")
                valorAdicionalHidro = Number(prompt("Informe um valor adicional válido:"))
            }

            let dias = Number(prompt("Informe quantos dias o hóspede ficou alojado:"))

            while (dias <= 0 || dias % 1 !== 0) {
                console.log("Quantidade de dias inválida!")
                dias = Number(prompt("Informe uma quantidade de dias válida:"))
            }

            let suite = new SuiteMaster(numeroQuarto, precoBaseDiaria, valorAdicionalHidro)

            acomodacoes.push(suite)
            diasHospedagem.push(dias)
            console.log("Suíte Master cadastrada com sucesso!")
        }


        else if (opcao === 3) {
            if (acomodacoes.length === 0) {
                console.log("Nenhum quarto foi cadastrado!")

            } else {
                let encontrou = false

                for (let i = 0; i < acomodacoes.length; i++) {

                    let acomodacao = acomodacoes[i]
                    let dias = diasHospedagem[i]

                    let faturamentoTotal = acomodacao.calcularFaturamento(dias)

                    if (faturamentoTotal > 1000.00) {
                        console.log(`Número do Quarto: ${acomodacao.getNumeroQuarto()}`)
                        console.log(`Faturamento Total: ${faturamentoTotal}`)
                        encontrou = true
                    }
                }

                if (!encontrou) {
                    console.log("Nenhum quarto faturou mais de R$ 1.000,00 na temporada.")
                }
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}