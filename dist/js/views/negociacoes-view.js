import { View } from './view.js';
export class NegociacoesView extends View {
    //Coloca sNegociacoes para iformar que o update e o template sao do tipo Negociacoes
    //Declara o template da view, dentro dela vai ter um map que vai retornar uma lista
    //Resumindo o template vai retornar uma string onde o tbody vai ser uma string convertendo
    //todos os modelos de negociacao para uma lista de String
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                    <tr>
                        <td>${this.formatar(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>         
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    //O comando "Intl.DateTimeFormat().format()" formata automaticamente a data para que seja do mesmo
    //formato que o do sistema do usuário
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
