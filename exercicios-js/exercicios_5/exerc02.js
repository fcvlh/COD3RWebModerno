classificarTriangulo = function (lado1, lado2, lado3) {
    tipoTriangulo = ''
    if ((lado1 === lado2) && (lado2 === lado3)) {
        tipoTriangulo = 'Equilátero'
    }
    else if ((lado1 === lado2) || (lado2 === lado3) || (lado1 === lado3)) {
        tipoTriangulo = 'Isósceles'
    }
    else {
        tipoTriangulo = 'Escaleno'
    }
    return tipoTriangulo
}

console.log(classificarTriangulo(3, 3, 3))
console.log(classificarTriangulo(3, 3, 2))
console.log(classificarTriangulo(3, 1, 2))