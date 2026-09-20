// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.
export function executarQuestao4() {
    class Retangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        mudarLados(novaBase, novaAltura) {
            if (novaBase <= 0 || novaAltura <= 0) {
                console.log("Os lados devem ser maiores que zero.");
                return;
            }
            this.base = novaBase;
            this.altura = novaAltura;
        }
        retornarBase() {
            return this.base;
        }
        retornarAltura() {
            return this.altura;
        }
        calcularArea() {
            return this.base * this.altura;
        }
        calcularPerimetro() {
            return 2 * (this.base + this.altura);
        }
    }
    let comprimento = Number(prompt("Digite o comprimento do local (em metros): "));
    let largura = Number(prompt("Digite a largura do local (em metros): "));
    let local = new Retangulo(comprimento, largura);
    let pisos = local.calcularArea();
    let rodapes = local.calcularPerimetro();
    console.log(`Quantidade de pisos necessários: ${pisos}`);
    console.log(`Quantidade de rodapés necessários: ${rodapes}`);
}
