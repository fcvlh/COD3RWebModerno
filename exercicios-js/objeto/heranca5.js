console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { return this.split('').reverse().join('') }

console.log('Felipe Carvalho'.reverse())

Array.prototype.first = function(){
    return this[0]
}

a1 = [1,2,3,4,5]
console.log(a1.first())
delete a1[0]
console.log(a1.first())
