// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function executarQuestao19(): void {

    abstract class Sensor {
        private codigo: string
        protected leitura: number

        constructor(codigo: string, leitura: number) {
            this.codigo = codigo
            this.leitura = leitura
        }

        getCodigo(): string {
            return this.codigo
        }

        getLeitura(): number {
            return this.leitura
        }

        abstract verificarAlerta(): boolean
        abstract exibirSensor(): void
    }

    class SensorTemperatura extends Sensor {

        constructor(codigo: string, leitura: number) {
            super(codigo, leitura)
        }

        verificarAlerta(): boolean {
            return this.leitura > 40
        }

        exibirSensor(): void {
            console.log(`Sensor de Temperatura : ${this.getCodigo()} | Leitura: ${this.getLeitura()}`)
        }
    }

    class SensorPressao extends Sensor {

        constructor(codigo: string, leitura: number) {
            super(codigo, leitura)
        }

        verificarAlerta(): boolean {
            return this.leitura > 5
        }

        exibirSensor(): void {
            console.log(`Sensor de Pressão [Código: ${this.getCodigo()}] | Leitura: ${this.getLeitura()}`)
        }
    }

    let sensores: Sensor[] = []
    let continuar = "sim"

    while (continuar === "sim") {

        let tipo = String(prompt("Escolha o tipo de sensor: | 1 - Sensor de Temperatura | 2 - Sensor de Pressão"))
        let codigo = String(prompt("Informe o código identificador do sensor: "))
        let leitura = Number(prompt("Informe o valor da última leitura registrada: "))

        let sensor: Sensor

        if (tipo === "1") {
            sensor = new SensorTemperatura(codigo, leitura)
        } else {
            sensor = new SensorPressao(codigo, leitura)
        }

        sensores.push(sensor)

        continuar = String(prompt("Deseja cadastrar outro sensor (sim/não): "))
    }

    if (sensores.length === 0) {
        console.log("Nenhum sensor foi cadastrado!")
    } else {

        let encontrouAlerta = false

        for (let i = 0; i < sensores.length; i++) {
            let s = sensores[i]

            if (s.verificarAlerta()) {
                s.exibirSensor()
                encontrouAlerta = true
            }
        }

        if (encontrouAlerta) {
            console.log("Nenhum sensor disparou alerta de perigo.")
        }
    }
}