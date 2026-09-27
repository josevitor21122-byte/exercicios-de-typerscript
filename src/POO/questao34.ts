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

    let opcao = -1

    while (opcao !== 0) {
        opcao = Number(prompt("1 - Cadastrar Saída de Carro (R$ 5,00/h)" + "2 - Cadastrar Saída de Moto (R$ 3,00/h)" + "3 - Exibir faturamento total do dia" + "0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {

            let placa = String(prompt("Informe a placa do carro:"))

            while (placa === "") {
                console.log("A placa não pode ser vazia!")
                placa = String(prompt("Informe uma placa válida:"))
            }

            let horaEntrada = String(prompt("Informe a hora de entrada do carro (ex: 08:00):"))

            while (horaEntrada === "") {
                console.log("A hora de entrada não pode ser vazia!")
                horaEntrada = String(prompt("Informe uma hora de entrada válida:"))
            }

            let horasPermanencia = Number(prompt("Informe a quantidade de horas que permaneceu:"))

            while (horasPermanencia <= 0) {

                console.log("Quantidade de horas inválida!")
                horasPermanencia = Number(prompt("Informe uma quantidade de horas válida:"))
            }

            let carro = new Carro(placa, horaEntrada)

            veiculos.push(carro)
            horasPermanencias.push(horasPermanencia)

            console.log("Carro cadastrado com sucesso!")
        } else if (opcao === 2) {

            let placa = String(prompt("Informe a placa da moto:"))

            while (placa === "") {
                console.log("A placa não pode ser vazia!")
                placa = String(prompt("Informe uma placa válida:"))
            }


            let horaEntrada = String(prompt("Informe a hora de entrada da moto (ex: 09:30):"))

            while (horaEntrada === "") {
                console.log("A hora de entrada não pode ser vazia!")
                horaEntrada = String(prompt("Informe uma hora de entrada válida:"))
            }

            let horasPermanencia = Number(prompt("Informe a quantidade de horas que permaneceu:"))

            while (horasPermanencia <= 0) {
                console.log("Quantidade de horas inválida!")
                horasPermanencia = Number(prompt("Informe uma quantidade de horas válida:"))
            }

            let moto = new Moto(placa, horaEntrada)

            veiculos.push(moto)
            horasPermanencias.push(horasPermanencia)

            console.log("Moto cadastrada com sucesso!")

        } else if (opcao === 3) {

            if (veiculos.length === 0) {

                console.log("Nenhum veículo foi cadastrado!")

            } else {

                let faturamentoTotal = 0

                for (let i = 0; i < veiculos.length; i++) {
                    let veiculo = veiculos[i]
                    let horas = horasPermanencias[i]

                    let valorVeiculo = veiculo.calcularValor(horas)
                    faturamentoTotal = faturamentoTotal + valorVeiculo

                    console.log(`Placa: ${veiculo.getPlaca()} | Entrada: ${veiculo.getHoraEntrada()} | Valor: R$ ${valorVeiculo.toFixed(2)}`)
                }
                console.log(`Faturamento Total Arrecadado: R$ ${faturamentoTotal.toFixed(2)}`)
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")
        } else {
            console.log("Opção inválida!")
        }
    }
}