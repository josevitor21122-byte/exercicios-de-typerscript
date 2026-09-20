// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.
export function executarQuestao19() {
    class Sensor {
        constructor(codigo, leitura, tipo) {
            this._codigo = codigo;
            this._leitura = leitura;
            this.tipo = tipo;
        }
        getCodigo() {
            return this._codigo;
        }
        getLeitura() {
            return this._leitura;
        }
        getTipo() {
            return this.tipo;
        }
        setCodigo(codigo) {
            this._codigo = codigo;
        }
        setLeitura(leitura) {
            this._leitura = leitura;
        }
        passouDoLimite() {
            return false;
        }
        exibirLeituraFormatada() {
            console.log(`Sensor: ${this._codigo}`);
            console.log(`Leitura: ${this._leitura}`);
        }
    }
    class SensorTemperatura extends Sensor {
        constructor(codigo, leitura) {
            super(codigo, leitura, "T");
        }
        passouDoLimite() {
            return this.getLeitura() > 40;
        }
        exibirLeituraFormatada() {
            console.log(`Código: ${this.getCodigo()}`);
            console.log(`Valor: ${this.getLeitura()}`);
        }
    }
    class SensorPressao extends Sensor {
        constructor(codigo, leitura) {
            super(codigo, leitura, "P");
        }
        passouDoLimite() {
            return this.getLeitura() > 5;
        }
        exibirLeituraFormatada() {
            console.log(`Código: ${this.getCodigo()}`);
            console.log(`Valor: ${this.getLeitura()}`);
        }
    }
    let listaSensores = [];
    let continuarLeitura = true;
    while (continuarLeitura) {
        let opcao = String(prompt("Monitoramento de Sensores Digite: T - Sensor de Temperatura P - Sensor de Pressão F: "));
        if (opcao === "F") {
            continuarLeitura = false;
        }
        else if (opcao === "T" || opcao === "P") {
            let codigo = String(prompt("Digite o código do sensor: "));
            let leitura = Number(prompt("Digite o valor da última leitura: "));
            if (opcao === "T") {
                let sensTemp = new SensorTemperatura(codigo, leitura);
                listaSensores.push(sensTemp);
                console.log(`Sensor de Temperatura ${codigo} registrado!`);
            }
            else if (opcao === "P") {
                let sensPres = new SensorPressao(codigo, leitura);
                listaSensores.push(sensPres);
                console.log(`Sensor de Pressão ${codigo} registrado!`);
            }
        }
        else {
            console.log("Opção inválida!");
        }
    }
    let totalAlertas = 0;
    for (let i = 0; i < listaSensores.length; i++) {
        let sensorAtual = listaSensores[i];
        if (sensorAtual.passouDoLimite()) {
            sensorAtual.exibirLeituraFormatada();
            totalAlertas++;
            console.log("Status: PERIGO ");
        }
    }
    if (totalAlertas === 0) {
        console.log("Todos os sensores operando dentro dos limites seguros.");
    }
    else {
        console.log(`Total de sensores com alerta: ${totalAlertas}`);
    }
}
