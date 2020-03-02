simples = function(capitalInicial, taxaDeJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * (taxaDeJuros/100) * tempoAplicacao)
}

console.log(simples(1000, 10, 1))