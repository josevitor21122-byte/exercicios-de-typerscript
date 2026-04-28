// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;
//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

function calcular_imc(peso: number, altura: number): number {
    return peso / (altura * altura)
}

function classificar_imc(valor_imc: number): string {

    if (valor_imc < 18.5) {
        return "Abaixo do peso"
    } else if (valor_imc < 25) {
        return "Peso Normal"
    } else {
        return "Sobrepeso"
    }
}

function exibir_laudo(nome: string, classificacao: string): void {
    console.log("Paciente: " + nome + " - Status: " + classificacao)
}

let nome = prompt("Digite seu nome:")
let peso = Number(prompt("Digite seu peso (kg):"))
let altura = Number(prompt("Digite sua altura (m):"))

let imc = calcular_imc(peso, altura)
let classificacao = classificar_imc(imc)

exibir_laudo(nome!, classificacao)
console.log("IMC:", imc.toFixed(2))