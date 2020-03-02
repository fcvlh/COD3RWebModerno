formatarValor = function(valor) {
    resultado = Math.round(valor)
    resultado = valor.toString().replace('.',',')
    return `R$${resultado}`
}

console.log(formatarValor(0.1 + 0.2))

