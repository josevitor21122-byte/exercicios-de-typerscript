// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

let numeros: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let pares: number[] = []
let impares: number[] = []
let multiplos: number[] = []

for (let i = 0; i < numeros.length; i++) {

    let n = numeros[i]

    if (n % 2 === 0) {
        pares.push(n)
    }

    if (n % 2 !== 0) {
        impares.push(n)
    }

    if (n % 2 === 0 && n % 3 === 0 && n % 4 === 0) {
        multiplos.push(n)
    }
}

let reversa: number[] = []

for (let i = numeros.length - 1; i >= 0; i--) {
    reversa.push(numeros[i])
}

console.log("Lista original: "+ numeros)
console.log("Pares: "+ pares)
console.log("Ímpares: "+ impares)
console.log("Múltiplos de 2, 3 e 4: "+ multiplos)
console.log("Lista reversa: "+ reversa)