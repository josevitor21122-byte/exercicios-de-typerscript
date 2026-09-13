// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function executarQuestao2(): void {

    class Quadrado {
    private _tamanhoDoLado: number;

    constructor(tamanhoDoLado: number) {
        this._tamanhoDoLado = tamanhoDoLado;
    }

    mudarValorDoLado(novoLado: number): void {
        if (novoLado <= 0) {
            console.error("O tamanho do lado deve ser maior que zero.")
            return
        }
        this._tamanhoDoLado = novoLado;
    }

    retornarValorDoLado(): number {
        return this._tamanhoDoLado
    }

    calcularArea(): number {
        return this._tamanhoDoLado * this._tamanhoDoLado
    }
    }
    
    let quadrado = new Quadrado(3)
    console.log(`Lado inicial: ${quadrado.retornarValorDoLado()}`)
    console.log(`Área inicial: ${quadrado.calcularArea()}`)

}