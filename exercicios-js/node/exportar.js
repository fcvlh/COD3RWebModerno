console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log("1",module.exports)
console.log("2",exports)

exports = {
    nome: 'Teste'
}

console.log(1, module.exports)
console.log(2, exports)
