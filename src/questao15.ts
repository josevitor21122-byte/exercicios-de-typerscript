// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

function calcularConsumo(distancia: number, combustivel: number): number {
    return distancia / combustivel
}

function calcularAutonomia(consumo: number, tanque: number): number {
    return consumo * tanque
}

let distancia = Number(prompt("Digite a distância percorrida (km): "))
let combustivel = Number(prompt("Digite o combustível gasto (litros): "))
let tanque = Number(prompt("Digite a capacidade do tanque (litros): "))

let consumoMedio = calcularConsumo(distancia, combustivel)
let autonomia = calcularAutonomia(consumoMedio, tanque)

console.log("Consumo médio:"+ consumoMedio.toFixed(2)+ "km/l")
console.log("Autonomia do carro:"+ autonomia.toFixed(2)+ "km")