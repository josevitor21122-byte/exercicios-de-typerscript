// 41. Abstração Herança Polimorfismo Repetição Encapsulamento
// Gerenciador de Encomendas de Correios
// Um centro de distribuição precisa calcular o frete de suas entregas. A classe Encomenda possui o peso
// em kg e a cidade de destino privados. A classe EncomendaPadrão cobra R$ 10,00 por kg. A classe
// EncomendaExpressa cobra R$ 20,00 por kg e garante entrega em até 24 horas. O sistema solicita em
// um laço de repetição os dados das encomendas registradas no balcão. O programa processa cada uma,
// calcula o valor do frete utilizando o método sobrescrito nas subclasses e exibe o valor acumulado
// cobrado em taxas de frete expresso durante o dia.

export function executarQuestao41(): void {

    abstract class Encomenda {
        private peso: number
        private cidadeDestino: string

        constructor(peso: number, cidadeDestino: string) {
            this.peso = peso
            this.cidadeDestino = cidadeDestino
        }

        getPeso(): number {
            return this.peso
        }

        getCidadeDestino(): string {
            return this.cidadeDestino
        }

        abstract calcularFrete(): number
        abstract obterTipo(): string
    }

    class EncomendaPadrao extends Encomenda {

        constructor(peso: number, cidadeDestino: string) {
            super(peso, cidadeDestino)
        }

        calcularFrete(): number {
            return this.getPeso() * 10.00
        }

        obterTipo(): string {
            return "Padrão"
        }
    }

    class EncomendaExpressa extends Encomenda {

        constructor(peso: number, cidadeDestino: string) {
            super(peso, cidadeDestino)
        }

        calcularFrete(): number {
            return this.getPeso() * 20.00
        }

        obterTipo(): string {
            return "Expressa"
        }
    }

    let encomendas: Encomenda[] = []
    let continuar = "sim"

    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de encomenda: | 1 - Padrão | 2 - Expressa"))
        let peso = Number(prompt("Informe o peso da encomenda: "))
        let cidadeDestino = String(prompt("Informe a cidade de destino: "))

        if (tipo === "1") {
            encomendas.push(new EncomendaPadrao(peso, cidadeDestino))
        } else {
            encomendas.push(new EncomendaExpressa(peso, cidadeDestino))
        }

        continuar = String(prompt("Deseja cadastrar outra encomenda (sim/não): "))
    }

    if (encomendas.length === 0) {
        console.log("Nenhuma encomenda foi cadastrada!")
    } else {
        let acumuladoFreteExpresso = 0

        for (let i = 0; i < encomendas.length; i++) {
            let enc = encomendas[i]
            let valorFrete = enc.calcularFrete()

            console.log(`Destino: ${enc.getCidadeDestino()} | Tipo: ${enc.obterTipo()} | Peso: ${enc.getPeso()} | Frete: ${valorFrete}`)

            if (enc.obterTipo().includes("Expressa")) {
                acumuladoFreteExpresso += valorFrete
            }
        }
        console.log(`Valor Acumulado em Taxas de Frete Expresso: R$ ${acumuladoFreteExpresso}`)
    }
}