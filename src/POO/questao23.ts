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

    public abstract mostrarProduto(): void
}

class ProdutoPerecivel extends Produto {
    private dataValidade: string

    constructor( codigo: number, nome: string, precoCusto: number, dataValidade: string) {
        super(codigo, nome, precoCusto)
        this.dataValidade = dataValidade
    }

    public getDataValidade(): string {
        return this.dataValidade
    }

    public calcularPreco(): number {
        let hoje = new Date()
        let validade = new Date(this.dataValidade)

        if (
            hoje.getFullYear() === validade.getFullYear() &&
            hoje.getMonth() === validade.getMonth() &&
            hoje.getDate() === validade.getDate()
        ) {
            return this.getPrecoCusto() * 0.70
        }

        return this.getPrecoCusto()
    }

    public mostrarProduto(): void {
        console.log(
            `Código: ${this.getCodigo()} | ` +
            `Nome: ${this.getNome()} | ` +
            `Preço: R$ ${this.getPrecoCusto().toFixed(2)} | ` +
            `Validade: ${this.dataValidade}`
        )
    }
}

class ProdutoNaoPerecivel extends Produto {

    constructor(codigo: number, nome: string, precoCusto: number) {
        super(codigo, nome, precoCusto)
    }

    public calcularPreco(): number {
        return this.getPrecoCusto()
    }

    public mostrarProduto(): void {
        console.log(
            `Código: ${this.getCodigo()} | ` +
            `Nome: ${this.getNome()} | ` +
            `Preço: R$ ${this.getPrecoCusto().toFixed(2)}`)
    }
}

    let estoque: Produto[] = []

    let quantidade = Number(prompt("Digite a quantidade de produtos:"))

    for (let i = 0; i < quantidade; i++) {

        console.log(`Produto ${i + 1}`)

        let tipo = Number(prompt("Digite 1 para perecível ou 2 para não perecível:"))

        let codigo = Number(prompt("Digite o código do produto: "))

        let nome = String(prompt("Digite o nome do produto: "))

        let preco = Number(prompt("Digite o preço de custo:"))


        if (tipo === 1) {

            let validade = String(prompt("Digite a data de validade:")) 

            estoque.push(new ProdutoPerecivel(codigo, nome, preco, validade))

        } else if (tipo === 2) {

            estoque.push(new ProdutoNaoPerecivel(codigo, nome, preco))

        } else {

            console.log("Tipo de produto inválido.")
            i--
        }
    }

    for (let produto of estoque) {
        produto.mostrarProduto()
    }

    for (let produto of estoque) {

        let valorFinal = produto.calcularPreco()

        console.log(`Produto: ${produto.getNome()}`) 
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`)
    }
}
