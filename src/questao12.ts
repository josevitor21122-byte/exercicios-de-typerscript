// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

function calcularNotas(valor: number): void {

    let notas50 = 0
    let notas20 = 0
    let notas10 = 0

    while (valor >= 50) {
        valor -= 50
        notas50++
    }

    while (valor >= 20) {
        valor -= 20
        notas20++
    }

    while (valor >= 10) {
        valor -= 10
        notas10++
    }

    console.log("Notas de 50: "+ notas50)
    console.log("Notas de 20: "+ notas20)
    console.log("Notas de 10: "+ notas10)
}