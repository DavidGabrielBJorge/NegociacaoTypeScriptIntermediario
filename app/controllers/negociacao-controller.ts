import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js'

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    //Informando a div "negociacoesView" vai criar a tabela com os dados, deve informar o seletor
    // e se deve ou não escapar(impedir de colocar script no template)
    private negociacoesView=new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    //


    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        //O "as HTMLInputElement" indica que o retorno dessa função garante que o tipo que vai ser retornado será HTMLInputElement, não sendo null
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        //Ao carregar a página cria a tabela
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        //Vai criar a negociação
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        //Impedir que tenha negociacao em finais de semana
        //A função getDay pega o dia da semana de seg-dom de 0 a 6
        //Verifica se nao eh dia util
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas !');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();//Vai chamar a função privada de atualizar a view
        
    }

    private ehDiaUtil(data: Date){
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay()< DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    //Tanto o "atualizaView", "limpaFormulario" e "criaNegociacao" devem ser privados, pois 
    //não podem ser chamados em outros arquivos. Porém o adiciona deve ser público pois é
    //chamado no app.ts
}
