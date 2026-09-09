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
            this._base = base;
            this._altura = altura;
        }
        mudarLados(novaBase, novaAltura) {
            if (novaBase <= 0 || novaAltura <= 0) {
                console.log("Os lados devem ser maiores que zero.");
                return;
            }
            this._base = novaBase;
            this._altura = novaAltura;
        }
        retornarBase() {
            return this._base;
        }
        retornarAltura() {
            return this._altura;
        }
        calcularArea() {
            return this._base * this._altura;
        }
        calcularPerimetro() {
            return 2 * (this._base + this._altura);
        }
        exibir() {
            console.log(`Base: ${this._base} | Altura: ${this._altura}\nÁrea: ${this.calcularArea()}\nPerímetro: ${this.calcularPerimetro()}`);
        }
    }
    let meuRetangulo = new Retangulo(1, 2);
    meuRetangulo.mudarLados(10, 5);
    meuRetangulo.calcularArea();
    meuRetangulo.calcularPerimetro();
    meuRetangulo.exibir();
}
