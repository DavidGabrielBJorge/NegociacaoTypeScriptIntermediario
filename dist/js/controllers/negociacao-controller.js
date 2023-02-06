import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
export class NegociacaoController {
    //
    constructor() {
        this.negociacoes = new Negociacoes();
        //Informando a div "negociacoesView" vai criar a tabela com os dados, deve informar o seletor
        // e se deve ou não escapar(impedir de colocar script no template)
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        //O "as HTMLInputElement" indica que o retorno dessa função garante que o tipo que vai ser retornado será HTMLInputElement, não sendo null
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        //Ao carregar a página cria a tabela
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        //Vai criar a negociação
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        //Impedir que tenha negociacao em finais de semana
        //A função getDay pega o dia da semana de seg-dom de 0 a 6
        //Verifica se nao eh dia util
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas !');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView(); //Vai chamar a função privada de atualizar a view
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
