let falar, falarDePessoa
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()