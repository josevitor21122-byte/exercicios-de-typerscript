// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function executarQuestao14(): void {
class Livro {
    
     constructor(
        private _titulo: string,
        private _autor: string, 
        private _anoPublicacao: number,
        private _disponivel: boolean = true
    ) {}
    
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
}