const escola = "Cod3r";

console.log(escola.charAt(4)); // Retorna a posição 5, baseado em 0
console.log(escola.charAt(5)); // Não dá erro, retorna vazio quando o tamanho é menor que o índice
console.log(escola.charCodeAt(3)); // Valor na tabela ASCII/UNICODE
console.log(escola.indexOf(3)); // Localiza o caractere na string
console.log(escola.substring(1)); 
console.log(escola.substring(0,3));  // O segundo parâmetro é excluído
console.log('Escola '.concat(escola).concat("!")); 

console.log(escola.replace(3, 'e')); 
console.log(escola.replace(/\d/g, 'e')); // Expressão regular

console.log('Ana,Maria,Pedro'.split(',')); // Gera um array
console.log('Ana,Maria,Pedro'.split(/,/g)); // Gera um array






