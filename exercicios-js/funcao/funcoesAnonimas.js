const soma = function (x, y) {
    return x + y
}

const subtracao = function (x, y) {
    return x - y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, subtracao)
imprimirResultado(3, 4, function (x, y) {
    return x * y
})

imprimirResultado(3, 4, (x, y) => x / y)

let pessoa = {
    falar: function(){
        console.log('Opa')
    }
}
pessoa.falar()

pessoa = { falar() { console.log('Opa2') } }
pessoa.falar()