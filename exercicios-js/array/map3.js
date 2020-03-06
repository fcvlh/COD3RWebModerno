Array.prototype.map2 = function(funcaoCallback){
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        // novoArray[i] = funcaoCallback(this[i], i, this)
        novoArray.push(funcaoCallback(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lápis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

const paraObjeto = stringJson => JSON.parse(stringJson)
const apenasPreco = produto => produto.preco

let precos = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(precos)