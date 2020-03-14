// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
let nome = 'Felipe'
const pessoa = {
    nome,
    ola: function() {
        return 'Versão antiga'
    },
    hello() {
        return 'Versão nova'
    }
}
let ola = pessoa.ola
console.log(pessoa, pessoa.nome, ola(), pessoa.hello());

// Classe
class Animal {
    falar() {
        return 'Au'
    }
}
class Cachorro extends Animal {
    latir() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())