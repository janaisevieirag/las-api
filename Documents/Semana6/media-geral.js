const sala1 = [10, 8, 9, 6.5, 7, 8]
const sala2 = [8, 5, 6, 9, 7]
const sala3 = [9, 8, 5, 10, 8.5, 9]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala 1 é ${mediaSala(sala1)}`)
console.log(`A média da sala 2 é ${mediaSala(sala2)}`)
console.log(`A média da sala 3 é ${mediaSala(sala3)}`)

const notas = [10, 6, 8, 7, 7.5]

function media(notasTotal){
    const somaNotas = notasTotal.reduce((acum, atual) =>
    atual + acum, 0)
    return somaNotas/notas.length
}

console.log(`A média da sala é: ${media(notas)}`)