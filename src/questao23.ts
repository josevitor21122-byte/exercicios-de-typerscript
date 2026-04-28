// 6. Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.

let nomes: string[] = []

for (let i = 0; i < 15; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":")!

    nomes.push(nome)
}

console.log("Nomes digitados:")
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

nomes.sort()

console.log("Nomes ordenados:")
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}