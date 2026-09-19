// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

export function executarQuestao17(): void {

class Usuario {
    protected id: number
    protected nomeCompleto: string
    protected tipo: string 

    constructor(id: number, nomeCompleto: string, tipo: string) {
        this.id = id
        this.nomeCompleto = nomeCompleto
        this.tipo = tipo
    }

    public getId(): number {
        return this.id
    }

    public getNomeCompleto(): string {
        return this.nomeCompleto
    }

    public getTipo(): string {
        return this.tipo
    }

    identificar(): void {
        console.log(`Usuário: ${this.nomeCompleto}`)
    }
}

class Aluno extends Usuario {
    private curso: string

    constructor(id: number, nomeCompleto: string, curso: string) {
        super(id, nomeCompleto, "A")
        this.curso = curso
    }

    identificar(): void {
        console.log(`aluno ${this.nomeCompleto}`) 
        console.log(`Curso: ${this.curso}`)
        console.log(`id: ${this.id}`)
    }
}

class Servidor extends Usuario {
    private departamento: string

    constructor(id: number, nomeCompleto: string, departamento: string) {
        super(id, nomeCompleto, "S")
        this.departamento = departamento
    }

    identificar(): void {
        console.log(`servidor: ${this.nomeCompleto}`)  
        console.log(`Depto: ${this.departamento}`)
        console.log(`id: ${this.id}`)
    }
}

let historicoPresenca: Usuario[] = []
let continuar = true

let totalAlunos = 0
let totalServidores = 0

while (continuar) {
    let opcao = String(prompt("Passar na catraca? Digite A para Aluno, S para Servidor ou F para Finalizar: "))
    if (opcao === "F") {
        continuar = false

    } else if (opcao === "A" || opcao === "S") {

        let id = Number(prompt("Digite o ID numérico: "))
        let nome = String(prompt("Digite o nome completo: "))

        if (opcao === "A") {
            let curso = String(prompt("Digite o curso do aluno: "))
            
            let novoAluno = new Aluno(id, nome, curso)
            historicoPresenca.push(novoAluno)
            
            console.log(`Aluno ${nome} registrado com sucesso!`)

        } else if (opcao === "S") {
            let depto = String(prompt("Digite o departamento do servidor: "))
            
            let novoServidor = new Servidor(id, nome, depto)
            historicoPresenca.push(novoServidor)
            totalServidores++
            console.log(`Servidor ${nome} registrado com sucesso!`)
        }

    } else {
        console.log("Opção inválida! Tente novamente.")
    }
}

for (let i = 0; i < historicoPresenca.length; i++) {
    let usuario = historicoPresenca[i]
    usuario.identificar()
}

console.log(`Total de Alunos: ${totalAlunos}`)
console.log(`Total de Servidores: ${totalServidores}`)
console.log(`Total Geral de Almoços: ${historicoPresenca.length}`)
}