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

        constructor(codigo: number,nome: string,precoCusto: number) {
            this.codigo = codigo
            this.nome = nome
            this.precoCusto = precoCusto
        }

        protected getCodigo(): number {
            return this.codigo
        }

        protected getNome(): string {
            return this.nome
        }

        protected getPrecoCusto(): number {
            return this.precoCusto
        }

        abstract calcularPrecoFinal(): number
        abstract exibirDados(): void
    }

    class ProdutoPerecivel extends Produto {
        private dataValidade: string

        constructor( codigo: number, nome: string, precoCusto: number, dataValidade: string) {
            super(codigo, nome, precoCusto)
            this.dataValidade = dataValidade
        }

        calcularPrecoFinal(): number {
            let dataAtual = new Date()
            let validade = new Date(this.dataValidade)

            if (dataAtual.getDate() === validade.getDate() && dataAtual.getMonth() === validade.getMonth() && dataAtual.getFullYear() === validade.getFullYear()) {
                return this.getPrecoCusto() * 0.70

            } else {
                return this.getPrecoCusto()
            }
        }

        exibirDados(): void {
            console.log(`Código: ${this.getCodigo()}`)
            console.log(`Nome: ${this.getNome()}`)
            console.log(`Preço de custo: ${this.getPrecoCusto()}`)
            console.log(`Data de validade: ${this.dataValidade}`)

            if (this.calcularPrecoFinal() < this.getPrecoCusto()) {
                console.log("Desconto de 30% aplicado!")

            } else {
                console.log("Sem desconto!")
            }
            console.log(`Preço final: R$ ${this.calcularPrecoFinal()}`)
        }
    }

    class ProdutoNaoPerecivel extends Produto {
        calcularPrecoFinal(): number {
            return this.getPrecoCusto()
        }

        exibirDados(): void {
            console.log(`Código: ${this.getCodigo()}`)
            console.log(`Nome: ${this.getNome()}`)
            console.log(`Preço de custo: ${this.getPrecoCusto()}`)
            console.log(`Preço final: ${this.calcularPrecoFinal()}`)
        }
    }

    let produtos: Produto[] = []
    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(prompt("1 - Cadastrar Produto Perecível" + "2 - Cadastrar Produto Não Perecível" + "3 - Listar Produtos" + "4 - Passar Produtos pelo Caixa" + "0 - Sair"))

        if (opcao === 1) {
            let codigo = Number(prompt("Informe o código do produto: "))

            while (codigo <= 0 || codigo) {
                console.log("Código inválido!")
                codigo = Number(prompt("Informe um código válido: "))
            }

            let nome = String(prompt("Informe o nome do produto: "))

            while (nome === "") {
                console.log("Nome inválido!")
                nome = String(prompt("Informe um nome válido: "))
            }

            let precoCusto = Number(prompt("Informe o preço de custo: "))

            while (precoCusto <= 0 || precoCusto) {

                console.log("Preço de custo inválido!")
                precoCusto = Number(prompt("Informe um preço de custo válido: "))
            }


            let dataValidade = String(prompt("Informe a data de validade: "))

            while (dataValidade === "" || new Date(dataValidade).getTime()) {

                console.log("Data de validade inválida!")
                dataValidade = String(prompt("Informe uma data de validade válida: "))
            }

            let produtoPerecivel = new ProdutoPerecivel( codigo, nome, precoCusto, dataValidade)

            produtos.push(produtoPerecivel)
            console.log("Produto perecível cadastrado com sucesso!")
        }


        else if (opcao === 2) {
            let codigo = Number(prompt("Informe o código do produto:"))

            while (codigo <= 0 || codigo) {

                console.log("Código inválido!")
                codigo = Number(prompt("Informe um código válido:"))
            }


            let nome = String(prompt("Informe o nome do produto:"))

            while (nome === "") {

                console.log("Nome inválido!")
                nome = String(prompt("Informe um nome válido:"))
            }


            let precoCusto = Number(prompt("Informe o preço de custo:"))

            while (precoCusto <= 0 || precoCusto) {

                console.log("Preço de custo inválido!")
                precoCusto = Number(prompt("Informe um preço de custo válido:"))
            }


            let produtoNaoPerecivel = new ProdutoNaoPerecivel(codigo,nome,precoCusto)

            produtos.push(produtoNaoPerecivel)

            console.log("Produto não perecível cadastrado com sucesso!")
        }


        else if (opcao === 3) {

            if (produtos.length === 0) {
                console.log("Nenhum produto cadastrado!")

            } else {

                for (let produto of produtos) {
                    produto.exibirDados()
                }
            }
        }


        else if (opcao === 4) {

            if (produtos.length === 0) {

                console.log("Nenhum produto cadastrado!")

            } else {

                let valorTotal = 0

                for (let produto of produtos) {

                    let precoFinal = produto.calcularPrecoFinal()

                    console.log(`${produto} - R$ ${precoFinal}`)
                    valorTotal += precoFinal
                }

                console.log(`Valor final da compra: R$ ${valorTotal}`)
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}