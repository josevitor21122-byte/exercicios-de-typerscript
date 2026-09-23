// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.
export function executarQuestao27() {
    class Equipamento {
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
    class Computador extends Equipamento {
        constructor(tombamento, descricao, memoriaRAM) {
            super(tombamento, descricao);
            this.memoriaRAM = memoriaRAM;
        }
        autoInspecao() {
            console.log(`Número de tombamento: ${this.getTombamento()}`);
            console.log(`Descrição: ${this.getDescricao()}`);
            console.log(`Memória RAM: ${this.memoriaRAM}`);
            console.log(`Tipo: `);
        }
    }
    class Roteador extends Equipamento {
        constructor(tombamento, descricao, portas) {
            super(tombamento, descricao);
            this.portas = portas;
        }
        autoInspecao() {
            console.log(`Número de tombamento: ${this.getTombamento()}`);
            console.log(`Descrição: ${this.getDescricao()}`);
            console.log(`Quantidade de portas: ${this.portas}`);
            console.log(`Tipo: Roteador`);
        }
    }
    let equipamentos = [];
    let opcao = 0;
    while (opcao !== 3) {
        console.log(`1 - Cadastrar computador`);
        console.log(`2 - Cadastrar roteador`);
        console.log(`3 - Finalizar cadastro`);
        opcao = Number(prompt(`Digite uma opção: `));
        if (opcao === 1) {
            let tombamento = Number(prompt(`Digite o número de tombamento: `));
            while (tombamento <= 0 || (tombamento)) {
                console.log(`Número de tombamento inválido.`);
                tombamento = Number(prompt(`Digite um número de tombamento válido: `));
            }
            let descricao = String(prompt(`Digite a descrição do computador: `));
            while (descricao.trim() === "") {
                console.log(`A descrição não pode ser vazia.`);
                descricao = String(prompt(`Digite uma descrição válida: `));
            }
            let memoriaRAM = Number(prompt(`Digite a quantidade de memória RAM em GB: `));
            while (memoriaRAM <= 0 || (memoriaRAM)) {
                console.log(`Quantidade de memória RAM inválida.`);
                memoriaRAM = Number(prompt(`Digite uma quantidade válida de memória RAM: `));
            }
            let computador = new Computador(tombamento, descricao, memoriaRAM);
            equipamentos.push(computador);
            console.log(`Computador cadastrado com sucesso!`);
        }
        else if (opcao === 2) {
            let tombamento = Number(prompt(`Digite o número de tombamento: `));
            while (tombamento <= 0 || (tombamento)) {
                console.log(`Número de tombamento inválido.`);
                tombamento = Number(prompt(`Digite um número de tombamento válido: `));
            }
            let descricao = String(prompt(`Digite a descrição do roteador: `));
            while (descricao.trim() === "") {
                console.log(`A descrição não pode ser vazia.`);
                descricao = String(prompt(`Digite uma descrição válida: `));
            }
            let portas = Number(prompt(`Digite a quantidade de portas: `));
            while (portas <= 0 || (portas)) {
                console.log(`Quantidade de portas inválida.`);
                portas = Number(prompt(`Digite uma quantidade válida de portas: `));
            }
            let roteador = new Roteador(tombamento, descricao, portas);
            equipamentos.push(roteador);
            console.log(`Roteador cadastrado com sucesso!`);
        }
        else if (opcao === 3) {
            if (equipamentos.length === 0) {
                console.log(`Nenhum equipamento foi cadastrado.`);
            }
            else {
                for (let i = 0; i < equipamentos.length; i++) {
                    equipamentos[i].autoInspecao();
                }
            }
        }
        else {
            console.log(`Opção inválida.`);
        }
    }
}
