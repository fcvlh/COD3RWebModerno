// middlawere pattern - Chain of Responsability

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    console.log('Antes next P1')
    next()
    console.log('Pós next P1')
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    console.log('Antes next P2')
    next()
    console.log('Pós next P2')
}
const passo3 = (ctx, next) => {
    console.log('Antes next P3')
    next()
    console.log('Pós next P3')
}
const passo4 = (ctx, next) => {
    console.log('Antes next P4')
    next()
    console.log('Pós next P4')
}
const passo5 = (ctx, next) => {
    console.log('Antes next P5')
    next()
    console.log('Pós next P5')
}
const passo6 = (ctx, next) => {
    console.log('Antes next P6')
    next()
    console.log('Pós next P6')
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))

    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3, passo4, passo5, passo6)

console.log(ctx)