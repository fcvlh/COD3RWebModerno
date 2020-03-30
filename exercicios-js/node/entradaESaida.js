const anonimo = process.argv.indexOf('-a') !== -1
const anonimoT = process.argv
console.log(anonimoT)
console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
}
else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data2 => {
        const nome = data2.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}! \n`)
        process.exit()
    })
}