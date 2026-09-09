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
        this.idade + 1
        if(this.idade > 21) {
            
        }
    }
}
}