Array.prototype.reduce2 = function(funcaoCallback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = funcaoCallback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (valor, total) => valor + total
let nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 10))