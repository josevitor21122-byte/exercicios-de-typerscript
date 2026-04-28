// 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.
// 4. Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

function gerar_lista_compras(): void {

    let lista: { nome: string, quantidade: number }[] = []
    let opcao = ""

    while (opcao !== "5") {

        opcao = prompt(
            "1 - Adicionar item\n" +
            "2 - Mostrar lista\n" +
            "3 - Quantidade de itens\n" +
            "4 - Remover item/n" +
            "5 - Sair"
        )

        if (opcao === "1") {
            let nome = prompt("Digite o nome do item:")!
            
            if (nome.toLowerCase() === "fim") break

            let quantidade = Number(prompt("Digite a quantidade:"))

            lista.push({ nome, quantidade })

        } else if (opcao === "2") {

            console.log("Lista de Compras: ")
            for (let i = 0; i < lista.length; i++) {
                console.log(lista[i].nome + " - " + lista[i].quantidade)
            }

        } else if (opcao === "3") {

            console.log("Quantidade de itens:", lista.length)

        } else if (opcao === "4") {

            let nomeRemover = prompt("Digite o nome do item para remover:")

            lista = lista.filter(item => item.nome !== nomeRemover)

            console.log("Item removido (se existia).")
        }
    }
}

gerar_lista_compras()