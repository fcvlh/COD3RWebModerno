const porta = 3003
const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto)
})

// app.post('/produtos',(req, res, next) => {
//     res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON automaticamente pelo send
// })
// app.get('/produtos',(req, res, next) => {
//     console.log('Middleware 1')
//     next()
// })
// app.get('/produtos',(req, res, next) => {
//     console.log('Middleware 2')
//     res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON automaticamente pelo send
//     next()
// })
// app.use((req, res, next) => {
//     console.log('Middleware USE')
//     //res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON automaticamente pelo send
//     next()
// })

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})