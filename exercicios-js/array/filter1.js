const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

let arrayFilter = produtos.filter(function (produto) {
    return false
})
console.log(arrayFilter)

const filtroFragil = produto => produto.fragil
const filtroCaro = produto => produto.preco >= 500

arrayFilter = produtos.filter(filtroFragil).filter(filtroCaro)
console.log(arrayFilter)