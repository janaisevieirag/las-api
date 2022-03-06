const nomes = ['Julia', 'Pedro', 'Paulo', 'Maria']
const notas = [7, 8, 4, 4.7]

const reprovados = nomes.filter((aluno, indice) => notas[indice]<5)

console.log(`Reprovados: ${reprovados}`)