function tratarErroELanca(erro) {
    console.log('TrataErro')
    // throw new Error('[mensagem erro]');
    // throw 10;
    // throw 'mensagem';
    // throw erro;
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch (e) {
        tratarErroELanca(e);
    }
    finally {
        console.log('Final');
    }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);
console.log('Continuando...')