// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.

export function executarQuestao42(): void {

    class Medicamento {
        private nome: string
        private lote: string
        private preco: number
        private quantidadeEstoque: number

        constructor(nome: string, lote: string, preco: number, quantidadeEstoque: number) {
            this.nome = nome
            this.lote = lote
            this.preco = preco
            this.quantidadeEstoque = 0
        }

        getNome(): string {
            return this.nome
        }

        getLote(): string {
            return this.lote
        }

        getPreco(): number {
            return this.preco
        }

        getQuantidadeEstoque(): number {
            return this.quantidadeEstoque
        }

        setQuantidadeEstoque(valor: number): void {
            if (valor >= 0) {
                this.quantidadeEstoque = valor
            } else {
                console.log("Quantidade em estoque não pode ser negativa.")
                this.quantidadeEstoque = 0
            }
        }
    }

    let medicamentos: Medicamento[] = []
    let continuar = "sim"

    while (continuar === "sim" && medicamentos.length < 10) {
        let nome = String(prompt("Informe o nome do medicamento: "))
        let lote = String(prompt("Informe o lote do medicamento: "))
        let preco = Number(prompt("Informe o preço do medicamento: "))
        let quantidadeEstoque = Number(prompt("Informe a quantidade em estoque: "))

        medicamentos.push(new Medicamento(nome, lote, preco, quantidadeEstoque))

        if (medicamentos.length < 10) {
            continuar = String(prompt("Deseja cadastrar outro medicamento (sim/não): "))
        } else {
            console.log("Limite máximo de 10 medicamentos atingido.")
        }
    }

    if (medicamentos.length === 0) {
        console.log("Nenhum medicamento foi cadastrado!")
    } else {
        let encontrouCritico = false

        for (let i = 0; i < medicamentos.length; i++) {
            let med = medicamentos[i]

            if (med.getQuantidadeEstoque() < 5) {
                console.log(`Nome: ${med.getNome()} | Quantidade Restante: ${med.getQuantidadeEstoque()}`)
                encontrouCritico = true
            }
        }

        if (encontrouCritico) {
            console.log("Nenhum medicamento está com estoque crítico.")
        }
    }
}