// 33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra
// possui os atributos privados título e autor, e declara o método abstrato registrarAtraso(diasDeAtraso)
// que deve ser sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto
// ArtigoDigital não gera multa, mas registra uma string de advertência ao usuário. O bibliotecário
// informa continuamente o título e os dias de atraso de cada devolução. O sistema chama
// registrarAtraso() polimorficamente para cada objeto e, ao encerrar, exibe o valor total de multas a ser
// recolhido pela biblioteca.
// Requisitos mínimos:
// • Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
// • LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
// • Atributos titulo e autor privados, acessíveis apenas por getters.
// • Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
// • Acumular e exibir total de multas ao final.
export function executarQuestao33() {
    class Obra {
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
    class LivroFisico extends Obra {
        constructor(titulo, autor) {
            super(titulo, autor);
        }
        registrarAtraso(diasDeAtraso) {
            let multa = diasDeAtraso * 2.50;
            return multa;
        }
    }
    class ArtigoDigital extends Obra {
        constructor(titulo, autor) {
            super(titulo, autor);
        }
        registrarAtraso(diasDeAtraso) {
            if (diasDeAtraso > 0) {
                console.log(`O artigo digital: ${this.getTitulo()} teve ${diasDeAtraso} dia de atraso`);
            }
            return 0;
        }
    }
    let obras = [];
    let diasAtrasos = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de obra: | 1 - Livro Físico (Multa R$ 2,50/dia) | 2 - Artigo Digital "));
        let titulo = String(prompt("Informe o título da obra: "));
        let autor = String(prompt("Informe o autor da obra: "));
        let diasDeAtraso = Number(prompt("Informe a quantidade de dias de atraso: "));
        let obra;
        if (tipo === "1") {
            obra = new LivroFisico(titulo, autor);
        }
        else {
            obra = new ArtigoDigital(titulo, autor);
        }
        obras.push(obra);
        diasAtrasos.push(diasDeAtraso);
        continuar = String(prompt("Deseja registrar outra devolução (sim/não): "));
    }
    if (obras.length === 0) {
        console.log("Nenhuma obra foi cadastrada");
    }
    else {
        let totalMultas = 0;
        for (let i = 0; i < obras.length; i++) {
            let obra = obras[i];
            let dias = diasAtrasos[i];
            let multaObra = obra.registrarAtraso(dias);
            totalMultas += multaObra;
            console.log(`Obra: ${obra.getTitulo()} | Autor: ${obra.getAutor()} | Dias de Atraso: ${dias} | Multa: R$ ${multaObra}`);
        }
        console.log(`Valor total de multas a recolher: ${totalMultas}`);
    }
}
