console.log(soma(3,4))
// console.log(sub(3,4))
// function declaration; o interpretador já carrega na function declaration
function soma(x, y) {
    return x+y
}
// function expression // o interpretador só carrega depois
const sub = function (x,y){
    return x-y
}

// named function expression // o interpretador só carrega depois
const mult = function mult(x,y){
    return x*y
}

console.log(sub(3,4))
console.log(mult(3,4))