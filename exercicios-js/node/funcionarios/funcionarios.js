const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const paises = funcionario => funcionario.pais
const funcionarioChina = funcionario => funcionario.pais == 'China'
const funcionaria = funcionario => funcionario.genero == 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario > funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(funcionarioChina).filter(funcionaria).reduce(menorSalario))
    
})

// A mulher chinesa com o menor salário
