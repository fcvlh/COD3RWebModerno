// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario, nome: 'João'}
// clone.nome ='João'
console.log(funcionario, clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'João', ...grupoA, 'Rafaela']
console.log(grupoFinal)