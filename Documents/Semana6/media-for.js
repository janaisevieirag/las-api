const notas = [10, 9.5, 6.7, 7];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let media = somaNotas / notas.length

console.log(somaNotas);
console.log(media);