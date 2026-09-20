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

abstract class Veiculo {
    private placa: string;
    private quilometragem: number;

    constructor(placa: string, quilometragem: number) {
        this.placa = placa;
        this.quilometragem = quilometragem;
    }

    public getPlaca(): string {
        return this.placa
    }

    public getQuilometragem(): number {
        return this.quilometragem
    }

    public setQuilometragem(quilometragem: number): void {
        this.quilometragem = quilometragem
    }

    public abstract precisaRevisao(): boolean
}

class Onibus extends Veiculo {

    public precisaRevisao(): boolean {
        return this.getQuilometragem() % 10000 === 0
    }
}

class Ambulancia extends Veiculo {

    public precisaRevisao(): boolean {
        return this.getQuilometragem() % 5000 === 0
    }
}

    let frota: Veiculo[] = []

    let quantidade = Number(prompt("Digite a quantidade de veículos:"));

    for (let i = 0; i < quantidade; i++) {

        console.log(`Veículo ${i + 1}`)

        let tipo = Number(prompt("Digite 1 para ônibus ou 2 para ambulância:"))

        let placa = String(prompt("Digite a placa:"))

        let quilometragem = Number(prompt("Digite a quilometragem atual: "))

        if (tipo === 1) {
            frota.push(new Onibus(placa, quilometragem))
        } else if (tipo === 2) {
            frota.push(new Ambulancia(placa, quilometragem))
        } else {
            console.log("Tipo de veículo inválido.")
            i--
        }
    }


    let placaConsulta = String(prompt("Digite a placa do veículo que deseja consultar:"))


    let encontrado = false


    for (let veiculo of frota) {

        if (veiculo.getPlaca() === placaConsulta) {
            encontrado = true

            let novaQuilometragem = Number(prompt("Digite a quilometragem atual do veículo: "))

            veiculo.setQuilometragem(novaQuilometragem)


            if (veiculo.precisaRevisao()) {

                console.log(`O veículo ${veiculo.getPlaca()} precisa ser retido para manutenção imediata.`)

            } else {

                console.log(`O veículo ${veiculo.getPlaca()} não precisa ser retido para manutenção.`)
            }

            break
        }
    }


    if (encontrado) {
        console.log("Veículo não encontrado.")
    }
}
