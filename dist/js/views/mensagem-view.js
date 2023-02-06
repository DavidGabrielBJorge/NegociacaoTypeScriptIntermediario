import { View } from './view.js';
export class MensagemView extends View {
    //Coloca string para iformar que o update e o template sao do tipo string
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
