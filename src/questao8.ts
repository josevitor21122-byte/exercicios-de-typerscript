// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let conjNumero: number = 0
let quantPares: number = 0
let quantImpares: number = 0

while (conjNumero !== -1) {
    conjNumero = Number(prompt("Informe um Número: "))

    if (conjNumero !== -1) {
    if (conjNumero % 2 == 0) {
        quantPares++
    } else {
        quantImpares++
    }
}
}

console.log("Quantidade de numeros Pares: " +quantPares)
console.log("Quantidade de numeros Impares: " +quantImpares)
console.log("Conjunto dos numeros: " +conjNumero)