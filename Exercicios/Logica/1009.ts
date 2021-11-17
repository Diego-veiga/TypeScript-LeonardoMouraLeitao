

class Vendedor{
    private id:number=0
    private Nome:string=''
    private salarioFixo:number=0
    private Vendas: Venda[] = []
  
    constructor(public Id:number, public nome:string, public salariofixo:number, public venda:Venda[] ){
        this.id = Id
        this.Nome = nome
        this.salarioFixo = salariofixo
        this.Vendas = venda

    }
    adicionarVenda(v:Venda){
        this.Vendas.push(v)
    }
     calculaComissao(){
         const vendaDinhieiro = this.Vendas.filter((element)=> element.TipoPagameto === TipoPagamento.Dinhiero)
         const valoresdevenda = vendaDinhieiro.map((element) =>element.valorTotal)
         return valoresdevenda.reduce((total,element)=>{
             return  total  + element
         })
     }
    porcentagemVenda(){
        return this.calculaComissao() * 0.15
    }
    salarioFinal(){
        return this.salarioFixo + this.porcentagemVenda()
    }

}
class Venda {
    private ValorTotal:number=0
    private Vendedor: Vendedor
    private TipoPagamento: TipoPagamento=0
    constructor(public TipoPagameto:TipoPagamento, public vendedor:Vendedor) {
        this.TipoPagamento = TipoPagameto
        this.Vendedor = vendedor
    }

    set valorTotal(valor:number){
         if (valor>0 ){
             this.ValorTotal =valor
         }else{
             throw new Error('o valor da venda deve ser maior que  0')
         }
    }
    get valorTotal():number{
        return this.ValorTotal
    }

}


enum TipoPagamento{
    Dinhiero,
    Cartão, 
    cheque
}

const vendasss:Venda[]=[]
const po =  new Vendedor(1,'Diego Veiga', 1000,vendasss)


const venda1 = new Venda(TipoPagamento.Dinhiero,po)
venda1.valorTotal=150
const venda2 = new Venda(TipoPagamento.Dinhiero,po)
venda2.valorTotal=200
const venda3 = new Venda(TipoPagamento.Cartão,po)
venda3.valorTotal=800
const v: Venda[] =[] 
vendasss.push(venda1)
vendasss.push(venda2)
vendasss.push(venda3)



console.log(po.calculaComissao())
console.log(po.porcentagemVenda())
console.log(po.salarioFinal())



