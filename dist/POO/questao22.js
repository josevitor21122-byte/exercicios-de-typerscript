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
    class Veiculo {
        constructor(placa, quilometragemAtual, kmUltimaRevisao) {
            this.placa = placa;
            this.quilometragemAtual = quilometragemAtual;
            this.kmUltimaRevisao = kmUltimaRevisao;
        }
        mostrarPlaca() { return this.placa; }
        atualizarQuilometragem(novaKm) { this.quilometragemAtual = novaKm; }
        mostrarQuilometragem() { return this.quilometragemAtual; }
        mostrarKmUltimaRevisao() { return this.kmUltimaRevisao; }
    }
    class Onibus extends Veiculo {
        getIntervalo() { return 10000; }
        getTipo() { return "Onibus"; }
        precisaRevisao() {
            return (this.quilometragemAtual - this.kmUltimaRevisao) >= this.getIntervalo();
        }
    }
    class Ambulancia extends Veiculo {
        getIntervalo() { return 5000; }
        getTipo() { return "Ambulancia"; }
        precisaRevisao() {
            return (this.quilometragemAtual - this.kmUltimaRevisao) >= this.getIntervalo();
        }
    }
    let qtd = Number(prompt("Digite a quantidade de veiculos da frota") || "0");
    let frota = [];
    for (let i = 0; i < qtd; i++) {
        let tipo = Number(prompt(`Veiculo ${i + 1} - Digite 1 para Onibus e 2 para Ambulancia`) || "1");
        let placa = String(prompt(`Digite a placa do veiculo ${i + 1}`) || "");
        let kmAtual = Number(prompt(`Digite a quilometragem atual do veiculo ${placa}`) || "0");
        let kmUltimaRevisao = Number(prompt(`Digite a quilometragem da ultima revisao do veiculo ${placa}`) || "0");
        if (tipo === 1) {
            frota.push(new Onibus(placa, kmAtual, kmUltimaRevisao));
        }
        else {
            frota.push(new Ambulancia(placa, kmAtual, kmUltimaRevisao));
        }
    }
    let placaBusca = String(prompt("Mecanico - Digite a placa do veiculo para verificar") || "");
    let kmInformada = Number(prompt(`Digite a quilometragem atual do veiculo ${placaBusca}`) || "0");
    let indiceEncontrado = -1;
    for (let i = 0; i < frota.length; i++) {
        if (frota[i].mostrarPlaca() === placaBusca) {
            indiceEncontrado = i;
        }
    }
    if (indiceEncontrado === -1) {
        console.log(`Veiculo com placa ${placaBusca} nao encontrado na frota`);
        alert(`Veiculo com placa ${placaBusca} nao encontrado na frota`);
    }
    else {
        let veiculo = frota[indiceEncontrado];
        veiculo.atualizarQuilometragem(kmInformada);
        let rodado = veiculo.mostrarQuilometragem() - veiculo.mostrarKmUltimaRevisao();
        console.log(`Veiculo: ${veiculo.getTipo()} - Placa ${veiculo.mostrarPlaca()}`);
        console.log(`Rodado desde a ultima revisao: ${rodado} km`);
        if (veiculo.precisaRevisao()) {
            console.log(`O veiculo ${veiculo.mostrarPlaca()} PRECISA ser retido para manutencao imediata`);
            alert(`ATENCAO: O veiculo ${veiculo.mostrarPlaca()} PRECISA ser retido para manutencao imediata`);
        }
        else {
            console.log(`O veiculo ${veiculo.mostrarPlaca()} NAO precisa de manutencao`);
            alert(`LIBERADO: O veiculo ${veiculo.mostrarPlaca()} NAO precisa de manutencao`);
        }
    }
}
