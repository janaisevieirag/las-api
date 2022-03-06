const alunos = ['Jana', 'Rafa', 'Dezza', 'Gabriel', 'Nai'];
const medias = [8, 10, 7, 8, 9.5];
const listaDeNomesENotas = [alunos, medias]

const exibeNotasEAlunos = (nomeDoAluno) =>{
    if (listaDeNomesENotas[0].includes(nomeDoAluno)){
        let indice = listaDeNomesENotas[0].indexOf(nomeDoAluno)
        return listaDeNomesENotas[0][indice] + ', a sua média é: ' + listaDeNomesENotas[1][indice]
    }else{
        return 'O aluno não está cadastrado'
    }
}

console.log(exibeNotasEAlunos("Nai"))