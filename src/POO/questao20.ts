// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

export function executarQuestao20(): void {

    abstract class Pedido {

        private numeroMesa: number
        private valorIngredientes: number

        constructor(numeroMesa: number, valorIngredientes: number) {
            this.numeroMesa = numeroMesa
            this.valorIngredientes = valorIngredientes
        }

        getNumeroMesa(): number {
            return this.numeroMesa
        }

        getValorIngredientes(): number {
            return this.valorIngredientes
        }

        setNumeroMesa(numeroMesa: number): void {
            this.numeroMesa = numeroMesa
        }

        setValorIngredientes(valorIngredientes: number): void {
            this.valorIngredientes = valorIngredientes
        }

        public abstract calcularValorFinal(): number

        public exibirPedido(): void {
            console.log(`Mesa: ${this.numeroMesa}`)
            console.log(`Valor dos ingredientes: ${this.valorIngredientes}`)
            console.log(`Valor final: ${this.calcularValorFinal()}`)
        }
    }

    class PedidoEntrega extends Pedido {

        protected taxaEntrega: number
        private enderecoDestino: string

        constructor( numeroMesa: number, valorIngredientes: number, taxaEntrega: number, enderecoDestino: string) {
            super(numeroMesa, valorIngredientes)
            this.taxaEntrega = taxaEntrega
            this.enderecoDestino = enderecoDestino
        }

        getTaxaEntrega(): number {
            return this.taxaEntrega
        }

        getEnderecoDestino(): string {
            return this.enderecoDestino
        }

        setTaxaEntrega(taxaEntrega: number): void {
            this.taxaEntrega = taxaEntrega
        }

        setEnderecoDestino(enderecoDestino: string): void {
            this.enderecoDestino = enderecoDestino
        }

        calcularValorFinal(): number {
            return this.getValorIngredientes() + this.taxaEntrega
        }

        exibirPedido(): void {
            console.log(`Mesa: ${this.getNumeroMesa()}`)
            console.log(`Valor dos ingredientes: ${this.getValorIngredientes()}`)
            console.log(`Taxa de entrega: ${this.taxaEntrega}`)
            console.log(`Endereço: ${this.enderecoDestino}`)
            console.log(`Valor final: ${this.calcularValorFinal()}`)
        }
    }

    class PedidoLocal extends Pedido {

        constructor(numeroMesa: number, valorIngredientes: number) {
            super(numeroMesa, valorIngredientes)
        }

        calcularValorFinal(): number {
            return this.getValorIngredientes()
        }

        exibirPedido(): void {
            console.log(`Mesa: ${this.getNumeroMesa()}`)
            console.log(`Valor dos ingredientes: ${this.getValorIngredientes()}`)
            console.log(`Valor final: ${this.calcularValorFinal()}`)
        }
    }

    let pedidos: Pedido[] = []

    while (true) {
        console.log("1 - Pedido no local")
        console.log("2 - Pedido de entrega")
        console.log("0 - Fechar caixa")

        let opcao: number = Number(prompt("Digite a opção desejada: "))

        if (opcao === 0) {
            break
        }

        if (opcao === 1) {

            let numeroMesa: number = Number(prompt("Digite o número da mesa: "))

            let valorIngredientes: number = Number(prompt("Digite o valor dos ingredientes: "))

            let pedido: Pedido = new PedidoLocal(numeroMesa, valorIngredientes)

            pedidos.push(pedido)

            console.log("Pedido cadastrado com sucesso!")

        } else if (opcao === 2) {

            let numeroMesa: number = Number(prompt("Digite o número da mesa: "))

            let valorIngredientes: number = Number(prompt("Digite o valor dos ingredientes: "))

            let taxaEntrega: number = Number(prompt("Digite a taxa de entrega: "))

            let enderecoDestino: string = String(prompt("Digite o endereço de destino: "))

            const pedido: Pedido = new PedidoEntrega(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino)

            pedidos.push(pedido)

            console.log("Pedido de entrega cadastrado com sucesso!")

        } else {
            console.log("Opção inválida!")
        }
    }

    let faturamentoTotal: number = 0

    for (const pedido of pedidos) {
        pedido.exibirPedido()
        faturamentoTotal += pedido.calcularValorFinal()
    }
    
    console.log(`faturamento total: ${faturamentoTotal}`)
}