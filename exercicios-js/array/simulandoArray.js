const quaseArray = {
    0:'Rafael',
    1:'Ana',
    2:'Bia'
    // ,'toArray': 
    //     function() {
    //         return Object.values(this)
    // }
}
console.log(quaseArray[0])
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toArray', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray.toArray())