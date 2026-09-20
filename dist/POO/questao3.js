// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.
export function executarQuestao3() {
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
        exibir() {
            console.log(`Base: ${this.base}`);
            console.log(`Altura: ${this.altura}`);
            console.log(`Área: ${this.calcularArea()}`);
            console.log(`Perímetro: ${this.calcularPerimetro()}`);
        }
    }
    let meuRetangulo = new Retangulo(1, 2);
    meuRetangulo.mudarLados(10, 5);
    meuRetangulo.calcularArea();
    meuRetangulo.calcularPerimetro();
    meuRetangulo.exibir();
}
