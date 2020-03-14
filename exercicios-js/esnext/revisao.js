// let e const
{
    var a = 2
    let b = 3
    const c = 4
    console.log(a, b, c)
}

console.log(a) // b está fora do escopo de bloco

// Template String ``
const produto = 'iPad'
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l);
console.log(e);
console.log(tras);

const [x, , y] = [1, 2, 3]
console.log(x, y);

const pessoa = {}
pessoa.id = 1
pessoa.nome = 'Felipe'
pessoa.idade = 36
pessoa.altura = 1.88
pessoa.peso = 92

const {nome: n, idade} = pessoa 
console.log(n, idade);
