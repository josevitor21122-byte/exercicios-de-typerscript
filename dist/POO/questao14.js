// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.
// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor,
// ano de publicação e disponibilidade (boolean). O programa deve permitir cadastrar até
// 15 livros via teclado, listar todos os disponíveis e registrar o empréstimo de um livro
// pesquisado pelo título.
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
        set titulo(value) {
            this._titulo = value;
        }
        get autor() {
            return this._autor;
        }
        set autor(value) {
            this._autor = value;
        }
        get anoPublicacao() {
            return this._anoPublicacao;
        }
        set anoPublicacao(value) {
            this._anoPublicacao = value;
        }
        get disponivel() {
            return this._disponivel;
        }
        set disponivel(value) {
            this._disponivel = value;
        }
    }
    let livros = [];
    for (let i = 0; i < 15; i++) {
        let titulo = prompt(`Digite o título do livro ${i + 1}:`);
        let autor = prompt(`Digite o autor do livro ${i + 1}:`);
        let ano = Number(prompt(`Digite o ano de publicação do livro ${i + 1}:`));
        let livro = new Livro(titulo, autor, ano);
        livros.push(livro);
        let continuar = prompt("Deseja cadastrar outro livro? (s/n)");
        if (continuar !== "s") {
            break;
        }
    }
    for (let livro of livros) {
        if (livro.disponivel) {
            console.log(`Título: ${livro.titulo}`);
            console.log(`Autor: ${livro.autor}`);
            console.log(`Ano: ${livro.anoPublicacao}`);
        }
    }
    let tituloPesquisa = prompt("Digite o título do livro que deseja emprestar:");
    let encontrado = false;
    for (let livro of livros) {
        if (livro.titulo.toLowerCase() === tituloPesquisa.toLowerCase()) {
            encontrado = true;
            if (livro.disponivel) {
                livro.disponivel = false;
                console.log(`O livro "${livro.titulo}" foi emprestado com sucesso.`);
            }
            else {
                console.log(`O livro "${livro.titulo}" não está disponível.`);
            }
            break;
        }
    }
    if (!encontrado) {
        console.log("Livro não encontrado.");
    }
}
