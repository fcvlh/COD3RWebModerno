function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
let tentativas = 0
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção ${opcao}`)
    tentativas++
} while (opcao != -1)

console.log(`Acabou com ${tentativas} tentativas`)