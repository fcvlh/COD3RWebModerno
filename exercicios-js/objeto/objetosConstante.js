// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' ,endereco: { rua: 'abc'}}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.endereco.rua = 'cdef'
console.log(pessoa)
