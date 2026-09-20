// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.
export function executarQuestao20() {
    class Pedido {
        constructor(numeroMesa, valorIngredientes, tipo) {
            this._numeroMesa = numeroMesa;
            this._valorIngredientes = valorIngredientes;
            this.tipo = tipo;
        }
        getNumeroMesa() {
            return this._numeroMesa;
        }
        getValorIngredientes() {
            return this._valorIngredientes;
        }
        getTipo() {
            return this.tipo;
        }
        setNumeroMesa(numeroMesa) {
            this._numeroMesa = numeroMesa;
        }
        setValorIngredientes(valor) {
            this._valorIngredientes = valor;
        }
        calcularTotal() {
            return this._valorIngredientes;
        }
        exibirResumo() {
            console.log(`Mesa: ${this._numeroMesa}`);
            console.log(`Ingredientes: R$ ${this._valorIngredientes}`);
        }
    }
    class PedidoDelivery extends Pedido {
        constructor(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino) {
            super(numeroMesa, valorIngredientes, "D");
            this.taxaEntrega = taxaEntrega;
            this.enderecoDestino = enderecoDestino;
        }
        calcularTotal() {
            return this.getValorIngredientes() + this.taxaEntrega;
        }
        exibirResumo() {
            console.log(`Mesa de Origem: ${this.getNumeroMesa()}`);
            console.log(`Destino: ${this.enderecoDestino}`);
            console.log(`Valor Base: ${this.getValorIngredientes()}`);
            console.log(`Taxa: ${this.taxaEntrega}`);
        }
    }
    let controlePedidos = [];
    let continuarPedidos = true;
    let faturamentoTotal = 0;
    while (continuarPedidos) {
        let opcao = String(prompt("Pizzaria Local - Registro de Pedidos Digite: L - Pedido Local D - Pedido Delivery (Entrega) F - Fechar Caixa (Encerrar) Opção: "));
        if (opcao === "F") {
            continuarPedidos = false;
        }
        else if (opcao === "L" || opcao === "D") {
            let mesa = Number(prompt("Número da mesa (ou código do pedido): "));
            let valorIngredientes = Number(prompt("Valor total dos ingredientes: "));
            if (opcao === "L") {
                let novoPedidoLocal = new Pedido(mesa, valorIngredientes, "L");
                controlePedidos.push(novoPedidoLocal);
                console.log(`Pedido local para a mesa ${mesa}`);
            }
            else if (opcao === "D") {
                let endereco = String(prompt("Endereço de destino: "));
                let taxa = Number(prompt("Valor da taxa de entrega: "));
                let novoPedidoDelivery = new PedidoDelivery(mesa, valorIngredientes, taxa, endereco);
                controlePedidos.push(novoPedidoDelivery);
                console.log(`Pedido de Delivery para ${endereco}`);
            }
        }
        else {
            console.log("Opção inválida!");
        }
    }
    for (let i = 0; i < controlePedidos.length; i++) {
        let pedidoAtual = controlePedidos[i];
        pedidoAtual.exibirResumo();
        let valorFinalDoPedido = pedidoAtual.calcularTotal();
        console.log(`Valor final: ${valorFinalDoPedido}`);
        faturamentoTotal += valorFinalDoPedido;
    }
    console.log(`Faturamento Total: R$ ${faturamentoTotal}`);
    console.log(`Total de pedidos realizados: ${controlePedidos.length}`);
}
