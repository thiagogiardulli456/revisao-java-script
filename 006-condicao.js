let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ')
let idade = entrada('Digite sua idade: ')

if (isNaN(idade)){
    console.log(`${nome} insira um valor numérico na idade!`);
} else{
    if (idade > 18) {
        console.log('bem-vindo ao site.');
    } else if (idade < 18) {
        console.log('você não tem idade para acessar o site.');
    } else {
        console.log('tá, tu tem 18, bem-avindo ao site.');
    }
}