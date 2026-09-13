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
    abstract class Usuario {
        private identificador: number
        private nome: string

        constructor(identificador: number, nome: string) {
            this.identificador = identificador
            this.nome = nome
        }

        getIdentificador(): number {
            return this.identificador
        }

        setIdentificador(identificador: number): void {
            this.identificador = identificador
        }

        getNome(): string {
            return this.nome
        }

        setNome(nome: string): void {
            this.nome = nome
        }

        abstract identificar(): void
    }

    class Aluno extends Usuario {
        private curso: string

        constructor(identificador: number, nome: string, curso: string) {
            super(identificador, nome)
            this.curso = curso
        }

        getCurso(): string {
            return this.curso
        }

        setCurso(curso: string): void {
            this.curso = curso
        }

        identificar(): void {
            console.log(`Aluno: ${this.getNome()}`)
            console.log(`Curso: ${this.getCurso()}`)
        }
    }

    class Servidor extends Usuario {
        private departamento: string

        constructor(identificador: number, nome: string, departamento: string) {
        super(identificador, nome)
        this.departamento = departamento
        }

        getDepartamento(): string {
            return this.departamento
        }

        setDepartamento(departamento: string): void {
            this.departamento = departamento
        }

        identificar(): void {
            console.log(`Servidor: ${this.getNome}`)
            console.log(`Departamento: ${this.getDepartamento}`)
        }
    }

    let usuarios: Usuario[] = []
    let historico: Usuario[] = []

    let quantidade = Number(prompt("Quantos usuário deseja cadastrar na fila ?"))

    for (let i = 0; i < quantidade; i++) {
        console.log(`Cadastro do usuário ${i + 1}`)

        let identificador = Number(prompt("Identificador:"))
        let nome = String(prompt("Nome completo: "))
        let tipo = String(prompt("Digite A para Aluno ou S para Servidor: "))

        if (tipo === "A") {
            let curso = String(prompt("Curso: "))
            let aluno = new Aluno(identificador, nome, curso)
            usuarios.push(aluno)
        } else if (tipo === "S") {
            let departamento = String(prompt("Departamento: "))
            let servidor = new Servidor(identificador, nome, departamento)
            usuarios.push(servidor)
        } else {
            console.log("Tipo de usuário inválido!")
            i--
        }
    }
    
    console.log("Digite o identificador do usuário que passou.")
    console.log("Digite 0 para encerrar.")

  while (true) {
    const idCatraca = Number(prompt("Identificador do usuário: "))

    if (idCatraca === 0) {
      break
    }

    let usuarioEncontrado: Usuario | undefined
    for (const usuario of usuarios) {
      if (usuario.getIdentificador() === idCatraca) {
        usuarioEncontrado = usuario
        break
      }
    }

    if (usuarioEncontrado !== undefined) {
      historico.push(usuarioEncontrado)
      console.log(`${usuarioEncontrado.getNome()} teve o acesso registrado.`)
    } else {
      console.log("Usuário não encontrado!")
    }
  }

  for (const usuario of historico) {
    usuario.identificar()
  }

  let quantidadeAlunos = 0
  let quantidadeServidores = 0

  for (const usuario of historico) {
    if (usuario instanceof Aluno) {
      quantidadeAlunos++
    } else if (usuario instanceof Servidor) {
      quantidadeServidores++
    }
  }
  console.log(`Total de acessos de alunos: ${quantidadeAlunos}`)
  console.log(`Total de acessos de servidores: ${quantidadeServidores}`)
  console.log(`Total geral de acessos: ${historico.length}`)
        
}