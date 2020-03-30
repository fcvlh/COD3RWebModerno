const aprovados = ['Ágatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(value, index, array){
    console.log(`${index+1}: ${value}`)
    if (index == (array.length-1)) { 
        array.pop()
        array.shift()
    }
})
console.log(aprovados)

aprovados.forEach(nome => console.log(nome))

exibirAprovados = nome => console.log(nome)

aprovados.forEach(exibirAprovados)