// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class Livro {
    private titulo: string;
    private autor: string;
    private anoPublicacao: number;
    private disponivel: boolean;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true; // Todo livro começa disponível por padrão
    }

    // Métodos de Encapsulamento (Getters e Setters)
    public getTitulo(): string {
        return this.titulo;
    }

    public isDisponivel(): boolean {
        return this.disponivel;
    }

    public emprestar(): boolean {
        if (this.disponivel) {
            this.disponivel = false;
            return true;
        }
        return false;
    }

    public exibirInformacoes(): void {
        const status = this.disponivel ? "Disponível" : "Emprestado";
        console.log(`- [${status}] "${this.titulo}" por ${this.autor} (${this.anoPublicacao})`);
    }
}

// Simulação do sistema de biblioteca com array de até 15 livros
const biblioteca: Livro[] = [];

// Cadastrando alguns livros de exemplo (respeitando o limite de 15)
biblioteca.push(new Livro("Dom Casmurro", "Machado de Assis", 1899));
biblioteca.push(new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943));
biblioteca.push(new Livro("1984", "George Orwell", 1949));

// 1. Listar todos os disponíveis
console.log("=== LIVROS DISPONÍVEIS ===");
biblioteca.forEach(livro => {
    if (livro.isDisponivel()) {
        livro.exibirInformacoes();
    }
});

// 2. Registrar o empréstimo de um livro pesquisado pelo título
const tituloBusca = "1984";
console.log(`\nTentando emprestar o livro: "${tituloBusca}"...`);

const livroEncontrado = biblioteca.find(livro => livro.getTitulo().toLowerCase() === tituloBusca.toLowerCase());

if (livroEncontrado) {
    if (livroEncontrado.emprestar()) {
        console.log("Empréstimo realizado com sucesso!");
    } else {
        console.log("O livro selecionado já está emprestado.");
    }
} else {
    console.log("Livro não encontrado no catálogo.");
}

// Listando novamente para conferir a alteração
console.log("\n=== LIVROS DISPONÍVEIS APÓS EMPRÉSTIMO ===");
biblioteca.forEach(livro => {
    if (livro.isDisponivel()) {
        livro.exibirInformacoes();
    }
});
