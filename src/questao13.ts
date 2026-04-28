// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

function mostrarMultiplosDe3(inicio: number, fim: number): void {

    for (let i = inicio; i <= fim; i++) {

        if (i % 3 === 0) {
            console.log(i)
        }

    }

}