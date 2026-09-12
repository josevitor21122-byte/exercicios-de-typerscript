// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.
export function executarQuestao14() {
    class Livro {
        constructor(_titulo, _autor, _anoPublicacao, _disponivel = true) {
            this._titulo = _titulo;
            this._autor = _autor;
            this._anoPublicacao = _anoPublicacao;
            this._disponivel = _disponivel;
        }
        get titulo() {
            return this._titulo;
        }
        set titulo(novoTitulo) {
            this._titulo = novoTitulo;
        }
        get autor() {
            return this._autor;
        }
        set autor(novoAutor) {
            this._autor = novoAutor;
        }
        get anoPublicacao() {
            return this._anoPublicacao;
        }
        set anoPublicacao(novoAno) {
            this._anoPublicacao = novoAno;
        }
        get disponivel() {
            return this._disponivel;
        }
        set disponivel(status) {
            this._disponivel = status;
        }
        emprestar() {
            if (this.disponivel) {
                this.disponivel = false;
                return true;
            }
            return false;
        }
        exibirInformacoes() {
            let status = this.disponivel ? "Disponível" : "Emprestado";
            console.log(`- [${status}] "${this.titulo}" por ${this.autor} (${this.anoPublicacao})`);
        }
    }
    let biblioteca = [];
}
