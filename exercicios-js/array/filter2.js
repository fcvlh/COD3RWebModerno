Array.prototype.filter2 = function(funcaoCallback) {
    let arrayFilter = new Array
    for (let i = 0; i < this.length; i++) {
        if (funcaoCallback(this[i], i, this)) {
            arrayFilter.push(this[i])
        }
    }
    return arrayFilter
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const filtroFragil = produto => produto.fragil
const filtroCaro = produto => produto.preco >= 500

arrayFilter = produtos.filter2(filtroFragil).filter2(filtroCaro)
console.log(arrayFilter)