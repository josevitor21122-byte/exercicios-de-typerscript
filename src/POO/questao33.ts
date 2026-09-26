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

export function executarQuestao33(): void {
    abstract class Obra {

        private titulo: string
        private autor: string

        constructor(titulo: string, autor: string) {
            this.titulo = titulo
            this.autor = autor
        }

        getTitulo(): string {
            return this.titulo
        }

        getAutor(): string {
            return this.autor
        }

        abstract registrarAtraso(diasDeAtraso: number): number
    }

    class LivroFisico extends Obra {

        constructor(titulo: string, autor: string) {
            super(titulo, autor)
        }

        registrarAtraso(diasDeAtraso: number): number {
            // Calcula multa de R$ 2,50 por dia de atraso
            let multa = diasDeAtraso * 2.50
            return multa
        }
    }

    class ArtigoDigital extends Obra {

        constructor(titulo: string, autor: string) {
            super(titulo, autor)
        }

        registrarAtraso(diasDeAtraso: number): number {
            if (diasDeAtraso > 0) {
                console.log(`O artigo digital ${this.getTitulo()} teve ${diasDeAtraso} dia(s) de atraso. Aviso enviado ao usuário.`)
            }
            return 0
        }
    }

    let obras: Obra[] = []
    let diasAtrasos: number[] = []

    let opcao = -1

    while (opcao !== 0) {

        opcao = Number(prompt("1 - Cadastrar Livro Físico (com multa por atraso)" + "2 - Cadastrar Artigo Digital (com advertência)" + "3 - Exibir valor total de multas a recolher" + "0 - Sair" + "Escolha uma opção:"))

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

            let diasDeAtraso = Number(prompt("Informe a quantidade de dias de atraso:"))

            while (diasDeAtraso < 0 || diasDeAtraso % 1 !== 0) {
                console.log("Quantidade de dias inválida!")
                diasDeAtraso = Number(prompt("Informe uma quantidade de dias válida:"))
            }

            let livro = new LivroFisico(titulo, autor)

            obras.push(livro)
            diasAtrasos.push(diasDeAtraso)
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

            let diasDeAtraso = Number(prompt("Informe a quantidade de dias de atraso:"))

            while (diasDeAtraso < 0 || diasDeAtraso % 1 !== 0) {
                console.log("Quantidade de dias inválida!")
                diasDeAtraso = Number(prompt("Informe uma quantidade de dias válida:"))
            }

            let artigo = new ArtigoDigital(titulo, autor)

            obras.push(artigo)
            diasAtrasos.push(diasDeAtraso)
            console.log("Artigo Digital cadastrado com sucesso!")
        
        } else if (opcao === 3) {
            if (obras.length === 0) {

                console.log("Nenhuma obra foi cadastrada!")

            } else {
                let totalMultas = 0
                
                for (let i = 0; i < obras.length; i++) {
                    let obra = obras[i]
                    let dias = diasAtrasos[i]

                    let multaObra = obra.registrarAtraso(dias)
                    totalMultas = totalMultas + multaObra
                }
                console.log(`Valor total de multas a recolher: ${totalMultas}`)
            }
        
        } else if (opcao === 0) {
            console.log("Programa encerrado!")
        
        } else {
            console.log("Opção inválida!")
        }
    }
}