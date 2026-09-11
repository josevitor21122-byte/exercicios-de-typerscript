// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function executarQuestao14(): void {
    // 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class Livro {
    constructor(
        private _titulo: string,
        private _autor: string, 
        private _anoPublicacao: number,
        private _disponivel: boolean = true
    ) {}

    get titulo(): string {
        return this._titulo;
    }
    set titulo(novoTitulo: string) {
        this._titulo = novoTitulo;
    }

    get autor(): string {
        return this._autor
    }
    set autor(novoAutor: string) {
        this._autor = novoAutor
    }

    get anoPublicacao(): number {
        return this._anoPublicacao
    }
    set anoPublicacao(novoAno: number) {
        this._anoPublicacao = novoAno
    }

    get disponivel(): boolean {
        return this._disponivel
    }
    set disponivel(status: boolean) {
        this._disponivel = status
    }


    emprestar(): boolean {
        if (this.disponivel) {
            this.disponivel = false
            return true
        }
        return false
    }

    public exibirInformacoes(): void {
        let status = this.disponivel ? "Disponível" : "Emprestado";
        console.log(`- [${status}] "${this.titulo}" por ${this.autor} (${this.anoPublicacao})`);
    }
}

const biblioteca: Livro[] = []

}