// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.

export function executarQuestao29(): void {
    abstract class Obra {
        protected titulo: string
        protected autor: string

        constructor(titulo: string, autor: string) {
            this.titulo = titulo
            this.autor = autor
        }

        abstract calcularPenalidade(diasAtraso: number): number
    }


    class LivroFisico extends Obra {

        constructor(titulo: string, autor: string) {
            super(titulo, autor)
        }

        calcularPenalidade(diasAtraso: number): number {
            return diasAtraso * 2.50
        }
    }


    class ArtigoDigital extends Obra {

        constructor(titulo: string, autor: string) {
            super(titulo, autor)
        }

        calcularPenalidade(diasAtraso: number): number {
            console.log(`O artigo digital gerou um aviso: "${this.titulo}"`)
            return 0
        }
    }


    let obras: Obra[] = []
    let diasAtrasos: number[] = []

    let opcao = -1
    while (opcao !== 0) {

        opcao = Number(prompt("1 - Cadastrar Livro Físico (com multa por atraso)" + "2 - Cadastrar Artigo Científico Digital (com advertência)" + "3 - Exibir valor total de multas a recolher" + "0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {

            let titulo = String(prompt("Informe o título do livro físico:"))

            while (titulo === "") {
                console.log("O título não pode ser vazio!")
                titulo = String(prompt("Informe um título válido:"))
            }


            let autor = String(prompt("Informe o autor do livro físico:"))

            while (autor === "") {
                console.log("O autor não pode ser vazio!")
                autor = String(prompt("Informe um autor válido:"))
            }


            let diasAtraso = Number(prompt("Informe a quantidade de dias de atraso:"))

            while (diasAtraso < 0 || diasAtraso % 1 !== 0) {
                console.log("Quantidade de dias inválida!")
                diasAtraso = Number(prompt("Informe uma quantidade de dias válida:"))
            }

            let livro = new LivroFisico(titulo, autor)

            obras.push(livro)
            diasAtrasos.push(diasAtraso)

            console.log("Livro Físico cadastrado com sucesso!")

        } else if (opcao === 2) {

            let titulo = String(prompt("Informe o título do artigo digital:"))

            while (titulo === "") {
                console.log("O título não pode ser vazio!")
                titulo = String(prompt("Informe um título válido:"))
            }

            let autor = String(prompt("Informe o autor do artigo digital:"))

            while (autor === "") {
                console.log("O autor não pode ser vazio!")
                autor = String(prompt("Informe um autor válido:"))
            }

            let diasAtraso = Number(prompt("Informe a quantidade de dias de atraso:")
            )

            while (diasAtraso < 0 || diasAtraso % 1 !== 0) {
                console.log("Quantidade de dias inválida!")
                diasAtraso = Number(prompt("Informe uma quantidade de dias válida:"))
            }

            let artigo = new ArtigoDigital(titulo, autor)

            obras.push(artigo)
            diasAtrasos.push(diasAtraso)

            console.log("Artigo Digital cadastrado com sucesso!")

        } else if (opcao === 3) {

            if (obras.length === 0) {
                console.log("Nenhuma obra foi cadastrada!")

            } else {

                let totalMultas = 0
                for (let i = 0; i < obras.length; i++) {
                    let obra = obras[i]
                    let dias = diasAtrasos[i]

                    let multaObra = obra.calcularPenalidade(dias)
                    totalMultas = totalMultas + multaObra
                }
                console.log(`Valor total de multas que a biblioteca deve recolher: ${totalMultas}`)
            }
        } else if (opcao === 0) {
            console.log("Programa encerrado!")
        } else {
            console.log("Opção inválida!")
        }
    }
}