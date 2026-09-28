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
        private numeroQuarto: number
        protected precoBaseDiaria: number

        constructor(numeroQuarto: number, precoBaseDiaria: number) {
            this.numeroQuarto = numeroQuarto
            this.precoBaseDiaria = precoBaseDiaria
        }

        getNumeroQuarto(): number {
            return this.numeroQuarto
        }

        getPrecoBaseDiaria(): number {
            return this.precoBaseDiaria
        }

        abstract calcularTotalHospedagem(dias: number): number
        abstract obterTipo(): string
    }

    class AcomodacaoBasica extends Acomodacao {

        constructor(numeroQuarto: number, precoBaseDiaria: number) {
            super(numeroQuarto, precoBaseDiaria)
        }

        calcularTotalHospedagem(dias: number): number {
            return this.precoBaseDiaria * dias
        }

        obterTipo(): string {
            return "Acomodação Básica"
        }
    }

    class SuiteMaster extends Acomodacao {
        private valorHidromassagem: number

        constructor(numeroQuarto: number, precoBaseDiaria: number, valorHidromassagem: number) {
            super(numeroQuarto, precoBaseDiaria)
            this.valorHidromassagem = valorHidromassagem
        }

        calcularTotalHospedagem(dias: number): number {
            let totalDiarias = this.precoBaseDiaria * dias
            return totalDiarias + this.valorHidromassagem
        }

        obterTipo(): string {
            return "Suíte Master"
        }
    }

    let acomodacoes: Acomodacao[] = []
    let diasHospedagem: number[] = []
    let continuar = "sim"

    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de acomodação: | 1 - Acomodação Básica | 2 - Suíte Master"))
        let numeroQuarto = Number(prompt("Informe o número do quarto: "))
        let precoBaseDiaria = Number(prompt("Informe o preço base da diária: "))
        let dias = Number(prompt("Informe a quantidade de dias que o hóspede ficou alojado: "))

        if (tipo === "1") {
            acomodacoes.push(new AcomodacaoBasica(numeroQuarto, precoBaseDiaria))
        } else {
            let valorHidro = Number(prompt("Informe o valor adicional fixo da hidromassagem: "))
            acomodacoes.push(new SuiteMaster(numeroQuarto, precoBaseDiaria, valorHidro))
        }

        diasHospedagem.push(dias)

        continuar = String(prompt("Deseja cadastrar outro check-out (sim/não): "))
    }

    if (acomodacoes.length === 0) {
        console.log("Nenhum check-out foi cadastrado")
    } else {
        let encontrou = false

        for (let i = 0; i < acomodacoes.length; i++) {
            let ac = acomodacoes[i]
            let dias = diasHospedagem[i]
            let totalFaturado = ac.calcularTotalHospedagem(dias)

            if (totalFaturado > 1000.00) {
                console.log(`Quarto: ${ac.getNumeroQuarto()} | Tipo: ${ac.obterTipo()} | Dias: ${dias} | Faturamento Total: R$ ${totalFaturado}`)
                encontrou = true
            }
        }

        if (encontrou) {
            console.log("Nenhum quarto faturou mais de R$ 1.000,00 na temporada.")
        }
    }
}