// Array.prototype.forEach2 = function (funcaoCallback) {
//     for (let i = 0; i < this.length; i++) {
//         funcaoCallback(this[i], i, this)
//     }
// }
let aprovados = ['Ágatha', 'Aldo', 'Daniel', 'Raquel']

Object.defineProperty(aprovados, 'forEach2', {
    value: function(funcaoCallback) {
        for (let i = 0; i < this.length; i++) {
            funcaoCallback(this[i], i, this)
        }
    },
    enumerable: false
})

aprovados.forEach2(function(value, index, array){
    console.log(`${index+1}: ${value}`)
    if (index == (array.length-1)) { 
        array.pop()
        array.shift()
    }
})

console.log(aprovados)
