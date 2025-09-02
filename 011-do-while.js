let entrada = require('prompt-sync')();

const senha =1475369;

do{
    senhaDigitada = entrada('Digite a senha para acessar o sistema: ');
} while (senhaDigitada != senha);

console.log('Bem vindo ao sistema de login!');