import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
//Caso o form não seja null
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}
//Como o null foi tratado com a condição IF e ESLSE o TS não vai reclamar
