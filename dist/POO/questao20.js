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
    class PedidoPizzaria {
        constructor(numeroMesa, valorIngredientes) {
            this.numeroMesa = numeroMesa;
            this.valorIngredientes = valorIngredientes;
        }
        getNumeroMesa() {
            return this.numeroMesa;
        }
        getValorIngredientes() {
            return this.valorIngredientes;
        }
    }
    class PedidoMesa extends PedidoPizzaria {
        constructor(numeroMesa, valorIngredientes) {
            super(numeroMesa, valorIngredientes);
        }
        calcularValorFinal() {
            return this.getValorIngredientes();
        }
    }
    class PedidoDelivery extends PedidoPizzaria {
        constructor(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino) {
            super(numeroMesa, valorIngredientes);
            this.taxaEntrega = taxaEntrega;
            this.enderecoDestino = enderecoDestino;
        }
        getTaxaEntrega() {
            return this.taxaEntrega;
        }
        getEnderecoDestino() {
            return this.enderecoDestino;
        }
        calcularValorFinal() {
            return this.getValorIngredientes() + this.taxaEntrega;
        }
    }
    let pedidos = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de pedido: | 1 - Pedido de Mesa | 2 - Pedido de Entrega"));
        let numeroMesa = Number(prompt("Informe o número da mesa : "));
        let valorIngredientes = Number(prompt("Informe o valor dos ingredientes: "));
        let pedido;
        if (tipo === "1") {
            pedido = new PedidoMesa(numeroMesa, valorIngredientes);
        }
        else {
            let taxaEntrega = Number(prompt("Informe a taxa de entrega: "));
            let enderecoDestino = String(prompt("Informe o endereço de destino: "));
            pedido = new PedidoDelivery(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino);
        }
        pedidos.push(pedido);
        continuar = String(prompt("Deseja cadastrar outro pedido (sim/não): "));
    }
    if (pedidos.length === 0) {
        console.log("Nenhum pedido foi cadastrado");
    }
    else {
        let faturamentoTotal = 0;
        for (let i = 0; i < pedidos.length; i++) {
            let p = pedidos[i];
            let valorFinal = p.calcularValorFinal();
            faturamentoTotal += valorFinal;
            console.log(`Mesa: ${p.getNumeroMesa()} | Valor Final: ${valorFinal}`);
        }
        console.log(`Faturamento Total do Estabelecimento: ${faturamentoTotal}`);
    }
}
