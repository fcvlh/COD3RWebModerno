const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.defineProperty(pessoa,'dataNascimento', {
    enumerable: true, // Não lista quando é chamado o Object.keys
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '31/07/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1  = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2, pessoa)
console.log(obj)
console.log(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
Object.freeze(obj) 