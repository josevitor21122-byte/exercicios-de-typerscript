// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.


export function executarQuestao3(): void {
class Retangulo {
    private _base: number;
    private _altura: number;

    constructor(base: number, altura: number) {
        this._base = base;
        this._altura = altura;
    }

    public mudarLados(novaBase: number, novaAltura: number): void {
        if (novaBase <= 0 || novaAltura <= 0) {
            console.error("Os lados devem ser maiores que zero.");
            return;
        }
        this._base = novaBase;
        this._altura = novaAltura;
    }

    public retornarBase(): number {
        return this._base;
    }

    public retornarAltura(): number {
        return this._altura;
    }

    public calcularArea(): number {
        return this._base * this._altura;
    }

    public calcularPerimetro(): number {
        return 2 * (this._base + this._altura);
    }
}
    const meuRetangulo = new Retangulo(10, 5);
}