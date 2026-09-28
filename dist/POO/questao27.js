// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.
export function executarQuestao27() {
    class EquipamentoTI {
        constructor(tombamento, descricao) {
            this.tombamento = tombamento;
            this.descricao = descricao;
        }
        getTombamento() {
            return this.tombamento;
        }
        getDescricao() {
            return this.descricao;
        }
    }
    class Computador extends EquipamentoTI {
        constructor(tombamento, descricao, memoriaRam) {
            super(tombamento, descricao);
            this.memoriaRam = memoriaRam;
        }
        autoInspecao() {
            console.log(`Tombamento: ${this.getTombamento()} | Descrição: ${this.getDescricao()} | Memória RAM: ${this.memoriaRam}`);
        }
    }
    class Roteador extends EquipamentoTI {
        constructor(tombamento, descricao, quantidadePortas) {
            super(tombamento, descricao);
            this.quantidadePortas = quantidadePortas;
        }
        autoInspecao() {
            console.log(`Tombamento: ${this.getTombamento()} | Descrição: ${this.getDescricao()} | Portas Disponíveis: ${this.quantidadePortas}`);
        }
    }
    let equipamentos = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de equipamento: | 1 - Computador | 2 - Roteador"));
        let tombamento = String(prompt("Informe o número de tombamento: "));
        let descricao = String(prompt("Informe a descrição do equipamento: "));
        if (tipo === "1") {
            let memoriaRam = Number(prompt("Informe a quantidade de memória RAM : "));
            equipamentos.push(new Computador(tombamento, descricao, memoriaRam));
        }
        else {
            let quantidadePortas = Number(prompt("Informe a quantidade de portas disponíveis: "));
            equipamentos.push(new Roteador(tombamento, descricao, quantidadePortas));
        }
        continuar = String(prompt("Deseja cadastrar outro equipamento (sim/não): "));
    }
    if (equipamentos.length === 0) {
        console.log("Nenhum equipamento foi catalogado no inventário");
    }
    else {
        for (let i = 0; i < equipamentos.length; i++) {
            equipamentos[i].autoInspecao();
        }
    }
}
