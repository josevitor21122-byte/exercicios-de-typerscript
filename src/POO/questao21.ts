// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function executarQuestao21(): void {

class Projeto {
    private _titulo: string
    private _coordenador: string
    private _nota: number
    protected tipo: string

    constructor(titulo: string, coordenador: string, tipo: string) {
        this._titulo = titulo
        this._coordenador = coordenador
        this._nota = 0
        this.tipo = tipo
    }

    public getTitulo(): string { 
        return this._titulo 
    }
    public getCoordenador(): string { 
        return this._coordenador 
    }
    public getNota(): number { 
        return this._nota 
    }
    public getTipo(): string { 
        return this.tipo 
    }

    public setNota(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this._nota = nota
        } else {
            console.log("Nota inválida! A nota deve estar obrigatoriamente entre 0 e 10.")
            this._nota = 0
        }
    }

    public exibirResumo(): void {
        console.log(`Título: ${this._titulo}`)
        console.log(`Coordenador: ${this._coordenador}`)
        console.log(`Nota: ${this._nota}`)
    }
}

class ProjetoVerde extends Projeto {
    constructor(titulo: string, coordenador: string) {
        super(titulo, coordenador, "V")
    }

    public exibirResumo(): void {
        console.log(`Título: ${this.getTitulo()}`)
        console.log(`Nota: ${this.getNota()}`)
    }
}

class ProjetoCultural extends Projeto {
    constructor(titulo: string, coordenador: string) {
        super(titulo, coordenador, "C")
    }

    public exibirResumo(): void {
        console.log(`Título: ${this.getTitulo()}`)
        console.log(`Nota: ${this.getNota()}`)
    }
}

let listaProjetos: Projeto[] = []
let continuarInscricoes = true
let somaNotas = 0

while (continuarInscricoes) {
    let opcao = String(prompt("Concurso Reforest - Inscrição de Projetos Digite: V - Projeto Verde C - Projeto Cultural F - Finalizar Inscrições Opção: "))

    if (opcao === "F") {
        continuarInscricoes = false 
    } 
    else if (opcao === "V" || opcao === "C") {
        let titulo = String(prompt("Título do projeto: "))
        let coordenador = String(prompt("Nome do coordenador: "))
        let notaDigitada = Number(prompt("Digite a nota de avaliação (0 a 10): "))

        if (opcao === "V") {
            let projVerde = new ProjetoVerde(titulo, coordenador)
            projVerde.setNota(notaDigitada)
            
            listaProjetos.push(projVerde)
            somaNotas += projVerde.getNota() 
            console.log(`Projeto Verde ${titulo}`)
        } 
        else if (opcao === "C") {
            let projCultural = new ProjetoCultural(titulo, coordenador)
            projCultural.setNota(notaDigitada)
            
            listaProjetos.push(projCultural)
            somaNotas += projCultural.getNota() 
            console.log(`Projeto Cultural "${titulo}" cadastrado!`)
        }
    } 
    else {
        console.log("Opção inválida!")
    }
}

if (listaProjetos.length > 0) {
    let mediaGeral = somaNotas / listaProjetos.length
    console.log(`Média Geral da Competição: ${mediaGeral}`)
    console.log("Projetos aprovados (acima da média) em ordem inversa de inscrição:")

    for (let i = listaProjetos.length - 1; i >= 0; i--) {
        let projetoAtual = listaProjetos[i]

        if (projetoAtual.getNota() > mediaGeral) {
            projetoAtual.exibirResumo() 
            console.log(`Coordenador responsável: ${projetoAtual.getCoordenador()}`)
        }
    }

} else {
    console.log("Nenhum projeto foi cadastrado nesta noite.")
}

}