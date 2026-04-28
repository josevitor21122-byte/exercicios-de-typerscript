// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

function calcularValor(preco: number, quantidade: number): number {
    let total = preco * quantidade

    if (quantidade > 10) {
        total = total * 0.95
    }

    return total
}

let totalGeral = 0
let somaPrecos = 0
let quantidadeProdutos = 0

let preco = 1

while (preco !== 0) {

    preco = Number(prompt("Digite o preço do produto (0 para sair):"))

    if (preco !== 0) {

        let quantidade = Number(prompt("Digite a quantidade:"))

        let valorFinal = calcularValor(preco, quantidade)

        totalGeral += valorFinal
        somaPrecos += preco
        quantidadeProdutos++
    }
}

let media = 0

if (quantidadeProdutos > 0) {
    media = somaPrecos / quantidadeProdutos
}

console.log("Total investido no estoque: R$ " + totalGeral.toFixed(2))
console.log("Média de preço dos produtos: R$ " + media.toFixed(2))