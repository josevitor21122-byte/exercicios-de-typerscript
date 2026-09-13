// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar por tipo
// (Mamíferos ou Aves) e simular a &#39;hora da alimentação&#39; chamando o método de som de cada um.

export function executarQuestao16(): void {
    class Animal {
    protected nome: string
    protected especie: string
    protected idade: number

    constructor(nome: string, especie: string, idade: number) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }

    emitirSom(): void {
        console.log("Som genérico do animal")
    }

    exibirDados(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Espécie: ${this.especie}`)
        console.log(`Idade: ${this.idade}`)
    }
}

class Mamifero extends Animal {
    private tipoAlimentacao: string

    constructor(nome: string, especie: string, idade: number, tipoAlimentacao: string) {
        super(nome, especie, idade)
        this.tipoAlimentacao
    }

    emitirSom(): void {
        console.log(`${this.nome} faz: auauau`)
    }

    exibirDados(): void {
        super.exibirDados()
        console.log(`Migratória: ${this.migratoria}`)
    }
}

let animais: Animal[] = []

let quantidade = Number(prompt("Quantos animais deseja cadastrar? "))

for (let i = 0; i < quantidade; i++) {

    let tipo = String(prompt("Digite M para Mamífero ou A para Ave: "))

    let nome = String(prompt("Nome: "))
    let especie = String(prompt("Espécie: "))
    let idade = Number(prompt("Idade: "))

    if (tipo === "M") {

        let alimentacao = String(prompt("Tipo de alimentação: "))

        animais.push(new Mamifero(nome, especie, idade, alimentacao))

    } else if (tipo === "A") {

        let migratoria = String(prompt("É migratória? (S/N): "))

        animais.push(new Ave(nome, especie, idade, migratoria))
    }
}

for (let animal of animais) {
    animal.exibirDados()
}


for (let animal of animais) {
    animal.emitirSom()
}
}