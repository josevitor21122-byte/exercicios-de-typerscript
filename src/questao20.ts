// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

let notas: number[] = []
let nota = 0

while (nota !== -1) {
    nota = Number(prompt("Digite uma nota (-1 para sair): "))

    if (nota !== -1) {
        notas.push(nota)
    }
}

let quantidade = notas.length

console.log("Notas na ordem digitada:", notas)

let notasReversas: number[] = []
for (let i = notas.length - 1; i >= 0; i--) {
    notasReversas.push(notas[i])
}

let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

let Media = 0
if (quantidade > 0) {
    media = soma / quantidade
}

let acimaMedia = 0
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acimaMedia++
    }
}

console.log("Quantidade de notas: "+ quantidade)
console.log("Notas em ordem inversa: "+ notasReversas)
console.log("Soma das notas: "+ soma)
console.log("Média das notas: "+ media.toFixed(2))
console.log("Notas acima da média: "+ acimaMedia)