// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let valor1: number = Number(prompt("Digite o primeiro número:"))
let valor2: number = Number(prompt("Digite o segundo número:"))

let opcao: number = Number(prompt(
    "Escolha uma operação:\n" +
    "1 - Soma\n" +
    "2 - Subtração\n" +
    "3 - Multiplicação\n" +
    "4 - Divisão"
))

switch (opcao) {
    case 1:
        console.log("Resultado da soma: " + (valor1 + valor2))
        break

    case 2:
        console.log("Resultado da subtração: " + (valor1 - valor2))
        break

    case 3:
        console.log("Resultado da multiplicação: " + (valor1 * valor2))
        break

    case 4:
        if (valor2 !== 0) {
            console.log("Resultado da divisão: " + (valor1 / valor2))
        } else {
            console.log("Erro: divisão por zero não é permitida!")
        }
        break

    default:
        console.log("Opção inválida!")
}