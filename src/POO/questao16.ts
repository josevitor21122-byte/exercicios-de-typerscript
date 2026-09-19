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

    // SUPERCLASSE ABSTRATA
    abstract class Animal {

        constructor(private _nome: string, private _especie: string, private _idade: number, private _sexo: string) {}

        public get nome(): string {
            return this._nome
        }

        public set nome(value: string) {
            this._nome = value
        }

        public get especie(): string {
            return this._especie
        }

        public set especie(value: string) {
            this._especie = value
        }

        public get idade(): number {
            return this._idade
        }

        public set idade(value: number) {
            this._idade = value
        }

        public get sexo(): string {
            return this._sexo
        }

        public set sexo(value: string) {
            this._sexo = value
        }

        abstract emitirSom(): void
        abstract mover(): void
    }

    class Mamifero extends Animal {

        constructor(nome: string, especie: string, idade: number, sexo: string, private _tipoAlimentacao: string) {
            super(nome, especie, idade, sexo)
        }

        public get tipoAlimentacao(): string {
            return this._tipoAlimentacao
        }

        public set tipoAlimentacao(value: string) {
            this._tipoAlimentacao = value
        }

        emitirSom(): void {
            console.log(`${this.nome} está emitindo um som de mamífero.`)
        }

        mover(): void {
            console.log(`${this.nome} está se movimentando.`)
        }
    }

    class Ave extends Animal {

        constructor(nome: string, especie: string, idade: number, sexo: string, private _migratoria: boolean) {
            super(nome, especie, idade, sexo)
        }

        public get migratoria(): boolean {
            return this._migratoria
        }

        public set migratoria(value: boolean) {
            this._migratoria = value
        }

        emitirSom(): void {
            console.log(`${this.nome} está cantando.`)
        }

        mover(): void {
            console.log(`${this.nome} está voando.`)
        }
    }


    function simularHoraAlimentacao(listaAnimais: Animal[]): void {

        for (let animal of listaAnimais) {

            console.log(`O tratador está alimentando ${animal.nome}.`)

            animal.emitirSom()
        }
    }

    let listaAnimais: Animal[] = []

    let quantidade = Number(prompt("Quantos animais deseja cadastrar?"))

    for (let i = 0; i < quantidade; i++) {

        let tipo = String(prompt("Digite o tipo do animal: Mamífero ou Ave"))

        let nome = prompt("Digite o nome do animal:")!
        let especie = prompt("Digite a espécie do animal:")!
        let idade = Number(prompt("Digite a idade do animal:"))
        let sexo = prompt("Digite o sexo do animal:")!


        if (tipo === "mamífero") {

            let alimentacao = String(prompt("Digite o tipo de alimentação: Carnívoro, Herbívoro, etc."))


            let mamifero = new Mamifero(nome, especie, idade, sexo, alimentacao)

            listaAnimais.push(mamifero)

        } else if (tipo === "ave") {

            let migratoria = String(prompt("A ave é migratória? (s/n)"))
            let ehMigratoria = migratoria === "s"


            let ave = new Ave(nome, especie, idade, sexo, ehMigratoria)
            listaAnimais.push(ave)
        } else {
            console.log("Tipo de animal inválido.")
        }
    }

    for (let animal of listaAnimais) {

        if (animal instanceof Mamifero) {

            console.log(`Nome: ${animal.nome}`)
            console.log(`Espécie: ${animal.especie}`)
            console.log(`Idade: ${animal.idade}`)
            console.log(`Sexo: ${animal.sexo}`)
            console.log(`Alimentação: ${animal.tipoAlimentacao}`)
        }
    }

    for (let animal of listaAnimais) {

        if (animal instanceof Ave) {

            console.log(`Nome: ${animal.nome}`)
            console.log(`Espécie: ${animal.especie}`)
            console.log(`Idade: ${animal.idade}`)
            console.log(`Sexo: ${animal.sexo}`)
            console.log(`Migratória: ${animal.migratoria ? "Sim" : "Não"}`)
        }
    }

    simularHoraAlimentacao(listaAnimais)
}