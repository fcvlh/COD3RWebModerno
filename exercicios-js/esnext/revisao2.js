// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports, typeof this)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

const lexico3 = function(){ 
    console.log(this === exports, typeof this)
}
const lexico4 = lexico3.bind({})
lexico3()
lexico4()

function lxc() {
    console.log(this === exports, typeof this)
}
const lexico5 = lxc
lexico5()

// Parâmetros default
function log(texto = 'Node') { console.log(texto)}
log(undefined)

// Operador spread / rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,6))