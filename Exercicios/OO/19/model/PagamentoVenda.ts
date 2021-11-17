import { Venda } from './Venda';
export class PagamentoVenda{
    constructor(public id:number, public valorPagamento:number, public venda:Venda, public pagamento:PagamentoVenda){}
}