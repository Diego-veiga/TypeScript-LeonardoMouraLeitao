import { Produto } from './produtos';
import { Venda } from './Venda';


export class ItemVenda{
    private idVenda:string
    private idProduto:string
    private QuantidadeItem:number
    private sequncia:number
    private precoItem:number
    private subTotalItem:number=0
    private ValorTotalItem:number
    private Venda:Venda
    private Produto:Produto
    private ValorDesconto:number;
    constructor(venda:Venda, produto:Produto,public quantidadeItem:number ){
        this.idProduto = produto.id
        this.idVenda = venda.id
        this.precoItem = produto.precoVenda
        this.Venda =venda
        this.Produto = produto
        this.QuantidadeItem = quantidadeItem
        this.sequncia = this.retornaSequencia()
        this.subTotalItem = this.CalculaSubTotalitem()
        this.ValorDesconto = this.calculaDesconto()
        this.ValorTotalItem = this.calculaTotalItem()
    }

    get getValorTotalItem():number{
      return this.ValorTotalItem
    }
    public retornaSequencia():number{
      let sequencia=  this.Venda.retornaQuantidadeItens() 
      return this.sequncia= sequencia+1
       
    }

    CalculaSubTotalitem():number{
       return this.QuantidadeItem * this.precoItem 
    }

    public calculaTotalItem():number{
     return this.ValorTotalItem = this.subTotalItem - this.ValorDesconto
    }
    public calculaDesconto():number{
        if(this.quantidadeItem>10) return this.ValorDesconto = (this.subTotalItem * 10)/100
        if(this.quantidadeItem>20) return this.ValorDesconto = (this.subTotalItem * 20)/100
        if(this.quantidadeItem>50)  return this.ValorDesconto = (this.subTotalItem * 25)/100
    }


   
}