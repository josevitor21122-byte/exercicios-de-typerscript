// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function executarQuestao21(): void {

    abstract class ProjetoReforest {
        private titulo: string
        private coordenador: string
        protected nota: number

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
                console.log("Nota inválida! Deve estar entre 0 e 10.")
                this.nota = 0
            }
        }

        abstract obterDescricaoCategoria(): string
    }

    class ProjetoVerde extends ProjetoReforest {

        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        obterDescricaoCategoria(): string {
            return "Categoria: Projeto Verde"
        }
    }

    class ProjetoCultural extends ProjetoReforest {

        constructor(titulo: string, coordenador: string, nota: number) {
            super(titulo, coordenador, nota)
        }

        obterDescricaoCategoria(): string {
            return "Categoria: Projeto Cultural"
        }
    }

    let projetos: ProjetoReforest[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de projeto: | 1 - Projeto Verde | 2 - Projeto Cultural"))
        let titulo = String(prompt("Informe o título do projeto: "))
        let coordenador = String(prompt("Informe o nome do coordenador: "))
        let nota = Number(prompt("Informe a nota de avaliação (0 a 10): "))

        let projeto: ProjetoReforest

        if (tipo === "1") {
            projeto = new ProjetoVerde(titulo, coordenador, nota)
        } else {
            projeto = new ProjetoCultural(titulo, coordenador, nota)
        }

        projetos.push(projeto)

        continuar = String(prompt("Deseja cadastrar outro projeto (sim/não): "))
    }

    if (projetos.length === 0) {
        console.log("Nenhum projeto foi cadastrado!")
    } else {
        let somaNotas = 0

        for (let i = 0; i < projetos.length; i++) {
            somaNotas += projetos[i].getNota()
        }

        let mediaNotas = somaNotas / projetos.length

        console.log(`Média aritmética das notas: ${mediaNotas}`)
        console.log("Projetos com nota acima da média:")

        let encontrou = false

        for (let i = projetos.length - 1; i >= 0; i--) {
            let p = projetos[i]

            if (p.getNota() > mediaNotas) {
                console.log(`Título: ${p.getTitulo()} | Coordenador: ${p.getCoordenador()} | Nota: ${p.getNota()}`)
                console.log(p.obterDescricaoCategoria())
                encontrou = true
            }
        }

        if (encontrou) {
            console.log("Nenhum projeto ficou acima da média.")
        }
    }
}