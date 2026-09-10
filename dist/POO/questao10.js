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
        constructor(nome, fome = 0, saude = 100, idade = 0) {
            this.nome = nome;
            this.fome = fome;
            this.saude = saude;
            this.idade = idade;
        }
        alterarNome(novoNome) { this.nome = novoNome; }
        alterarFome(novaFome) { this.fome = novaFome; }
        alterarSaude(novaSaude) { this.saude = novaSaude; }
        alterarIdade(novaIdade) { this.idade = novaIdade; }
        retornarNome() { return this.nome; }
        retornarFome() { return this.fome; }
        retornarSaude() { return this.saude; }
        retornarIdade() { return this.idade; }
        retornarHumor() {
            const pontosHumor = this.saude - this.fome;
            if (pontosHumor >= 50) {
                return "Muito Feliz! ";
            }
            else if (pontosHumor >= 0) {
                return "Ok / Normal ";
            }
            else {
                return "Triste / Doente ";
            }
        }
        exibirStatus() {
            console.log(`Status de ${this.retornarNome()} ---`);
            console.log(`Idade: ${this.retornarIdade()} anos`);
            console.log(`Fome: ${this.retornarFome()}`);
            console.log(`Saúde: ${this.retornarSaude()}`);
            console.log(`Humor: ${this.retornarHumor()}`);
        }
    }
    const meuBichinho = new Tamagushi("Tama", 10, 90, 1);
    meuBichinho.exibirStatus();
    meuBichinho.alterarFome(80);
    meuBichinho.alterarSaude(30);
    meuBichinho.alterarIdade(2);
    meuBichinho.exibirStatus();
}
