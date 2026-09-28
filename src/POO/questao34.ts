// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.

export function executarQuestao34(): void {

    abstract class Veiculo {
        private placa: string
        private horaEntrada: string

        constructor(placa: string, horaEntrada: string) {
            this.placa = placa
            this.horaEntrada = horaEntrada
        }

        getPlaca(): string {
            return this.placa
        }

        getHoraEntrada(): string {
            return this.horaEntrada
        }

        abstract calcularValor(horasPermanencia: number): number
    }

    class Carro extends Veiculo {

        constructor(placa: string, horaEntrada: string) {
            super(placa, horaEntrada)
        }

        calcularValor(horasPermanencia: number): number {
            return horasPermanencia * 5.00
        }
    }

    class Moto extends Veiculo {

        constructor(placa: string, horaEntrada: string) {
            super(placa, horaEntrada)
        }

        calcularValor(horasPermanencia: number): number {
            return horasPermanencia * 3.00
        }
    }

    let veiculos: Veiculo[] = []
    let horasPermanencias: number[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de veículo: | 1 - Carro (R$ 5,00/h) | 2 - Moto (R$ 3,00/h)"))
        let placa = String(prompt("Informe a placa do veículo: "))
        let horaEntrada = String(prompt("Informe a hora de entrada: "))
        let horasPermanencia = Number(prompt("Informe a quantidade de horas que permaneceu: "))

        let veiculo: Veiculo

        if (tipo === "1") {
            veiculo = new Carro(placa, horaEntrada)
        } else {
            veiculo = new Moto(placa, horaEntrada)
        }

        veiculos.push(veiculo)
        horasPermanencias.push(horasPermanencia)

        continuar = String(prompt("Deseja cadastrar outro veículo (sim/não): "))
    }

    if (veiculos.length === 0) {
        console.log("Nenhum veículo foi cadastrado")
    } else {
        let faturamentoTotal = 0

        for (let i = 0; i < veiculos.length; i++) {
            let v = veiculos[i]
            let horas = horasPermanencias[i]
            let valorVeiculo = v.calcularValor(horas)
            faturamentoTotal += valorVeiculo

            console.log(`Placa: ${v.getPlaca()} | Entrada: ${v.getHoraEntrada()} | Valor: R$ ${valorVeiculo}`)
        }
        console.log(`Faturamento Total Arrecadado no Dia: R$ ${faturamentoTotal}`)
    }
}