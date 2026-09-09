// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function executarQuestao5(): void {
    class Pessoa {
        private nome: string
        private idade: number
        private peso: number
        private altura: number 

        constructor(nome: string, idade: number, peso: number, altura: number) {
            this.nome = nome
            this.idade = idade
            this.peso = peso
            this.altura = altura
        }

        envelhecer(): void {
            if (this.idade < 21) {
                this.crescer(0.5)
            }
            this.idade += 1
        }

        engordar(pesoKg: number): void {
            this.peso += pesoKg;
        }

        emagrecer(pesoKg: number): void {
            this.peso -= pesoKg;
        }

        crescer(alturaCm: number): void {
            this.altura += alturaCm;
        }

        exibir(): void {
            console.log(`Nome: ${this.nome} | Idade: ${this.idade} anos | Peso: ${this.peso}kg | Altura: ${this.altura}cm`)
        }
    }

    let novaPessoa = new Pessoa("Carlos", 18, 70, 175);
    
    novaPessoa.exibir()
    novaPessoa.envelhecer()
    novaPessoa.engordar(3)  
    novaPessoa.exibir()
}
