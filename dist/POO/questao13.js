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
        verificarAprovacao() {
            const media = (this.nota1 + this.nota2) / 2;
            const status = media >= 7 ? "APROVADO!" : "REPROVADO!";
            console.log(`• Aluno(a): ${this.nome} | Média: ${media} | Situação: ${status}`);
        }
    }
    let listaAlunos = [];
    listaAlunos.push(new Aluno("Guilherme", 8.5, 7.0));
    listaAlunos.push(new Aluno("Beatriz", 5.5, 6.0));
    listaAlunos.push(new Aluno("Thiago", 9.0, 10.0));
    for (let aluno of listaAlunos) {
        aluno.verificarAprovacao();
    }
}
