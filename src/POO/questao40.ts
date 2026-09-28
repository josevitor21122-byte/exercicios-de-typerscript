// 40. Abstração Herança Polimorfismo Repetição Encapsulamento
// Simulador de Investimentos Financeiros
// Uma corretora de valores quer disponibilizar uma calculadora para seus clientes. A classe abstrata
// Investimento possui o valor aplicado e o tempo em meses privados, além do método abstrato
// calcularRendimento():number. O investimento em RendaFixa rende 0,8% ao mês de forma
// simples. O investimento em Acoes possui uma taxa de variação informada pelo usuário (podendo ser
// positiva ou negativa). O programa deve abrir um menu para o usuário testar simulações de
// investimento. A cada iteração, o sistema calcula o retorno financeiro via polimorfismo e exibe o saldo
// final projetado para o investidor.

export function executarQuestao40(): void {

    abstract class Investimento {
        private valorAplicado: number
        private tempoMeses: number

        constructor(valorAplicado: number, tempoMeses: number) {
            this.valorAplicado = valorAplicado
            this.tempoMeses = tempoMeses
        }

        getValorAplicado(): number {
            return this.valorAplicado
        }

        getTempoMeses(): number {
            return this.tempoMeses
        }

        abstract calcularRendimento(): number
    }

    class RendaFixa extends Investimento {
        constructor(valorAplicado: number, tempoMeses: number) {
            super(valorAplicado, tempoMeses)
        }

        calcularRendimento(): number {
            let rendimento = this.getValorAplicado() * 0.008 * this.getTempoMeses()
            return this.getValorAplicado() + rendimento
        }
    }

    class Acoes extends Investimento {
        private taxaVariacao: number

        constructor(valorAplicado: number, tempoMeses: number, taxaVariacao: number) {
            super(valorAplicado, tempoMeses)
            this.taxaVariacao = taxaVariacao
        }

        calcularRendimento(): number {
            let rendimento = this.getValorAplicado() * this.taxaVariacao * this.getTempoMeses()
            return this.getValorAplicado() + rendimento
        }
    }

    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de investimento: | 1 - Renda Fixa | 2 - Ações"))
        let valorAplicado = Number(prompt("Informe o valor aplicado: "))
        let tempoMeses = Number(prompt("Informe o tempo em meses: "))

        let investimento: Investimento

        if (tipo === "1") {
            investimento = new RendaFixa(valorAplicado, tempoMeses)
        } else {
            let taxaPercentual = Number(prompt("Informe a taxa de variação mensal):"))
            let taxaVariacao = taxaPercentual / 100
            investimento = new Acoes(valorAplicado, tempoMeses, taxaVariacao)
        }

        let saldoFinal = investimento.calcularRendimento()

        console.log(`Saldo Final Projetado: R$ ${saldoFinal}`)

        continuar = String(prompt("Deseja realizar outra simulação (sim/não): "))
    }
}