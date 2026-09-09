// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function executarQuestao4(): void {
    class Retangulo {
        private _base: number
        private _altura: number

        constructor(base: number, altura: number) {
            this._base = base
            this._altura = altura
        }

        public mudarLados(novaBase: number, novaAltura: number): void {
            if (novaBase <= 0 || novaAltura <= 0) {
                console.log("Os lados devem ser maiores que zero.")
                return
            }
            this._base = novaBase
            this._altura = novaAltura
        }

        public retornarBase(): number {
            return this._base
        }

        public retornarAltura(): number {
            return this._altura
        }

        public calcularArea(): number {
            return this._base * this._altura
        }

        public calcularPerimetro(): number {
            return 2 * (this._base + this._altura)
        }
    }

    let comprimento = Number(prompt("Digite o comprimento do local (em metros): "))
    let largura = Number(prompt("Digite a largura do local (em metros): "))

    let local = new Retangulo(comprimento, largura)

    let pisos = local.calcularArea()
    
    let rodapes = local.calcularPerimetro()

    console.log(`Quantidade de pisos necessários: ${pisos}`)
    console.log(`Quantidade de rodapés necessários: ${rodapes}`)
}
