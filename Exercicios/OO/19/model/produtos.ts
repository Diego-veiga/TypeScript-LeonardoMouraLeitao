import { TipoProduto } from './../enum/tipoProduto';

export class Produto{
    constructor(public id:string, public Produto:string, public QuantidadeEstoque:number, public tipoProduto:TipoProduto,public precoVenda:number){}

    
}