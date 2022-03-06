const notas = [10, 6.5, 7.5, 8]
let somaNotas = 0

notas.forEach( nota => {
    somaNotas += nota
})

let media = somaNotas / notas.length

//console.log(media)

const nomes = ["Janaise", "Naiara", "Janathan", "Marise"]
const concatNome = " Vieira Gomes"

nomes.forEach( nome => {
    console.log(nome + concatNome)
})

