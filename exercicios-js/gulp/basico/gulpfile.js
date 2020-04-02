const gulp = require('gulp')
const { series, parallel } = require('gulp')

antes1 = cb => {
    console.log('Antes 1')
    return cb()
}
antes2 = cb => {
    console.log('Antes 2')
    return cb()
}

function copiar(cb) {
    console.log('Tarefa de copiar!')
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

fim = cb => {
    console.log('Fim')
    return cb()
}


module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)