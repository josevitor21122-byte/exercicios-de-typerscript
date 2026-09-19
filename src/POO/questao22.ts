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
class Veiculo {
    private _placa: string
    private _quilometragem: number
    protected tipo: string

    constructor(placa: string, quilometragem: number, tipo: string) {
        this._placa = placa
        this._quilometragem = quilometragem
        this.tipo = tipo
    }

    public getPlaca(): string { 
        return this._placa
    }
    public getQuilometragem(): number { 
        return this._quilometragem 
    }
    public getTipo(): string { 
        return this.tipo 
    }

    public setPlaca(placa: string): void { 
        this._placa = placa 
    }
    public setQuilometragem(km: number): void { 
        this._quilometragem = km 
    }

    public precisaDeRevisao(quilometragemAtual: number): boolean {
        return false
    }
}

class Onibus extends Veiculo {
    constructor(placa: string, quilometragem: number) {
        super(placa, quilometragem, "O")
    }

    public precisaDeRevisao(quilometragemAtual: number): boolean {
        let diferencaKm = quilometragemAtual - this.getQuilometragem()
        return diferencaKm >= 10000
    }
}

class Ambulancia extends Veiculo {
    constructor(placa: string, quilometragem: number) {
        super(placa, quilometragem, "A")
    }

    public precisaDeRevisao(quilometragemAtual: number): boolean {
        let diferencaKm = quilometragemAtual - this.getQuilometragem()
        return diferencaKm >= 5000
    }
}

let frotaVeiculos: Veiculo[] = []
let continuarCadastro = true

while (continuarCadastro) {
    let opcao = String(prompt("Oficina de Frota - Cadastro igite: O - Cadastrar Ônibus A - Cadastrar Ambulância F - Finalizar Cadastros Opção: "))

    if (opcao === "F") {
        continuarCadastro = false

    } else if (opcao === "O" || opcao === "A") {
        let placa = String(prompt("Digite a placa do veículo: "))
        let quilometragem = Number(prompt("Digite a quilometragem da última revisão realizada: "))

        if (opcao === "O") {
            let novoOnibus = new Onibus(placa, quilometragem)
            frotaVeiculos.push(novoOnibus)
            console.log(`Ônibus de placa: ${placa}`)

        } else if (opcao === "A") {
            let novaAmbulancia = new Ambulancia(placa, quilometragem)
            frotaVeiculos.push(novaAmbulancia)
            console.log(`Ambulância de placa [${placa}] adicionada à frota!`)
        }

    } else {
        console.log("Opção inválida!")
    }
}

let placaBusca = String(prompt("Mecânico, digite a placa do veículo que deseja avaliar: "))
let kmAtualDigitada = Number(prompt(`Digite a quilometragem atual medida no odômetro para o veículo: ${placaBusca}`))

let veiculoEncontrado = false

for (let i = 0; i < frotaVeiculos.length; i++) {
    let veiculoAtual = frotaVeiculos[i]

    if (veiculoAtual.getPlaca() === placaBusca) {
        veiculoEncontrado = true
        
        console.log(`Veículo Localizado: Placa: ${veiculoAtual.getPlaca()}`)
        console.log(`Tipo de veículo: ${veiculoAtual.getTipo()}`)
        console.log(`Quilometragem da última revisão: ${veiculoAtual.getQuilometragem()}`)
        console.log(`Quilometragem atual informada: ${kmAtualDigitada}`)

        if (veiculoAtual.precisaDeRevisao(kmAtualDigitada)) {
            console.log("Atenção!")
        } else {
            console.log("Status seguro.");
        }
    }
}

if (!veiculoEncontrado) {
    console.log(`ERRO: O veículo com a placa ${placaBusca}`)
}
}