// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor,
// ano de publicação e disponibilidade (boolean). O programa deve permitir cadastrar até
// 15 livros via teclado, listar todos os disponíveis e registrar o empréstimo de um livro
// pesquisado pelo título.

export function executarQuestao14(): void {

    class Livro {
        constructor(private _titulo: string, private _autor: string, private _anoPublicacao: number, private _disponivel: boolean = true) {}

        public get titulo(): string {
            return this._titulo
        }

        public set titulo(value: string) {
            this._titulo = value
        }

        public get autor(): string {
            return this._autor
        }

        public set autor(value: string) {
            this._autor = value
        }

        public get anoPublicacao(): number {
            return this._anoPublicacao
        }

        public set anoPublicacao(value: number) {
            this._anoPublicacao = value
        }

        public get disponivel(): boolean {
            return this._disponivel
        }

        public set disponivel(value: boolean) {
            this._disponivel = value
        }
    }

    let livros: Livro[] = []

    for (let i = 0; i < 15; i++) {

        let titulo = prompt(`Digite o título do livro ${i + 1}:`)! 
        let autor = prompt(`Digite o autor do livro ${i + 1}:`)! 
        let ano = Number(prompt(`Digite o ano de publicação do livro ${i + 1}:`))

        let livro = new Livro(titulo, autor, ano)

        livros.push(livro)
        let continuar = prompt("Deseja cadastrar outro livro? (s/n)")

        if (continuar !== "s") {
            break
        }
    }

    for (let livro of livros) {

        if (livro.disponivel) {
            console.log(`Título: ${livro.titulo}`)
            console.log(`Autor: ${livro.autor}`)
            console.log(`Ano: ${livro.anoPublicacao}`)
        }
    }

    let tituloPesquisa = prompt("Digite o título do livro que deseja emprestar:")!
    let encontrado = false

    for (let livro of livros) {

        if (livro.titulo.toLowerCase() === tituloPesquisa.toLowerCase()) {
            encontrado = true

            if (livro.disponivel) {

                livro.disponivel = false
                console.log(`O livro "${livro.titulo}" foi emprestado com sucesso.`)

            } else {
                console.log(`O livro "${livro.titulo}" não está disponível.`)
            }
            break
        }
    }

    if (!encontrado) {
        console.log("Livro não encontrado.")
    }
}