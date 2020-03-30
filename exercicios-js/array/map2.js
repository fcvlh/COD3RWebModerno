const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lápis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
// precos = carrinho.map(function(value){
//     return JSON.parse(value).preco
// })

const paraObjeto = stringJson => JSON.parse(stringJson)
const apenasPreco = produto => produto.preco

let precos = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos)