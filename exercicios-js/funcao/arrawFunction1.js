let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { return 2 * a }

dobro = a => 2 * a // retur implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())

function imprimir() {
    return 'Impressão'
}
console.log(imprimir())

imprimir = function () { return 'Impressão' }
console.log(imprimir())

imprimir = () => { return 'Impressão'}
console.log(imprimir())

imprimir = () => 'Impressão'
console.log(imprimir())

imprimir = _ => 'Impressão'
console.log(imprimir())
