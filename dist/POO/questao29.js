// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.
export function executarQuestao29() {
    class ObraBiblioteca {
        constructor(titulo, autor) {
            this.titulo = titulo;
            this.autor = autor;
        }
        getTitulo() {
            return this.titulo;
        }
        getAutor() {
            return this.autor;
        }
    }
    class LivroFisico extends ObraBiblioteca {
        constructor(titulo, autor) {
            super(titulo, autor);
        }
        calcularMulta(diasAtraso) {
            return diasAtraso * 2.50;
        }
        obterTipo() {
            return "Livro Físico";
        }
    }
    class ArtigoDigital extends ObraBiblioteca {
        constructor(titulo, autor) {
            super(titulo, autor);
        }
        calcularMulta(diasAtraso) {
            if (diasAtraso > 0) {
                console.log(`O artigo digital "${this.getTitulo()}" teve ${diasAtraso}`);
            }
            return 0;
        }
        obterTipo() {
            return "Artigo Científico Digital";
        }
    }
    let obras = [];
    let diasAtrasos = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de obra: | 1 - Livro Físico | 2 - Artigo Científico Digital"));
        let titulo = String(prompt("Informe o título da obra: "));
        let autor = String(prompt("Informe o autor da obra: "));
        let diasAtraso = Number(prompt("Informe a quantidade de dias de atraso: "));
        if (tipo === "1") {
            obras.push(new LivroFisico(titulo, autor));
        }
        else {
            obras.push(new ArtigoDigital(titulo, autor));
        }
        diasAtrasos.push(diasAtraso);
        continuar = String(prompt("Deseja cadastrar outro empréstimo (sim/não): "));
    }
    if (obras.length === 0) {
        console.log("Nenhum empréstimo foi cadastrado!");
    }
    else {
        let totalMultas = 0;
        for (let i = 0; i < obras.length; i++) {
            let obra = obras[i];
            let dias = diasAtrasos[i];
            let multa = obra.calcularMulta(dias);
            totalMultas += multa;
            console.log(`Título: ${obra.getTitulo()} | Autor: ${obra.getAutor()} | Tipo: ${obra.obterTipo()} | Atraso: ${dias} | Multa: ${multa.toFixed(2)}`);
        }
        console.log(`Valor Total de Multas a Recolher: R$ ${totalMultas}`);
    }
}
