// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function executarQuestao36(): void {

    abstract class Curso {
        private titulo: string
        private cargaHoraria: number

        constructor(titulo: string, cargaHoraria: number) {
            this.titulo = titulo
            this.cargaHoraria = cargaHoraria
        }

        getTitulo(): string {
            return this.titulo
        }

        getCargaHoraria(): number {
            return this.cargaHoraria
        }

        abstract emitirCertificado(): void
    }

    class CursoLivre extends Curso {

        constructor(titulo: string, cargaHoraria: number) {
            super(titulo, cargaHoraria)
        }

        emitirCertificado(): void {
            console.log(`Curso: ${this.getTitulo()} (${this.getCargaHoraria()}h)`)
            console.log("Status: Certificado emitido automaticamente (Curso Livre concluído com sucesso!)")
        }
    }

    class CursoTecnico extends Curso {

        private numeroProjetoFinal: number
        private notaProjetoFinal: number

        constructor( titulo: string,cargaHoraria: number,numeroProjetoFinal: number, notaProjetoFinal: number) {
            super(titulo, cargaHoraria)
            this.numeroProjetoFinal = numeroProjetoFinal
            this.notaProjetoFinal = notaProjetoFinal
        }

        getNotaProjetoFinal(): number {
            return this.notaProjetoFinal
        }

        emitirCertificado(): void {
            console.log(`Curso: ${this.getTitulo()} (${this.getCargaHoraria()}h) - Projeto nº ${this.numeroProjetoFinal}`)

            if (this.notaProjetoFinal >= 7) {
                console.log(`Status: Certificado LIBERADO! (Nota do projeto: ${this.notaProjetoFinal})`)
            } else {
                console.log(`Status: Certificado PENDENTE! (Nota do projeto: ${this.notaProjetoFinal} - Necessário nota >= 7)`)
            }
        }
    }

    let cursos: Curso[] = []

    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(
            prompt("1 - Cadastrar Curso Livre" +"2 - Cadastrar Curso Técnico" +"3 - Emitir certificados e verificar pendências" +"0 - Sair" +"Escolha uma opção:"))

        if (opcao === 1) {

            let titulo = String(prompt("Informe o título do curso livre:"))

            while (titulo === "") {
                console.log("O título não pode ser vazio!")
                titulo = String(prompt("Informe um título válido:"))
            }

            let cargaHoraria = Number(prompt("Informe a carga horária em horas:"))

            while (cargaHoraria <= 0) {
                console.log("Carga horária inválida!")
                cargaHoraria = Number(prompt("Informe uma carga horária válida:"))
            }


            let curso = new CursoLivre(titulo, cargaHoraria)

            cursos.push(curso)

            console.log("Curso Livre cadastrado com sucesso!")
        } else if (opcao === 2) {

            let titulo = String(prompt("Informe o título do curso técnico:"))

            while (titulo === "") {
                console.log("O título não pode ser vazio!")
                titulo = String(prompt("Informe um título válido:"))
            }

            let cargaHoraria = Number(prompt("Informe a carga horária em horas:"))

            while (cargaHoraria <= 0) {
                console.log("Carga horária inválida!")
                cargaHoraria = Number(prompt("Informe uma carga horária válida:"))
            }

            let numeroProjetoFinal = Number(prompt("Informe o número do projeto final:"))

            while (numeroProjetoFinal <= 0 || numeroProjetoFinal % 1 !== 0) {
                console.log("Número do projeto inválido!")
                numeroProjetoFinal = Number(prompt("Informe um número de projeto válido:"))
            }

            let notaProjetoFinal = Number(prompt("Informe a nota do projeto final (0 a 10):"))

            while (notaProjetoFinal < 0 || notaProjetoFinal > 10) {
                console.log("Nota inválida! Deve estar entre 0 e 10.")
                notaProjetoFinal = Number(prompt("Informe uma nota válida para o projeto final:"))
            }

            let curso = new CursoTecnico(titulo, cargaHoraria, numeroProjetoFinal, notaProjetoFinal)

            cursos.push(curso)

            console.log("Curso Técnico cadastrado com sucesso!")

        } else if (opcao === 3) {
            if (cursos.length === 0) {

                console.log("Nenhum curso foi cadastrado!")

            } else {
                for (let i = 0; i < cursos.length; i++) {
                    let curso = cursos[i]

                    curso.emitirCertificado()
                }
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}