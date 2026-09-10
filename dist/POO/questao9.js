// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.
export function executarQuestao9() {
    class Produto {
        constructor(nome, preco, quantidade) {
            this.nome = nome;
            this.preco = preco;
            this.quantidade = quantidade;
        }
        exibirValorEstoque() {
            const valorTotal = this.preco * this.quantidade;
            console.log(`Produto: ${this.nome} | Qtd: ${this.quantidade} | Preço Un: R$ ${this.preco.toFixed(2)} | Total em Estoque: R$ ${valorTotal}`);
        }
    }
    let listaProdutos = [];
    listaProdutos.push(new Produto("Notebook", 3500.00, 5));
    listaProdutos.push(new Produto("Mouse Sem Fio", 89.90, 20));
    listaProdutos.push(new Produto("Monitor 24'", 950.00, 3));
    for (let produto of listaProdutos) {
        produto.exibirValorEstoque();
    }
}
