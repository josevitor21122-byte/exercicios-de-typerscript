// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.

export function executarQuestao27(): void {
    abstract class Equipamento {
        protected numeroTombamento: number
        protected descricao: string

        constructor(numeroTombamento: number, descricao: string) {
            this.numeroTombamento = numeroTombamento
            this.descricao = descricao
        }

        abstract autoInspecao(): void
    }

    class Computador extends Equipamento {

        private memoriaRAM: number

        constructor(numeroTombamento: number,descricao: string, memoriaRAM: number) {
            super(numeroTombamento, descricao)
            this.memoriaRAM = memoriaRAM
        }

        autoInspecao(): void {
            console.log(`Número de tombamento: ${this.numeroTombamento}`)
            console.log(`Descrição: ${this.descricao}`)
            console.log(`Memória RAM: ${this.memoriaRAM} GB`)
            console.log("Equipamento inspecionado com sucesso!")
        }
    }


    class Roteador extends Equipamento {

        private quantidadePortas: number

        constructor(numeroTombamento: number,descricao: string,quantidadePortas: number) {
            super(numeroTombamento, descricao)
            this.quantidadePortas = quantidadePortas
        }

        autoInspecao(): void {
            console.log(`Número de tombamento: ${this.numeroTombamento}`)
            console.log(`Descrição: ${this.descricao}`)
            console.log(`Quantidade de portas: ${this.quantidadePortas}`)
            console.log("Equipamento inspecionado com sucesso!")
        }
    }

    let equipamentos: Equipamento[] = []

    let opcao = -1
    while (opcao !== 0) {

        opcao = Number(
            prompt("1 - Cadastrar Computador" + "2 - Cadastrar Roteador" +"3 - Realizar auto-inspeção" + "0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {
            let numeroTombamento = Number(prompt("Informe o número de tombamento:"))

            while (numeroTombamento <= 0 || numeroTombamento % 1 !== 0) {
                console.log("Número de tombamento inválido!")

                numeroTombamento = Number(prompt("Informe um número de tombamento válido:"))
            }

            let descricao = String(prompt("Informe a descrição do computador:"))

            while (descricao.trim() === "") {

                console.log("A descrição não pode ser vazia!")
                descricao = String(prompt("Informe uma descrição válida:"))
            }

            let memoriaRAM = Number(prompt("Informe a quantidade de memória RAM em GB:"))

            while (memoriaRAM <= 0) {
                console.log("Quantidade de memória RAM inválida!")
                memoriaRAM = Number(prompt("Informe uma quantidade válida de memória RAM:"))
            }

            let computador = new Computador(numeroTombamento,descricao,memoriaRAM)

            equipamentos.push(computador)
            console.log("Computador cadastrado com sucesso!")
        }


        else if (opcao === 2) {

            let numeroTombamento = Number(prompt("Informe o número de tombamento:"))

            while (numeroTombamento <= 0 || numeroTombamento % 1 !== 0) {
                console.log("Número de tombamento inválido!")

                numeroTombamento = Number(prompt("Informe um número de tombamento válido:"))
            }

            let descricao = String(prompt("Informe a descrição do roteador:"))

            while (descricao.trim() === "") {

                console.log("A descrição não pode ser vazia!")
                descricao = String(prompt("Informe uma descrição válida:"))
            }

            let quantidadePortas = Number(prompt("Informe a quantidade de portas disponíveis:"))

            while (quantidadePortas <= 0 || quantidadePortas % 1 !== 0) {

                console.log("Quantidade de portas inválida!")
                quantidadePortas = Number(prompt("Informe uma quantidade válida de portas:"))
            }


            let roteador = new Roteador(numeroTombamento,descricao,quantidadePortas)

            equipamentos.push(roteador)
            console.log("Roteador cadastrado com sucesso!")

        } else if (opcao === 3) {

            if (equipamentos.length === 0) {
                console.log("Nenhum equipamento foi cadastrado!")
            } else {

                for (let equipamento of equipamentos) {
                    equipamento.autoInspecao()
                }
            }
        } else if (opcao === 0) {
            console.log("Programa encerrado!")
        } else {
            console.log("Opção inválida!")
        }
    }
}