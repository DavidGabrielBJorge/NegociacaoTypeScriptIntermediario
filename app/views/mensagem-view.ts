import { View } from './view.js'

export class MensagemView extends View<string>{
    //Coloca string para iformar que o update e o template sao do tipo string

    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

}