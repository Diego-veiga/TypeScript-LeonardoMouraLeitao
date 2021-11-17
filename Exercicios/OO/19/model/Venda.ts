import { Guid } from 'guid-typescript';
import { ItemVenda } from './itemVenda';

export class Venda{
     private Id:string
     private itens:ItemVenda[];
     private subtTotal:number;
     private Total:number
    constructor(){
      this.Id = this.geraid()
      this.itens =[]
    }

    get id():string{
      return this.Id
    }
    public geraid():string{
      return  Guid.create().toString()
    }
  public adicinaItem(item:ItemVenda):void{
      item.retornaSequencia()
      this.itens.push(item)
      this.ValorTotalItens()
  }
  
  public retornaQuantidadeItens(){
    return this.itens.length
  }

  public ValorTotalItens(){
   const totalItens =this.itens.reduce((total, item)=>{
        return total+=item.getValorTotalItem
    },0)
    this.subtTotal= totalItens
    console.log('this.subtTotal',this.subtTotal)
   return this.subtTotal= totalItens
  }

  public removerItem(item){
    const itemRemover = this.itens.indexOf(item)
     this.itens.splice(itemRemover,1)
     this.ValorTotalItens();
  }

}