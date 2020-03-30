// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (event) {
    console.log('O evento ocorreu!')
    evento = event
    console.log(evento)
}