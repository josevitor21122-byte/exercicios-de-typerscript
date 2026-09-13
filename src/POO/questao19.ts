// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista eexibe o faturamento total do estabelecimento.

export function executarQuestao19(): void {

abstract class Sensor {
    private codigo: number
    private leitura: number

    constructor(codigo: number, leitura: number) {
        this.codigo = codigo
        this.leitura = leitura
    }

    getCodigo(): number {
        return this.codigo
    }

    getLeitura(): number {
        return this.leitura
    }

    setCodigo(codigo: number): void {
        this.codigo = codigo
    }

    setLeitura(leitura: number): void {
        this.leitura = leitura
    }

    abstract exibirLeitura(): void
    abstract possuiAlerta(): boolean
    abstract exibirMensagemAlerta(): void
}

class SensorTemperatura extends Sensor {
    exibirLeitura(): void {
        console.log(`Sensor ${this.getCodigo()}: ${this.getLeitura()} °C`)
    }

    possuiAlerta(): boolean {
        return this.getLeitura() > 40
    }
    
    exibirMensagemAlerta(): void {
        console.log("ALERTA: Temperatura acima de 40°C!")
    }
}

class SensorPressao extends Sensor {
    exibirLeitura(): void {
        console.log(`Sensor ${this.getCodigo()}: ${this.getLeitura()} atm`)
    }

    possuiAlerta(): boolean {
        return this.getLeitura() > 5
    }

    exibirMensagemAlerta(): void {
        console.log("ALERTA: Pressão acima de 5 atm!")
    }
}

    let sensores: Sensor[] = []

    while (true) {
        console.log("1 - Sensor de Temperatura")
        console.log("2 - Sensor de Pressão")
        console.log("0 - Finalizar cadastro")

        const opcao: number = Number(prompt("Digite a opção: "));

        if (opcao === 0) break

        if (opcao !== 1 && opcao !== 2) {
            console.log("Opção inválida!")
            continue
        }

        const codigo: number = Number(prompt("Digite o código do sensor: "))
        const leitura: number = Number(prompt("Digite a última leitura registrada: "))

        if (opcao === 1) {
            sensores.push(new SensorTemperatura(codigo, leitura))
            console.log("Sensor de temperatura cadastrado!")
        } else {
            sensores.push(new SensorPressao(codigo, leitura))
            console.log("Sensor de pressão cadastrado!")
        }
    }

    let sensoresEmAlerta: Sensor[] = sensores.filter((sensor) => sensor.possuiAlerta())

    if (sensoresEmAlerta.length === 0) {
        console.log("Nenhum sensor disparou alerta de perigo.");
    } else {
        console.log("Sensores que dispararam alerta: ")

        for (const sensor of sensoresEmAlerta) {
            sensor.exibirLeitura()
            sensor.exibirMensagemAlerta()
        }
    }
}
