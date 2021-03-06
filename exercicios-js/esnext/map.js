const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set(`angular`, { framework: true })
// tecnologias.set('func'(){})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
    [function imprimir() { console.log('MapFunction()')}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas)
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

console.log(chavesVariadas.get('Função'))