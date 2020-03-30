function teste1(num) {
    if (num > 7)
        console.log(num); // Não fazer isso
        console.log('Final'); // Não fazer isso
}

function teste2(num) { 
    if (num > 7); { // cuidado com o ; nas estruturas de controle. Não utilizar
        console.log(num);
    }
}

teste2(6);
teste2(8);
