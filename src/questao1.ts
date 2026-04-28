// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

export let numero: number = Number(prompt("Digite um número: "))

if (numero % 2 == 0) {
    console.log("O número é Par !")
} else {
    console.log("Número é Ímpar !")
}

if (numero > 0) {
    console.log("O número é Positivo")
} else if (numero < 0) {
    console.log("O número é Negativo")
} else {
    console.log("O número é Zero")
}