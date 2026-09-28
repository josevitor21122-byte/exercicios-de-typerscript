// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal():number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.
export function executarQuestao39() {
    class Pedido {
        constructor(numPedido, valorBase) {
            this.numPedido = numPedido;
            this.valorBase = valorBase;
        }
        getNumPedido() {
            return this.numPedido;
        }
        getValorBase() {
            return this.valorBase;
        }
    }
    class PedidoLocal extends Pedido {
        constructor(numPedido, valorBase, taxaServico) {
            super(numPedido, valorBase);
            this.taxaServico = taxaServico;
        }
        calcularTotal() {
            let resultado = this.valorBase + (this.taxaServico * 10) / 100;
            return resultado;
        }
    }
    class PedidoDriveThru extends Pedido {
        constructor(numPedido, valorBase, taxaFixa, embalagemEspecial) {
            super(numPedido, valorBase);
            this.taxaFixa = taxaFixa;
            this.embalagemEspecial = embalagemEspecial;
        }
        calcularTotal() {
            return this.valorBase + 3;
        }
    }
    let faturamentoBruto = 0;
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("(1- Pedido Local" + "2 - Pedido Drive Thru"));
        let numPedido = Number(prompt("qual é o número do pedido: "));
        let valorBase = Number(prompt("Informe o valor base do pedido: "));
        let pedido;
        if (tipo === "1") {
            pedido = new PedidoLocal(numPedido, valorBase, 10);
        }
        else {
            pedido = new PedidoDriveThru(numPedido, valorBase, 3, "Sim");
        }
        let totalPedido = pedido.calcularTotal();
        faturamentoBruto += totalPedido;
        console.log(`Resumo do Pedido: ${pedido.getNumPedido()}  Valor Total: ${totalPedido}`);
        continuar = String(prompt("Deseja registrar outro pedido? (sim/não): "));
    }
}
