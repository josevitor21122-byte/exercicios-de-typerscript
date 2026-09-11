// 11. Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.
export function executarQuestao11() {
    class Pedido {
        constructor(nomeCliente, nomePedido, valor) {
            this.nomeCliente = nomeCliente;
            this.nomePedido = nomePedido;
            this.valor = valor;
        }
        exibirResumo() {
            console.log(`Cliente: ${this.nomeCliente}`);
            console.log(`Item Pedido: ${this.nomePedido}`);
            console.log(`Valor Total: R$ ${this.valor}`);
        }
    }
    const novoPedido = new Pedido("Lucas", "X-Burguer + Batata Frita", 34.90);
    novoPedido.exibirResumo();
}
