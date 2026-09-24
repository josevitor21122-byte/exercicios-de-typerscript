// 25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o

// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.

export function executarQuestao25(): void {
abstract class Assinatura {

    private email: string
    private valorPlano: number

    constructor(email: string, valorPlano: number) {
        this.email = email
        this.valorPlano = valorPlano
    }

    public getEmail(): string {
        return this.email
    }

    public getValorPlano(): number {
        return this.valorPlano
    }

    public abstract getTipo(): string
    public abstract mostrarBeneficios(): void

    public mostrarContrato(): void {
        console.log(`E-mail: ${this.email}`)
        console.log(`Plano: ${this.getTipo()}`)
        console.log(`Valor mensal: R$ ${this.getValorPlano()}`)

        this.mostrarBeneficios()
    }
}


class AssinaturaPadrao extends Assinatura {

    constructor(email: string, valorPlano: number) {
        super(email, valorPlano)
    }

    public getTipo(): string {
        return "Padrão"
    }

    public mostrarBeneficios(): void {
        console.log(`Telas simultâneas: 2`)
        console.log(`Resolução 4K: Não incluída`)
    }
}


class AssinaturaPremium extends Assinatura {

    constructor(email: string, valorPlano: number) {
        super(email, valorPlano)
    }

    public getTipo(): string {
        return "Premium"
    }

    public mostrarBeneficios(): void {
        console.log(`Telas simultâneas: 4`)
        console.log(`Resolução 4K: Incluída`)
    }
}

    let contratos: Assinatura[] = []
    let opcao: number = 0

    while (opcao !== 3) {
        console.log(`1 - Cadastrar cliente`)
        console.log(`2 - Buscar cliente`)
        console.log(`3 - Sair`)

        opcao = Number(prompt(`Digite uma opção:`))

        if (opcao === 1) {

            let email: string = String(prompt(`Digite o e-mail do cliente: `))

            console.log(`1 - Plano Padrão`)
            console.log(`2 - Plano Premium`)

            let plano: number = Number(prompt(`Escolha o plano: `))
            let valor: number = Number(prompt(`Digite o valor mensal do plano: `))

            if (plano === 1) {

                let assinatura: AssinaturaPadrao = new AssinaturaPadrao(email, valor)

                contratos.push(assinatura)
                console.log(`Cliente cadastrado no plano Padrão!`)

            } else if (plano === 2) {

                let assinatura: AssinaturaPremium = new AssinaturaPremium(email, valor)

                contratos.push(assinatura)
                console.log(`Cliente cadastrado no plano Premium!`)

            } else {
                console.log(`Plano inválido.`)
            }


        } else if (opcao === 2) {

            let emailBusca: string = String(prompt(`Digite o e-mail para buscar: `))

            let encontrou: boolean = false

            for (let i = 0; i < contratos.length; i++) {

                if (contratos[i].getEmail() === emailBusca) {
                    contratos[i].mostrarContrato()

                    encontrou = true
                }
            }

            if (encontrou === false) {

                console.log(`Nenhum contrato encontrado.`)
            }


        } else if (opcao === 3) {
            console.log(`Programa encerrado.`)

        } else {
            console.log(`Opção inválida.`)
        }
    }
}