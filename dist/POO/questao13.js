// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).
export function executarQuestao13() {
    class Aluno {
        constructor(nome, nota1, nota2) {
            this.nome = nome;
            this.nota1 = nota1;
            this.nota2 = nota2;
        }
        calcularMedia() {
            return (this.nota1 + this.nota2) / 2;
        }
        verificarSituacao() {
            let media = this.calcularMedia();
            if (media >= 7) {
                console.log(`${this.nome} foi aprovado! Média: ${media}`);
            }
            else {
                console.log(`${this.nome} foi reprovado! Média: ${media}`);
            }
        }
    }
    let quantidade = Number(prompt("Quantos alunos deseja cadastrar?"));
    for (let i = 1; i <= quantidade; i++) {
        let nome = String(prompt(`Digite o nome do ${i}º aluno:`));
        let nota1 = Number(prompt("Digite a primeira nota:"));
        let nota2 = Number(prompt("Digite a segunda nota:"));
        let aluno = new Aluno(nome, nota1, nota2);
        aluno.verificarSituacao();
    }
}
