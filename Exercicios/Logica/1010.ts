class Peca {
    constructor(public codigo:number, public numero:number, public precoUnitario:number) {
        
    }
}

function retornaValorItem(pecas: Peca[]):number{
     return pecas.map(elemenr=> elemenr.numero * elemenr.precoUnitario).reduce((valor, total)=> {return total + valor})

}

function main(){
    const p1 = new Peca(12,1,5.30)
    const p2 = new Peca(16,2,5.10)
    console.log(retornaValorItem([p1,p2]))
}

 /**function main(){
    const p1 = new Peca(12,1,5.30)
    const p2 = new Peca(16,2,5.10)

    const totapeca1 = p1.numero * p1.precoUnitario
    const totapeca2 = p2.numero * p2.precoUnitario

     const total = totapeca1 + totapeca2
     console.log('Total', total.toFixed(2))
 }*/

 main()

