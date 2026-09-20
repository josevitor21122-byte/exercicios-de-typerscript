// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
export function executarQuestao2() {
    class Quadrado {
        constructor(tamanhoDoLado) {
            this._tamanhoDoLado = tamanhoDoLado;
        }
        mudarValorDoLado(novoLado) {
            if (novoLado <= 0) {
                console.error("O tamanho do lado deve ser maior que zero.");
                return;
            }
            this._tamanhoDoLado = novoLado;
        }
        retornarValorDoLado() {
            return this._tamanhoDoLado;
        }
        calcularArea() {
            return this._tamanhoDoLado * this._tamanhoDoLado;
        }
    }
    let quadrado = new Quadrado(3);
    console.log(`Lado inicial: ${quadrado.retornarValorDoLado()}`);
    console.log(`Área inicial: ${quadrado.calcularArea()}`);
}
