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
            this.pontuacao = this.pontuacao + quantidade
        }

        abstract realizarMissao(): void

        exibirDetalhes(): void {
            console.log(`Nickname: ${this.nickname}`)
            console.log(`Pontuação Atual: ${this.pontuacao} pontos`)
        }
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

    let opcao = -1

    while (opcao !== 0) {
        opcao = Number(prompt("1 - Cadastrar Jogador Comum" + "2 - Cadastrar Jogador Premium" + "3 - Realizar missão (escolher jogador)" + "4 - Exibir classificação final e destaque (> 1000 pts)" + "0 - Sair" + "Escolha uma opção:"))

        if (opcao === 1) {

            let nickname = String(("Informe o nickname do jogador comum:"))

            while (nickname === "") {
                console.log("O nickname não pode ser vazio!")
                nickname = String(prompt("Informe um nickname válido:"))
            }

            let jogador = new JogadorComum(nickname)

            jogadores.push(jogador)

            console.log("Jogador Comum cadastrado com sucesso!")
        } else if (opcao === 2) {

            let nickname = String(prompt("Informe o nickname do jogador premium:"))

            while (nickname === "") {
                console.log("O nickname não pode ser vazio!")
                nickname = String(prompt("Informe um nickname válido:"))
            }

            let jogador = new JogadorPremium(nickname)

            jogadores.push(jogador)

            console.log("Jogador Premium cadastrado com sucesso!")
        } else if (opcao === 3) {

            if (jogadores.length === 0) {
                console.log("Nenhum jogador foi cadastrado!")

            } else {

                let listaJogadoresTexto = "Escolha o número do jogador que realizou a missão:"

                for (let i = 0; i < jogadores.length; i++) {
                    listaJogadoresTexto = listaJogadoresTexto + (i + 1) + " - " + jogadores[i].getNickname() + ""
                }

                let escolhaJogador = Number(prompt(listaJogadoresTexto))

                while (escolhaJogador <= 0 || escolhaJogador > jogadores.length || escolhaJogador % 1 !== 0) {

                    console.log("Jogador inválido!")
                    escolhaJogador = Number(prompt("Escolha um número de jogador válido:"))
                }

                let indice = escolhaJogador - 1

                jogadores[indice].realizarMissao()

                console.log(`Missão realizada com sucesso pelo jogador ${jogadores[indice].getNickname()}`)
            }

        } else if (opcao === 4) {
            if (jogadores.length === 0) {

                console.log("Nenhum jogador foi cadastrado!")

            } else {

                for (let i = 0; i < jogadores.length; i++) {
                    let jogador = jogadores[i]

                    console.log(`${i + 1} Lugar:`)
                    jogador.exibirDetalhes()

                    if (jogador.getPontuacao() > 1000) {
                        console.log("Ultrapassou 1.000 pontos! Campeão do Arcade!")
                    }
                }
            }

        } else if (opcao === 0) {
            console.log("Programa encerrado!")

        } else {
            console.log("Opção inválida!")
        }
    }
}