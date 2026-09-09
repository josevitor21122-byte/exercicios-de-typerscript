// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.
export function executarQuestao5() {
    class Pessoa {
        constructor(nome, idade, peso, altura) {
            this.nome = nome;
            this.idade = idade;
            this.peso = peso;
            this.altura = altura;
        }
        envelhecer() {
            if (this.idade < 21) {
                this.crescer(0.5);
            }
            this.idade += 1;
        }
        engordar(pesoKg) {
            this.peso += pesoKg;
        }
        emagrecer(pesoKg) {
            this.peso -= pesoKg;
        }
        crescer(alturaCm) {
            this.altura += alturaCm;
        }
        exibir() {
            console.log(`Nome: ${this.nome} | Idade: ${this.idade} anos | Peso: ${this.peso}kg | Altura: ${this.altura}cm`);
        }
    }
    let novaPessoa = new Pessoa("Carlos", 18, 70, 175);
    novaPessoa.exibir();
    novaPessoa.envelhecer();
    novaPessoa.engordar(3);
    novaPessoa.exibir();
}
