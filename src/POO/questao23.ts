// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

export function executarQuestao23(): void {

    abstract class Produto {
        private codigo: string
        private nome: string
        protected precoCusto: number

        constructor(codigo: string, nome: string, precoCusto: number) {
            this.codigo = codigo
            this.nome = nome
            this.precoCusto = precoCusto
        }

        getCodigo(): string {
            return this.codigo
        }

        getNome(): string {
            return this.nome
        }

        getPrecoCusto(): number {
            return this.precoCusto
        }

        abstract calcularPrecoFinal(): number
        abstract obterDetalhes(): string
    }

    class ProdutoPerecivel extends Produto {
        private dataValidade: string
        private vencendoHoje: string

        constructor(codigo: string, nome: string, precoCusto: number, dataValidade: string, vencendoHoje: string) {
            super(codigo, nome, precoCusto)
            this.dataValidade = dataValidade
            this.vencendoHoje = vencendoHoje
        }

        calcularPrecoFinal(): number {
            if (this.vencendoHoje.toLowerCase() === "sim") {
                let desconto = this.getPrecoCusto() * 0.30
                return this.getPrecoCusto() - desconto
            } else {
                return this.getPrecoCusto()
            }
        }

        obterDetalhes(): string {
            return `Validade: ${this.dataValidade} | Vencendo hoje: ${this.vencendoHoje}`
        }
    }

    class ProdutoNaoPerecivel extends Produto {

        constructor(codigo: string, nome: string, precoCusto: number) {
            super(codigo, nome, precoCusto)
        }

        calcularPrecoFinal(): number {
            return this.getPrecoCusto()
        }

        obterDetalhes(): string {
            return `Não Perecível`
        }
    }

    let produtos: Produto[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de produto: | 1 - Produto Perecível | 2 - Produto Não Perecível"))
        let codigo = String(prompt("Informe o código do produto: "))
        let nome = String(prompt("Informe o nome do produto: "))
        let precoCusto = Number(prompt("Informe o preço de custo: "))

        let produto: Produto

        if (tipo === "1") {
            let dataValidade = String(prompt("Informe a data de validade: "))
            let vencendoHoje = String(prompt("O produto está no dia do vencimento (sim/não): "))
            produto = new ProdutoPerecivel(codigo, nome, precoCusto, dataValidade, vencendoHoje)
        } else {
            produto = new ProdutoNaoPerecivel(codigo, nome, precoCusto)
        }

        produtos.push(produto)

        continuar = String(prompt("Deseja cadastrar outro produto no estoque (sim/não): "))
    }

    if (produtos.length === 0) {
        console.log("Nenhum produto foi cadastrado no estoque")
    } else {
        let valorTotalVenda = 0

        for (let i = 0; i < produtos.length; i++) {
            let p = produtos[i]
            let precoFinal = p.calcularPrecoFinal()
            valorTotalVenda += precoFinal

            console.log(`Código: ${p.getCodigo()} | Nome: ${p.getNome()} | ${p.obterDetalhes()} | Custo: R$ ${p.getPrecoCusto().toFixed(2)} | Valor Final: ${precoFinal}`)
        }
        console.log(`Valor Total a Ser Pago pelo Cliente: R$ ${valorTotalVenda}`)
    }
}