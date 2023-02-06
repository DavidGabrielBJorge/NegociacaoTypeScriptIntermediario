export class View {
    //O constructor vai ser o responsavel por colocar o template no index
    //O escapar tem ? indicando que é opcional, logo seu default será false
    //Os opcionais deve ser sempre no final 
    constructor(seletor, escapar) {
        //Ao colocar o protected apenas as classes filhas poderão manusear ela
        this.escapar = false;
        //Dessa forma vai guardar um elemto do DOM que vai armazenar o template
        //não precisando buscar toda hora
        const elemento = document.querySelector(seletor);
        //Para impedir do elemento receber null deve criar uma condição e inserir o HTMLElement
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não esiste no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar; //vai colocar o escapar como true, por conta que o usuário passou true nos parâmetros
        }
    }
    //Renderiza o elemeto da view por meio do elemento informado no constructor
    update(model) {
        let template = this.template(model);
        //Deve impedir do usuário colocar script no template por motivo de segurança
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
/*
Para testar uma expressao regular pode usar o console do chrome digitando
exp = /<script>[\s\S]*?<script>/
depois deve digitar
"<script>alert('oi')</script>".replace(exp,'')
dessa forma retoran ''vazio
se digitar:
"<p>teste</p><script>alert('oi')</script>".replace(exp,'')
vai retornar apenas a tag p <p>teste</p>
*/
