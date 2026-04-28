// 9. Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.
//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.
// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

function solicitar_renda_mensal(): number {
    let renda = 0

    while (renda <= 0) {
        renda = Number(prompt("Digite sua renda mensal:"))

        if (renda <= 0) {
            console.log("Valor inválido! Digite novamente.")
        }
    }

    return renda
}

function analisar_credito(renda: number, valor_parcela: number): boolean {

    let limite = renda * 0.30

    if (renda > 5000) {
        limite += 500
    }

    if (valor_parcela <= limite) {
        return true
    } else {
        return false
    }
}

function exibir_status(resultado: boolean): void {

    if (resultado) {
        console.log("Crédito Aprovado")
    } else {
        console.log("Crédito Negado")
    }
}

let renda = solicitar_renda_mensal()
let parcela = Number(prompt("Digite o valor da parcela:"))

let resultado = analisar_credito(renda, parcela)

exibir_status(resultado)