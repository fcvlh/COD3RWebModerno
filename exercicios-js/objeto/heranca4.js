function MeuObjeto(){}
class MeuObjeto2 {
    constructor(){}
}
console.log(MeuObjeto.prototype)
console.log(MeuObjeto.__proto__)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
const obj4 = new MeuObjeto2

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
console.log(MeuObjeto2.prototype === obj4.__proto__)
console.log(typeof MeuObjeto, typeof MeuObjeto.prototype, typeof MeuObjeto.__proto__)
console.log(typeof MeuObjeto2, typeof MeuObjeto2.prototype, typeof MeuObjeto2.__proto__)
console.log('----------------------------------------')

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.nome = 'Frederico'

obj1.falar()
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

