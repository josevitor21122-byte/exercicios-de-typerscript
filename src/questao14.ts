// 6. Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.
// Exemplo: Salário Bruto: (15 * 220)       : R$ 3300,00
//   (-) IR (15%)                      : R$  495,00  
//   (-) INSS (10%)                  : R$  330,00
// (-) SINDICATO (3%)                  : R$   99,00
// (-) V. ALIMENTAÇÃO (8%)              : R$  264,00
// (-) V. TRANSPORTE (6%)               : R$  198,00
//   FGTS (11%)                       : R$  121,00
//   Total de descontos               : R$  1386,00
//   Salário Líquido                 : R$  1914,00

let valorHora: number = Number(prompt("Digite o valor da hora:"))
let horas: number = Number(prompt("Digite a quantidade de horas trabalhadas:"))

let salarioBruto = valorHora * horas

let percentualIR = 0

if (salarioBruto <= 2428.80) {
    percentualIR = 0
} else if (salarioBruto <= 2826.65) {
    percentualIR = 7.5
} else if (salarioBruto <= 3751.05) {
    percentualIR = 15
} else if (salarioBruto <= 4664.68) {
    percentualIR = 22.5
} else {
    percentualIR = 27.5
}

// cálculos
let descontoIR = salarioBruto * (percentualIR / 100)
let inss = salarioBruto * 0.10
let sindicato = salarioBruto * 0.03
let valeAlimentacao = salarioBruto * 0.08
let valeTransporte = salarioBruto * 0.06
let fgts = salarioBruto * 0.11

let totalDescontos = descontoIR + inss + sindicato + valeAlimentacao + valeTransporte
let salarioLiquido = salarioBruto - totalDescontos

// saída
console.log("Salário Bruto:", salarioBruto.toFixed(2))
console.log("(-) IR (" + percentualIR + "%):", descontoIR.toFixed(2))
console.log("(-) INSS (10%):", inss.toFixed(2))
console.log("(-) Sindicato (3%):", sindicato.toFixed(2))
console.log("(-) Vale Alimentação (8%):", valeAlimentacao.toFixed(2))
console.log("(-) Vale Transporte (6%):", valeTransporte.toFixed(2))
console.log("FGTS (11%):", fgts.toFixed(2))
console.log("Total de descontos:", totalDescontos.toFixed(2))
console.log("Salário Líquido:", salarioLiquido.toFixed(2))