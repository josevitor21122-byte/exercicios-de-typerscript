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

    private codigo: number
    private nome: string
    private precoCusto: number

    constructor(codigo: number, nome: string, precoCusto: number) {
        this.codigo = codigo
        this.nome = nome
        this.precoCusto = precoCusto
    }

    public getCodigo(): number {
        return this.codigo
    }

    public getNome(): string {
        return this.nome
    }

    public getPrecoCusto(): number {
        return this.precoCusto
    }

    public abstract calcularPreco(): number
    public abstract getTipo(): string
    public mostrarProduto(): void {

        console.log(`Código: ${this.codigo}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Preço: R$ ${this.calcularPreco()}`)
        console.log(`Tipo: ${this.getTipo()}`)
    }
}


class ProdutoPerecivel extends Produto {

    private dataValidade: string

    constructor(codigo: number, nome: string, precoCusto: number, dataValidade: string) {
        super(codigo, nome, precoCusto)
        this.dataValidade = dataValidade
    }

    public getTipo(): string {
        return "Perecível"
    }

    public calcularPreco(): number {

        let dataAtual = new Date()
        let validade = new Date(this.dataValidade)

        let diaAtual = dataAtual.getDate()
        let mesAtual = dataAtual.getMonth()
        let anoAtual = dataAtual.getFullYear()

        let diaValidade = validade.getDate()
        let mesValidade = validade.getMonth()
        let anoValidade = validade.getFullYear()

        if (diaAtual === diaValidade && mesAtual === mesValidade && anoAtual === anoValidade) {

            return this.getPrecoCusto() * 0.70
        }

        return this.getPrecoCusto()
    }

    public mostrarProduto(): void {

        console.log(`Código: ${this.getCodigo()}`)
        console.log(`Nome: ${this.getNome()}`)
        console.log(`Data de validade: ${this.dataValidade}`)
        console.log(`Preço: R$ ${this.calcularPreco()}`)
        console.log(`Tipo: ${this.getTipo()}`)
    }
}


class ProdutoNaoPerecivel extends Produto {

    constructor(codigo: number, nome: string, precoCusto: number) {
        super(codigo, nome, precoCusto)
    }

    public getTipo(): string {
        return "Não Perecível"
    }

    public calcularPreco(): number {
        return this.getPrecoCusto()
    }

    public mostrarProduto(): void {

        console.log(`Código: ${this.getCodigo()}`)
        console.log(`Nome: ${this.getNome()}`)
        console.log(`Preço: R$ ${this.calcularPreco()}`)
        console.log(`Tipo: ${this.getTipo()}`)
    }
}

    let produtos: Produto[] = []
    let opcao: number = 0

    while (opcao !== 4) {
        console.log(`1 - Cadastrar produto perecível`)
        console.log(`2 - Cadastrar produto não perecível`)
        console.log(`3 - Listar produtos e passar pelo caixa`)
        console.log(`4 - Sair`)

        opcao = Number(prompt(`Digite uma opção: `))


        if (opcao === 1) {

            let codigo: number = Number(prompt(`Digite o código do produto: `))

            let nome: string = String(prompt(`Digite o nome do produto: `))

            let preco: number = Number(prompt(`Digite o preço de custo: `))

            let validade: string = String(prompt(`Digite a data de validade: `))

            let produto: ProdutoPerecivel = new ProdutoPerecivel( codigo, nome, preco, validade)

            produtos.push(produto)

            console.log(`Produto perecível cadastrado!`)

        } else if (opcao === 2) {

            let codigo: number = Number(prompt(`Digite o código do produto: `))

            let nome: string = String(prompt(`Digite o nome do produto: `))

            let preco: number = Number(prompt(`Digite o preço de custo:`))

            let produto: ProdutoNaoPerecivel = new ProdutoNaoPerecivel(codigo, nome, preco)

            produtos.push(produto)

            console.log(`Produto não perecível cadastrado!`)

        } else if (opcao === 3) {

            if (produtos.length === 0) {

                console.log(`Nenhum produto cadastrado.`);

            } else {

                for (let i = 0; i < produtos.length; i++) {

                    console.log(`Produto ${i + 1}`)

                    produtos[i].mostrarProduto()
                }

                let total: number = 0

                for (let i = 0; i < produtos.length; i++) {

                    let produto = produtos[i]
                    let valor = produto.calcularPreco()

                    console.log(`Produto: ${produto.getNome()}`)
                    console.log(`Valor a pagar: R$ ${valor}`)

                    total = total + valor
                }

                console.log(`Total da compra: R$ ${total}`)
            }


        } else if (opcao === 4) {
            console.log(`Programa encerrado.`)

        } else {
            console.log(`Opção inválida.`)
        }
    }
}
