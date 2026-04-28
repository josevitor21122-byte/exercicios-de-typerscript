// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let Numero: number = Number(prompt("Digite um número: "))

if (Numero % 2 == 0) {
    console.log("O número é Par !")
} else {
    console.log("Número é Ímpar !")
}

if (Numero > 0) {
    console.log("O número é Positivo")
} else if (numero < 0) {
    console.log("O número é Negativo")
} else {
    console.log("O número é Zero")
}