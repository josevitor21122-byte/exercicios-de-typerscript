// 31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus
// do IFS Tobias Barreto. Crie a superclasse Projeto com os atributos privados título, coordenador e
// nota. O setter setNota(valor) deve validar estritamente o intervalo de 0 a 10, lançando exceção ou
// mensagem de erro para valores inválidos. As subclasses ProjetoVerde (plantio urbano) e
// ProjetoCultural (conscientização) sobrescrevem o método descricaoCategoria() com textos distintos.
// O usuário preenche os projetos pelo terminal. O programa calcula a média das notas e, ao final, exibe
// os projetos com nota acima da média, mostrando a categoria de cada uma via polimorfismo.
// Requisitos mínimos:
// • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// • Cálculo de média com laço sobre os projetos cadastrados.
// • Filtro e exibição dos projetos acima da média.
// • Chamada polimórfica a descricaoCategoria() na exibição final.

export function executarQuestao31(): void {
    abstract class Projeto {
        private titulo: string
        private coordenador: string
        private nota: number

        constructor(titulo: string, coordenador: string, nota: number) {
            this.titulo = titulo
            this.coordenador = coordenador
            this.nota = 0
            this.setNota(nota)
        }

        setNota(valor: number): void {
            while (valor < 0 || valor > 10) {
                console.log("Nota inválida! A nota deve estar entre 0 e 10.")
                valor = Number(
                    prompt("Informe uma nota válida (entre 0 e 10):")
                )
            }
            this.nota = valor
        }

        getTitulo(): string {
            return this.titulo
        }

        getCoordenador(): string {
            return this.coordenador
        }

        getNota(): number {
            return this.nota
        }

        abstract descricaoCategoria(): string
    }


    class ProjetoVerde extends Projeto {

        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        descricaoCategoria(): string {
            return "Categoria: Projeto Verde (Plantio Urbano e Reflorestamento)"
        }
    }


    class ProjetoCultural extends Projeto {

        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        descricaoCategoria(): string {
            return "Categoria: Projeto Cultural (Conscientização Ambiental)"
        }
    }


    let projetos: Projeto[] = []
    let opcao = -1

    while (opcao !== 0) {
        opcao = Number(prompt("1 - Cadastrar Projeto Verde" + "2 - Cadastrar Projeto Cultural" + "3 - Exibir média e projetos acima da média" +"0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {

            let titulo = String(prompt("Informe o título do projeto verde:"))
            while (titulo === "") {
                console.log("O título não pode ser vazio!")
                titulo = String(prompt("Informe um título válido:"))
            }

            let coordenador = String(prompt("Informe o nome do coordenador:"))

            while (coordenador === "") {
                console.log("O coordenador não pode ser vazio!")
                coordenador = String(prompt("Informe um coordenador válido:"))
            }

            let nota = Number(prompt("Informe a nota do projeto (0 a 10):"))

            while (nota < 0 || nota > 10) {
                console.log("Nota inválida!")
                nota = Number(prompt("Informe uma nota entre 0 e 10:"))
            }

            let projetoVerde = new ProjetoVerde(titulo, coordenador, nota)

            projetos.push(projetoVerde)
            console.log("Projeto Verde cadastrado com sucesso!")

        } else if (opcao === 2) {

            let titulo = String(prompt("Informe o título do projeto cultural:"))

            while (titulo === "") {
                console.log("O título não pode ser vazio!")
                titulo = String(prompt("Informe um título válido:"))
            }

            let coordenador = String(prompt("Informe o nome do coordenador:"))

            while (coordenador === "") {
                console.log("O coordenador não pode ser vazio!")
                coordenador = String(prompt("Informe um coordenador válido:"))
            }

            let nota = Number(prompt("Informe a nota do projeto (0 a 10):"))

            while (nota < 0 || nota > 10) {
                console.log("Nota inválida!")
                nota = Number(prompt("Informe uma nota entre 0 e 10:"))
            }

            let projetoCultural = new ProjetoCultural(titulo, coordenador, nota)

            projetos.push(projetoCultural)
            console.log("Projeto Cultural cadastrado com sucesso!")

        } else if (opcao === 3) {
            if (projetos.length === 0) {
                console.log("Nenhum projeto foi cadastrado!")

            } else {
                let somaNotas = 0

                for (let i = 0; i < projetos.length; i++) {
                    somaNotas = somaNotas + projetos[i].getNota()
                }

                let mediaNotas = somaNotas / projetos.length
                console.log(`Média geral das notas: ${mediaNotas}`)
                console.log("Projetos com nota acima da média:")

                let encontrou = false
                for (let i = 0; i < projetos.length; i++) {
                    let projeto = projetos[i]

                    if (projeto.getNota() > mediaNotas) {
                        console.log(`Título: ${projeto.getTitulo()}`)
                        console.log(`Coordenador: ${projeto.getCoordenador()}`)
                        console.log(`Nota: ${projeto.getNota()}`)
                        console.log(projeto.descricaoCategoria())
                        encontrou = true
                    }
                }
                if (!encontrou) {
                    console.log("Nenhum projeto ficou acima da média.")
                }
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}