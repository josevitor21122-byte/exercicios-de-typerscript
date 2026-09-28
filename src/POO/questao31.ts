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

        getTitulo(): string {
            return this.titulo
        }

        getCoordenador(): string {
            return this.coordenador
        }

        getNota(): number {
            return this.nota
        }

        setNota(valor: number): void {
            if (valor >= 0 && valor <= 10) {
                this.nota = valor
            } else {
                console.log("Nota inválida! Deve estar entre 0 e 10. Atribuindo nota 0 por padrão.")
                this.nota = 0
            }
        }

        abstract descricaoCategoria(): string
    }


    class ProjetoVerde extends Projeto {

        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        descricaoCategoria(): string {
            return "Categoria: Projeto Verde"
        }
    }


    class ProjetoCultural extends Projeto {

        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        descricaoCategoria(): string {
            return "Categoria: Projeto Cultural"
        }
    }

    let projetos: Projeto[] = []
    let continuarCadastro = "sim"

    while (continuarCadastro === "sim") {
        let tipo = String(prompt("Escolha o tipo de projeto: | 1 - Projeto Verde | 2 - Projeto Cultural"))
        let titulo = String(prompt("Informe o título do projeto: "))
        let coordenador = String(prompt("Informe o nome do coordenador: "))
        let nota = Number(prompt("Informe a nota do projeto (0 a 10): "))

        let projeto: Projeto

        if (tipo === "1") {
            projeto = new ProjetoVerde(titulo, coordenador, nota)
        } else {
            projeto = new ProjetoCultural(titulo, coordenador, nota)
        }

        projetos.push(projeto)

        continuarCadastro = String(prompt("Deseja cadastrar outro projeto (sim/não): "))
    }

    if (projetos.length === 0) {
        console.log("Nenhum projeto foi cadastrado")
    } else {
        let somaNotas = 0

        for (let i = 0; i < projetos.length; i++) {
            somaNotas += projetos[i].getNota()
        }

        let mediaNotas = somaNotas / projetos.length

        console.log(`Média geral das notas dos projetos: ${mediaNotas}`)
        console.log("Projetos com nota acima da média:")

        let encontrouAcimaDaMedia = false

        for (let i = 0; i < projetos.length; i++) {
            let p = projetos[i]

            if (p.getNota() > mediaNotas) {
                console.log(`Título: ${p.getTitulo()} | Coordenador: ${p.getCoordenador()} | Nota: ${p.getNota()}`)
                console.log(p.descricaoCategoria())
                encontrouAcimaDaMedia = true
            }
        }

        if (encontrouAcimaDaMedia) {
            console.log("Nenhum projeto ficou acima da média.")
        }
    }
}