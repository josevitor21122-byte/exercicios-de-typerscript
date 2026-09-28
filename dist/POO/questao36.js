// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.
export function executarQuestao36() {
    class Curso {
        constructor(titulo, cargaHoraria) {
            this.titulo = titulo;
            this.cargaHoraria = cargaHoraria;
        }
        getTitulo() {
            return this.titulo;
        }
        getCargaHoraria() {
            return this.cargaHoraria;
        }
    }
    class CursoLivre extends Curso {
        constructor(titulo, cargaHoraria) {
            super(titulo, cargaHoraria);
        }
        emitirCertificado() {
            console.log(`Curso Livre: ${this.getTitulo()} | Carga horaria: ${this.getCargaHoraria()}`);
        }
    }
    class CursoTecnico extends Curso {
        constructor(titulo, cargaHoraria, numeroProjetoFinal, notaProjetoFinal) {
            super(titulo, cargaHoraria);
            this.numeroProjetoFinal = numeroProjetoFinal;
            this.notaProjetoFinal = notaProjetoFinal;
        }
        getNotaProjetoFinal() {
            return this.notaProjetoFinal;
        }
        emitirCertificado() {
            console.log(`Curso Técnico: ${this.getTitulo()} | Carga horaria: ${this.getCargaHoraria()} | Númerodo projeto: ${this.numeroProjetoFinal}`);
            if (this.notaProjetoFinal >= 7) {
                console.log(`Status: Certificado liberado: ${this.notaProjetoFinal})`);
            }
            else {
                console.log(`Status: Certificado pendente: ${this.notaProjetoFinal}`);
            }
        }
    }
    let cursos = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o tipo de curso concluído: | 1 - Curso Livre | 2 - Curso Técnico"));
        let titulo = String(prompt("Informe o título do curso: "));
        let cargaHoraria = Number(prompt("Informe a carga horária em horas: "));
        let curso;
        if (tipo === "1") {
            curso = new CursoLivre(titulo, cargaHoraria);
        }
        else {
            let numeroProjetoFinal = Number(prompt("Informe o número do projeto final: "));
            let notaProjetoFinal = Number(prompt("Informe a nota do projeto final (0 a 10): "));
            curso = new CursoTecnico(titulo, cargaHoraria, numeroProjetoFinal, notaProjetoFinal);
        }
        cursos.push(curso);
        continuar = String(prompt("Deseja cadastrar outro curso? (sim/não): "));
    }
    if (cursos.length === 0) {
        console.log("Nenhum curso foi cadastrado!");
    }
    else {
        for (let i = 0; i < cursos.length; i++) {
            let c = cursos[i];
            c.emitirCertificado();
        }
    }
}
