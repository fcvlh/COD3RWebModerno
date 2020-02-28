const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
// const concatenacao = 'Olá 
//     ' + nome + '!'; // Não pode quebrar a linha no meio
const template = `
Olá 
${nome}!`;
console.log(concatenacao, template);

// expressões ...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
