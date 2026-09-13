// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar por tipo
// (Mamíferos ou Aves) e simular a &#39;hora da alimentação&#39; chamando o método de som de cada um.

export function executarQuestao16(): void {
abstract class Animal {
  private _nome: string
  private _especie: string
  private _idade: number
  private _sexo: string

  constructor(nome: string, especie: string, idade: number, sexo: string) {
    this._nome = nome
    this._especie = especie
    this._idade = idade
    this._sexo = sexo
  }

  get nome(): string {
    return this.nome
  }
  set nome(nome: string) {
    if (this.nome === "") console.log("O nome não pode ser vazio.")
    this.nome = nome
  }

  get especie(): string {
    return this._especie
  }
  set especie(especie: string) {
    this._especie = especie
  }

  get idade(): number {
    return this._idade
  }
  set idade(idade: number) {
    if (idade < 0) console.log("A idade não pode ser negativa.")
    this._idade = idade
  }

  get sexo(): string {
    return this._sexo
  }
  set sexo(sexo: string) {
    this._sexo = sexo
  }

  abstract emitirSom(): void
  abstract mover(): void

  exibirDados(): void {
    console.log(`Nome: ${this._nome}`)
    console.log(`Espécie: ${this._especie}`)
    console.log(`Idade: ${this._idade}`)
    console.log(`Sexo: ${this._sexo}`)
  }
}

class Mamifero extends Animal {
  private _tipoAlimentacao: string

  constructor(nome: string, especie: string, idade: number, sexo: string, tipoAlimentacao: string) {
    super(nome, especie, idade, sexo)
    this._tipoAlimentacao = tipoAlimentacao
  }

  get tipoAlimentacao(): string {
    return this._tipoAlimentacao
  }
  set tipoAlimentacao(tipoAlimentacao: string) {
    this._tipoAlimentacao = tipoAlimentacao
  }

  emitirSom(): void {
    console.log("O mamífero faz: au au au")
  }

  mover(): void {
    console.log("O mamífero está andando.")
  }

  exibirDados(): void {
    super.exibirDados()
    console.log(`Tipo de alimentação: ${this._tipoAlimentacao}`)
  }
}

class Ave extends Animal {
  private _migratoria: boolean

  constructor(nome: string, especie: string, idade: number, sexo: string, migratoria: boolean) {
    super(nome, especie, idade, sexo)
    this._migratoria = migratoria
  }

  get migratoria(): boolean {
    return this._migratoria
  }
  set migratoria(migratoria: boolean) {
    this._migratoria = migratoria
  }

  emitirSom(): void {
    console.log("A ave faz: piu piu")
  }

  mover(): void {
    console.log("A ave está voando.")
  }

  exibirDados(): void {
    super.exibirDados()
    console.log(`Migratória: ${this._migratoria ? "Sim" : "Não"}`)
  }
}

  let animais: Animal[] = []
  let quantidade = Number(prompt("Quantos animais deseja cadastrar? "))

  for (let i = 0; i < quantidade; i++) {
    console.log(`Cadastro do animal ${i + 1}`)
    
    let tipo = String(prompt("Digite M para Mamífero ou A para Ave: "))
    let nome = String(prompt("Nome: "))
    let especie = String(prompt("Espécie: "))
    let idade = Number(prompt("Idade: "))
    let sexo = String(prompt("Sexo: "))

    if (tipo === "M") {
      let alimentacao = String(prompt("Tipo de alimentação: "))
      let mamifero = new Mamifero(nome, especie, idade, sexo, alimentacao)
      animais.push(mamifero)
    } 
    else if (tipo === "A") {
      let respostaMigratoria = String(prompt("A ave é migratória? (S/N): "))
      let migratoria = respostaMigratoria === "S"
      let ave = new Ave(nome, especie, idade, sexo, migratoria)
      animais.push(ave)
    } 
    else {
      console.log("Tipo de animal inválido!")
      i--
    }
  }

  for (let animal of animais) {
    if (animal instanceof Mamifero) {
      animal.exibirDados()
    }
  }

  for (let animal of animais) {
    if (animal instanceof Ave) {
      animal.exibirDados()
    }
  }

  for (let animal of animais) {
    animal.mover()
  }

  for (let animal of animais) {
    animal.emitirSom()
  }
}