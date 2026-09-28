// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

export function executarQuestao22(): void {

    abstract class VeiculoFrota {
        private placa: string
        protected quilometragemAtual: number

        constructor(placa: string, quilometragemAtual: number) {
            this.placa = placa
            this.quilometragemAtual = quilometragemAtual
        }

        getPlaca(): string {
            return this.placa
        }

        getQuilometragemAtual(): number {
            return this.quilometragemAtual
        }

        abstract verificarManutencao(): boolean
        abstract obterTipo(): string
    }

    class Onibus extends VeiculoFrota {

        constructor(placa: string, quilometragemAtual: number) {
            super(placa, quilometragemAtual)
        }

        verificarManutencao(): boolean {
            return this.quilometragemAtual >= 10000
        }

        obterTipo(): string {
            return "Ônibus"
        }
    }

    class Ambulancia extends VeiculoFrota {

        constructor(placa: string, quilometragemAtual: number) {
            super(placa, quilometragemAtual)
        }

        verificarManutencao(): boolean {
            return this.quilometragemAtual >= 5000
        }

        obterTipo(): string {
            return "Ambulância"
        }
    }

    let veiculos: VeiculoFrota[] = []
    let continuarCadastro = "sim"

    while (continuarCadastro === "sim") {

        let tipo = String(prompt("Escolha o tipo de veículo: | 1 - Ônibus | 2 - Ambulância "))
        let placa = String(prompt("Informe a placa do veículo: "))
        let quilometragem = Number(prompt("Informe a quilometragem atual do veículo: "))

        let veiculo: VeiculoFrota

        if (tipo === "1") {
            veiculo = new Onibus(placa, quilometragem)
        } else {
            veiculo = new Ambulancia(placa, quilometragem)
        }

        veiculos.push(veiculo)

        continuarCadastro = String(prompt("Deseja cadastrar outro veículo (sim/não): "))
    }

    if (veiculos.length === 0) {
        console.log("Nenhum veículo foi cadastrado na frota")
    } else {
        let continuarConsulta = "sim"

        while (continuarConsulta === "sim") {
            let placaBusca = String(prompt("Informe a placa do veículo que deseja consultar para manutenção: "))
            let encontrou = false

            for (let i = 0; i < veiculos.length; i++) {
                if (veiculos[i].getPlaca() === placaBusca) {
                    let veiculoEncontrado = veiculos[i]
                    encontrou = true

                    console.log(`Placa ${veiculoEncontrado.getPlaca()} | Tipo: ${veiculoEncontrado.obterTipo()} | Quilometragem: ${veiculoEncontrado.getQuilometragemAtual()}`)
                    
                    if (veiculoEncontrado.verificarManutencao()) {
                        console.log("Este veículo precisa ser retido")
                    } else {
                        console.log("Este veículo não precisa de manutenção.")
                    }
                    break
                }
            }

            if (encontrou) {
                console.log("Nenhum veículo foi encontrado com essa placa.")
            }
            continuarConsulta = String(prompt("Deseja consultar outro veículo (sim/não): "))
        }
    }
}