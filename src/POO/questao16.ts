// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação (ex: &quot;Carnívoro&quot;, &quot;Herbívoro”, ...). Para as aves precisa-se saber
// se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.
// O Método &quot;Hora da Alimentação&quot; (Rotina Polimórfica): Crie uma função ou método executável
// chamado simularHoraAlimentacao(listaAnimais: Animal[]). Esse método deve percorrer o array de
// animais com um laço de repetição, imprimindo o nome do animal sendo alimentado pelo tratador e
// acionando o seu método emitirSom()
// Fluxo do Programa: O sistema deve cadastrar vários animais, listar por tipo (Mamíferos ou Aves) e
// ao final a disparar a rotina simularHoraAlimentacao() chamando o método de som de cada um.

export function executarQuestao16(): void {
class Animal {
    protected nome: string
    protected especie: string
    protected idade: number
    protected tipo: string

    constructor(nome: string, especie: string, idade: number, tipo: string) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.tipo = tipo
    }

    public getNome(): string {
        return this.nome
    }

    public getTipo(): string {
        return this.tipo
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
        super(nome, especie, idade, "M")
        this.tipoAlimentacao = tipoAlimentacao
    }

    emitirSom(): void {
        console.log(`${this.nome} faz: Rooooar`)
    }

    exibirDados(): void {
        super.exibirDados()
        console.log(`Alimentação: ${this.tipoAlimentacao}`)
    }
}

class Ave extends Animal {
    private migratoria: boolean

    constructor(nome: string, especie: string, idade: number, migratoria: boolean) {
        super(nome, especie, idade, "A")
        this.migratoria = migratoria
    }

    emitirSom(): void {
        console.log(`${this.nome} faz: Piu Piu`)
    }

    exibirDados(): void {
        super.exibirDados()
        let textoMigratoria = this.migratoria ? "Sim" : "Não";
        console.log(`Migratória: ${textoMigratoria}`)
    }
}

let animais: Animal[] = []

let quantidade = Number(prompt("Quantos animais deseja cadastrar? "))

for (let i = 0; i < quantidade; i++) {
    let tipoDigitado = String(prompt("Digite M para Mamífero ou A para Ave: "))
    let nome = String(prompt("Nome: "))
    let especie = String(prompt("Espécie: "))
    let idade = Number(prompt("Idade: "))

    if (tipoDigitado === "M") {

        let alimentacao = String(prompt("Tipo de alimentação: "))
        animais.push(new Mamifero(nome, especie, idade, alimentacao))

    } else if (tipoDigitado === "A") {

        let respostaMigratoria = String(prompt("É migratória? (S/N): "))
        let migratoria = respostaMigratoria === "S"
        animais.push(new Ave(nome, especie, idade, migratoria))

    } else {
        console.log("Tipo inválido! ")
    }
}

for (let animal of animais) {
    if (animal.getTipo() === "M") {
        animal.exibirDados()
    }
}

for (let animal of animais) {
    if (animal.getTipo() === "A") {
        animal.exibirDados()
    }
}

for (let animal of animais) {
    console.log(`O tratador está alimentando o(a) ${animal.getNome()}`)
    animal.emitirSom()
}
}