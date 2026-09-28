// 25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o
// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.
export function executarQuestao25() {
    class Assinatura {
        constructor(email, valorMensal) {
            this.email = email;
            this.valorMensal = valorMensal;
        }
        getEmail() {
            return this.email;
        }
        getValorMensal() {
            return this.valorMensal;
        }
    }
    class AssinaturaPadrao extends Assinatura {
        constructor(email, valorMensal) {
            super(email, valorMensal);
        }
        exibirDetalhes() {
            console.log(`Plano: Padrão | E-mail: ${this.getEmail()} | Valor: R$ ${this.getValorMensal().toFixed(2)} | Benefícios: 2 telas simultâneas`);
        }
    }
    class AssinaturaPremium extends Assinatura {
        constructor(email, valorMensal) {
            super(email, valorMensal);
        }
        exibirDetalhes() {
            console.log(`Plano: Premium | E-mail: ${this.getEmail()} | Valor: R$ ${this.getValorMensal().toFixed(2)} | Benefícios: 4 telas simultâneas e suporte à resolução 4K`);
        }
    }
    let assinaturas = [];
    let continuar = "sim";
    while (continuar === "sim") {
        let tipo = String(prompt("Escolha o plano: | 1 - Padrão | 2 - Premium"));
        let email = String(prompt("Informe o e-mail do usuário: "));
        let valorMensal = Number(prompt("Informe o valor do plano mensal: "));
        if (tipo === "1") {
            assinaturas.push(new AssinaturaPadrao(email, valorMensal));
        }
        else {
            assinaturas.push(new AssinaturaPremium(email, valorMensal));
        }
        continuar = String(prompt("Cadastrar outro contrato (sim/não): "));
    }
    if (assinaturas.length > 0) {
        let emailBusca = String(prompt("Informe o e-mail que deseja buscar: "));
        let encontrou = false;
        for (let i = 0; i < assinaturas.length; i++) {
            let a = assinaturas[i];
            if (a.getEmail() === emailBusca) {
                a.exibirDetalhes();
                encontrou = true;
                break;
            }
        }
        if (encontrou) {
            console.log("Nenhum contrato encontrado para este e-mail.");
        }
    }
}
