export abstract class View<T>{
    //Como View agora é uma classe abstrata, não é possível criar instâncias desta classe.
    //Isso faz sentido, porque a classe não sabe como o método template deve ser 
    //implementado. É responsabilidade das classes filhas a implementação do método.

    //O T indica tipo por exemplo: string ou negociacoes

    protected elemento: HTMLElement;
    //Ao colocar o protected apenas as classes filhas poderão manusear ela
    private escapar = false;

    //O constructor vai ser o responsavel por colocar o template no index
    //O escapar tem ? indicando que é opcional, logo seu default será false
    //Os opcionais deve ser sempre no final 
    constructor(seletor: string, escapar?: boolean){
        //Dessa forma vai guardar um elemto do DOM que vai armazenar o template
        //não precisando buscar toda hora
        const elemento = document.querySelector(seletor);
        //Para impedir do elemento receber null deve criar uma condição e inserir o HTMLElement
        if(elemento){
            this.elemento=elemento as HTMLElement;
        }
        else{
            throw Error(`Seletor ${seletor} não esiste no DOM. Verifique`)
        }
        if(escapar){
            this.escapar=escapar;//vai colocar o escapar como true, por conta que o usuário passou true nos parâmetros
        }
        
    }

    //Renderiza o elemeto da view por meio do elemento informado no constructor
    public update(model: T): void{
        let template = this.template(model);
        //Deve impedir do usuário colocar script no template por motivo de segurança
        if(this.escapar){
            template=template.replace(/<script>[\s\S]*?<script>/,'');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string
    //Além disso toda classe abstract pode definir 0 ou mais metodos
    //com isso vai exibir o problema durante o tempo de execução
    //e vai obrigar o programador a implementar um template em uma classe filha
    //Por estar protected somente o pai e as filhas podem acessar
    /*
    //Caso o programador esqueça de criar o metodo template, vai mandar um erro
    template(model: T): string{
        throw Error('Classe filha precisa implementar o método templates')
    }
    */
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

