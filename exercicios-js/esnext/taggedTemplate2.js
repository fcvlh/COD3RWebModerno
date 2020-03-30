function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const produto = 'Pratos'
const preco = 29.99
const precoParcela = 11
console.log(real `${produto}: 1x ${preco} ou 3x de ${precoParcela}.`)