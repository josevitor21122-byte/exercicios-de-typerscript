// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total
let digitaNumero = 1;
let quantNum = 0;
let somaTotal = 0;
let numero = 0;
while (digitaNumero !== 0) {
    digitaNumero = Number(prompt("Informe um número, digite ( 0 ) para sair: "));
    if (numero !== 0) {
        somaTotal += numero;
        quantNum++;
    }
}
console.log("A quatidade é: " + quantNum);
console.log("A soma toal é: " + somaTotal);
export {};
