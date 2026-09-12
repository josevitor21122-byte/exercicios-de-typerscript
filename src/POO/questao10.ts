// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

export function executarQuestao10(): void {
  class Tamagushi {
    nome: string
    fome: number
    saude: number
    idade: number

    constructor(
        nome: string,
        fome: number,
        saude: number,
        idade: number
    ) {
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }

    alterarNome(nome: string): void {
        this.nome = nome
    }

    alterarFome(fome: number): void {
        this.fome = fome
    }

    alterarSaude(saude: number): void {
        this.saude = saude
    }

    alterarIdade(idade: number): void {
        this.idade = idade
    }

    retornarNome(): string {
        return this.nome
    }

    retornarFome(): number {
        return this.fome
    }

    retornarSaude(): number {
        return this.saude
    }

    retornarIdade(): number {
        return this.idade
    }

    retornarHumor(): number {
        return (this.saude + (100 - this.fome)) / 2
    }
}

let bichinho = new Tamagushi("Amarelinho", 40, 80, 4)

console.log("Nome: ", bichinho.retornarNome())
console.log("Fome: ", bichinho.retornarFome())
console.log("Saúde: ", bichinho.retornarSaude())
console.log("Idade: ", bichinho.retornarIdade())
console.log("Humor: ", bichinho.retornarHumor())
}
