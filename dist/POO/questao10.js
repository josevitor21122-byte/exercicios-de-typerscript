// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.
export function executarQuestao10() {
    class Tamagushi {
        constructor(nome, fome, saude, idade) {
            this.nome = nome;
            this.fome = fome;
            this.saude = saude;
            this.idade = idade;
        }
        alterarNome(nome) {
            this.nome = nome;
        }
        alterarFome(fome) {
            this.fome = fome;
        }
        alterarSaude(saude) {
            this.saude = saude;
        }
        alterarIdade(idade) {
            this.idade = idade;
        }
        retornarNome() {
            return this.nome;
        }
        retornarFome() {
            return this.fome;
        }
        retornarSaude() {
            return this.saude;
        }
        retornarIdade() {
            return this.idade;
        }
        retornarHumor() {
            return (this.saude + (100 - this.fome)) / 2;
        }
    }
    let bichinho = new Tamagushi("Amarelinho", 40, 80, 4);
    console.log("Nome: ", bichinho.retornarNome());
    console.log("Fome: ", bichinho.retornarFome());
    console.log("Saúde: ", bichinho.retornarSaude());
    console.log("Idade: ", bichinho.retornarIdade());
    console.log("Humor: ", bichinho.retornarHumor());
}
