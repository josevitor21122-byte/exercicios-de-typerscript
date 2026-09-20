// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.
export function executarQuestao12() {
    class Carro {
        constructor(modelo, diaria, dias) {
            this.modelo = modelo;
            this.diaria = diaria;
            this.dias = dias;
        }
        calcularTotal() {
            return this.diaria * this.dias;
        }
        exibirResumo() {
            console.log(`Modelo: ${this.modelo}`);
            console.log(`Valor da diária: R$ ${this.diaria}`);
            console.log(`Quantidade de dias: ${this.dias}`);
            console.log(`Valor total: R$ ${this.calcularTotal()}`);
        }
    }
    let continuar = "sim";
    while (continuar == "sim") {
        let modelo = String(prompt("Digite o modelo do carro: "));
        let diaria = Number(prompt("Digite o valor da diária: "));
        let dias = Number(prompt("Digite a quantidade de dias: "));
        let carro = new Carro(modelo, diaria, dias);
        carro.exibirResumo();
        continuar = String(prompt("Deseja fazer uma nova locação? (sim/não)"));
    }
}
