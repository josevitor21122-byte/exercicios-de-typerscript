// 32. Desenvolva o motor de pontuação de um jogo arcade. A superclasse Jogador possui os atributos
// privados nickname e pontuacao (iniciada em zero), sendo pontuação acessível somente pelo método
// realizarMissao() — nunca diretamente. JogadorComum ganha 100 pontos por missão.
// JogadorPremium sobrescreve realizarMissao() e acumula 150 pontos (100 + 50% de bônus). O
// programa solicita ao usuário o tipo e o apelido de cada jogador. A cada rodada, o usuário informa qual
// jogador realizou uma missão. Ao final do torneio, o programa exibe a classificação completa e destaca
// quem ultrapassou 1.000 pontos.
// Requisitos mínimos:
// • pontuacao privada: modificada apenas por realizarMissao(), nunca diretamente.
// • JogadorPremium sobrescreve realizarMissao() com bônus de 50%.
// • Getter getPontuacao() para leitura controlada.
// • Loop de rodadas com condição de parada por comando do usuário.
// • Exibição final com classificação e destaque para campeões.

export function executarQuestao32(): void {

    abstract class Jogador {
        private nickname: string
        private pontuacao: number

        constructor(nickname: string) {
            this.nickname = nickname
            this.pontuacao = 0
        }

        getNickname(): string {
            return this.nickname
        }

        getPontuacao(): number {
            return this.pontuacao
        }

        protected somarPontos(quantidade: number): void {
            this.pontuacao += quantidade
        }

        abstract realizarMissao(): void
    }

    class JogadorComum extends Jogador {

        constructor(nickname: string) {
            super(nickname)
        }

        realizarMissao(): void {
            this.somarPontos(100)
        }
    }

    class JogadorPremium extends Jogador {

        constructor(nickname: string) {
            super(nickname)
        }

        realizarMissao(): void {
            this.somarPontos(150)
        }
    }

    let jogadores: Jogador[] = []
    let continuarCadastro = "sim"

    while (continuarCadastro === "sim") {
        let tipo = String(prompt("Escolha o tipo de jogador: | 1 - Jogador Comum | 2 - Jogador Premium"))
        let nickname = String(prompt("Informe o nickname do jogador: "))

        let jogador: Jogador

        if (tipo === "1") {
            jogador = new JogadorComum(nickname)
        } else {
            jogador = new JogadorPremium(nickname)
        }

        jogadores.push(jogador)

        continuarCadastro = String(prompt("Deseja cadastrar outro jogador (sim/não): "))
    }

    if (jogadores.length === 0) {
        console.log("Nenhum jogador foi cadastrado!")
    } else {
        let continuarRodadas = "sim"

        while (continuarRodadas === "sim") {
            let listaTexto = "Escolha qual jogador realizou uma missão:"

            for (let i = 0; i < jogadores.length; i++) {
                listaTexto += `${i + 1} - ${jogadores[i].getNickname()}`
            }

            let escolha = Number(prompt(listaTexto))
            let indice = escolha - 1

            if (indice >= 0 && indice < jogadores.length) {
                jogadores[indice].realizarMissao()
                console.log(`Missão realizada por: ${jogadores[indice].getNickname()} | Pontuação atual: ${jogadores[indice].getPontuacao()}`)
            } else {
                console.log("Jogador inválido!")
            }

            continuarRodadas = String(prompt("Deseja registrar outra missão em nova rodada (sim/não): "))
        }

        for (let i = 0; i < jogadores.length; i++) {
            let j = jogadores[i]
            console.log(`${i + 1} Lugar | Nickname: ${j.getNickname()} | Pontuação: ${j.getPontuacao()}`)

            if (j.getPontuacao() > 1000) {
                console.log("Ultrapassou 1.000 pontos, Campeão do Arcade")
            }
        }
    }

    console.log("Programa encerrado!")
}