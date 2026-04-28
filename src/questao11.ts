// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

function desenharTriangulo(numero: number): void {

    for (let i = 1; i <= numero; i++) {
        let linha = ""

        for (let j = 1; j <= i; j++) {
            linha += "*"
        }

        console.log(linha)
    }

}