// tagged template - processa o template dentro de uma função
function tag(parts, ...valores) {
    console.log(parts)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)