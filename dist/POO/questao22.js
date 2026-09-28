// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.
export function executarQuestao22() {
    class VeiculoFrota {
        constructor(placa, quilometragemAtual) {
            this.placa = placa;
            this.quilometragemAtual = quilometragemAtual;
        }
        getPlaca() {
            return this.placa;
        }
        getQuilometragemAtual() {
            return this.quilometragemAtual;
        }
    }
    class Onibus extends VeiculoFrota {
        constructor(placa, quilometragemAtual) {
            super(placa, quilometragemAtual);
        }
        verificarManutencao() {
            return this.quilometragemAtual >= 10000;
        }
        obterTipo() {
            return "Ônibus";
        }
    }
    class Ambulancia extends VeiculoFrota {
        constructor(placa, quilometragemAtual) {
            super(placa, quilometragemAtual);
        }
        verificarManutencao() {
            return this.quilometragemAtual >= 5000;
        }
        obterTipo() {
            return "Ambulância";
        }
    }
    let veiculos = [];
    let continuarCadastro = "sim";
    while (continuarCadastro === "sim") {
        let tipo = String(prompt("Escolha o tipo de veículo: | 1 - Ônibus | 2 - Ambulância "));
        let placa = String(prompt("Informe a placa do veículo: "));
        let quilometragem = Number(prompt("Informe a quilometragem atual do veículo: "));
        let veiculo;
        if (tipo === "1") {
            veiculo = new Onibus(placa, quilometragem);
        }
        else {
            veiculo = new Ambulancia(placa, quilometragem);
        }
        veiculos.push(veiculo);
        continuarCadastro = String(prompt("Deseja cadastrar outro veículo (sim/não): "));
    }
    if (veiculos.length === 0) {
        console.log("Nenhum veículo foi cadastrado na frota");
    }
    else {
        let continuarConsulta = "sim";
        while (continuarConsulta === "sim") {
            let placaBusca = String(prompt("Informe a placa do veículo que deseja consultar para manutenção: "));
            let encontrou = false;
            for (let i = 0; i < veiculos.length; i++) {
                if (veiculos[i].getPlaca() === placaBusca) {
                    let veiculoEncontrado = veiculos[i];
                    encontrou = true;
                    console.log(`Placa ${veiculoEncontrado.getPlaca()} | Tipo: ${veiculoEncontrado.obterTipo()} | Quilometragem: ${veiculoEncontrado.getQuilometragemAtual()}`);
                    if (veiculoEncontrado.verificarManutencao()) {
                        console.log("Este veículo precisa ser retido");
                    }
                    else {
                        console.log("Este veículo não precisa de manutenção.");
                    }
                    break;
                }
            }
            if (encontrou) {
                console.log("Nenhum veículo foi encontrado com essa placa.");
            }
            continuarConsulta = String(prompt("Deseja consultar outro veículo (sim/não): "));
        }
    }
}
