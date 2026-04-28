// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

let totalSalarios: number = 0
let maiorSalario: number = 0
let nomeMaiorSalario: String = ""

let homens = 0
let mulheres = 0
let totalPessoas = 0

let continuar = "S"

while (continuar === "S") {

    let nome = prompt("Digite o nome: ")
    let horas = Number(prompt("Horas trabalhadas: "))
    let valorHora = Number(prompt("Salário por hora: "))
    let sexo = prompt("Sexo (M/F): ")

    let salario = horas * valorHora

    totalSalarios += salario

    if (salario > maiorSalario) {
        maiorSalario = salario
        nomeMaiorSalario = nome!
    }

    if (sexo === "M") {
        homens++
    } else if (sexo === "F") {
        mulheres++
    }

    totalPessoas++

    continuar = prompt("Deseja continuar? (S/N):")!.toUpperCase()
}